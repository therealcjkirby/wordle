import type { Metadata } from "next";
import "./globals.css";
import { PlayingContextProvider } from "@/components/PlayContext";
import fetchNewWord from "@/lib/answer";

export const metadata: Metadata = {
  title: "Wordle",
  description: "Wordle Clone built by Xonin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const word = (await fetchNewWord()).toUpperCase();
  return (
    <html lang="en">
      <body className={"bg-neutral-100"}>
        <PlayingContextProvider answer={word}>
          {children}
        </PlayingContextProvider>
      </body>
    </html>
  );
}
