import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DbProvider } from "@/providers/db-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Republica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DbProvider>{children}</DbProvider>
      </body>
    </html>
  );
}
