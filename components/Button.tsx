"use client";

import { ReactNode } from "react";

type ButtonProps = {
  clickHandler: () => void;
  color: "WHITE" | "BLACK";
  children: ReactNode;
};

export default function Button({
  clickHandler,
  color = "WHITE",
  children,
}: ButtonProps) {
  const buttonColor = () => {
    if (color === "BLACK") {
      return "outline-neutral-950 bg-neutral-950 hover:bg-neutral-800 hover:outline-neutral-800 text-neutral-100";
    } else {
      return "outline-neutral-950 bg-neutral-100 text-neutral-950";
    }
  };

  return (
    <button
      className={
        buttonColor() +
        " outline-1 w-35 h-10 m-2 font-bold rounded-3xl cursor-pointer"
      }
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
