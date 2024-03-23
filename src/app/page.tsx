import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create a new Republica account and start playing!",
};

export default function HomePage() {
  return (
    <>
      <div className="h-full container relative  h-[800px] flex-col items-center justify-center grid">
        <Link
          href="/auth/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}>
          Login
        </Link>
        <h1>Welcome</h1>
      </div>
    </>
  );
}
