import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { PlayingContextProvider } from "@/components/PlayContext";

const sourceCodePro = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wordle",
  description: "Wordle Clone built by Xonin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-100">
        <PlayingContextProvider>{children}</PlayingContextProvider>
      </body>
    </html>
  );
}
