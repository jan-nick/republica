import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ForgotPasswordForm } from "./_components/forgot-password-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your Republica account and start playing!",
};

export default function LoginPage() {
  return (
    <>
      <div className="h-full container relative flex-col items-center justify-center grid">
        <Link
          href="/auth/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}>
          Login
        </Link>
        <div>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Reset password
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email to reset your password.
              </p>
            </div>
            <ForgotPasswordForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              We will send you a link to reset your password to your inbox.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
