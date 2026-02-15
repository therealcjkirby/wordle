"use client";
import Button from "@/components/Button";
import { redirect, RedirectType } from "next/navigation";

export default function LoginButton() {
  const clickHandler = () => {
    redirect("/auth/login", RedirectType.push);
  };

  return (
    <Button color="WHITE" clickHandler={clickHandler}>
      Login
    </Button>
  );
}
