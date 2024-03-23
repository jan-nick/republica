import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LoginForm } from "./_components/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your Republica account and start playing!",
};

export default function LoginPage() {
  return (
    <>
      <div className="h-full container relative flex-col items-center justify-center grid">
        <Link
          href="/auth/sign-up"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}>
          Sign up
        </Link>
        <div>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and a password below to login
              </p>
            </div>
            <LoginForm />
            {/* <p className="px-8 text-center text-sm text-muted-foreground">
              Forgot your password? Click{" "}
              <Link
                href="/auth/forgot-password"
                className="underline underline-offset-4 hover:text-primary">
                here
              </Link>{" "}
              to reset.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
