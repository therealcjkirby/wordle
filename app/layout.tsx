import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

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
      <head>
        <link rel="stylesheet" href="./globals.css" />
      </head>
      <body>
        <div className="place-items-center w-screen h-screen pt-[40vh] bg-neutral-100">
          {children}
        </div>
      </body>
    </html>
  );
}
