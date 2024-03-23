"use client";

import { ChangeEvent, SyntheticEvent, useState } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";
import { useDb } from "@/providers/db-context";

export function SignUpForm() {
  const { login, signUp } = useDb();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await signUp(username, email, password);
      await login(username, email);

      router.push("/menu");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              value={username}
              onChange={handleChangeUsername}
              id="username"
              placeholder="Example username"
              type="text"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={handleChangeEmail}
              id="email"
              placeholder="name@example.com"
              type="email"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={handleChangePassword}
              id="password"
              placeholder="Must have at least 16 characters"
              type="password"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
