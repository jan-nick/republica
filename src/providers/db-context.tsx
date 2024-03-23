"use client";
import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";
import PocketBase, { RecordAuthResponse } from "pocketbase";
import { User } from "@/types/user";
import { setCookie } from "cookies-next";

export type Db = {
  db: PocketBase;
  user: User;
  token: string;
  signUp: (username: string, email: string, password: string) => Promise<User>;
  login: (email: string, password: string) => Promise<RecordAuthResponse<User>>;
  logout: () => void;
};

const DbContext = createContext<Db>({} as Db);

export const DbProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const db = useMemo(() => new PocketBase("http://127.0.0.1:8090"), []);

  const [token, setToken] = useState(db.authStore.token);
  const [user, setUser] = useState(db.authStore.model as User);

  useEffect(() => {
    return db.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model as User);
    });
  }, []);

  const signUp = useCallback(
    async (username: string, email: string, password: string) => {
      return await db
        .collection<User>("users")
        .create({ username, email, password, passwordConfirm: password });
    },
    []
  );

  const login = useCallback(async (email: string, password: string) => {
    const user = await db
      .collection<User>("users")
      .authWithPassword(email, password);

    setCookie("currentUser", JSON.stringify(user));

    return user;
  }, []);

  const logout = useCallback(() => {
    db.authStore.clear();
  }, []);

  return (
    <DbContext.Provider value={{ signUp, login, logout, user, token, db }}>
      {children}
    </DbContext.Provider>
  );
};

export const useDb = () => useContext(DbContext);
