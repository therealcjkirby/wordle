"use client";

import { useContext } from "react";

import LoginButton from "@/components/starting-page/LoginButton";
import WordleIcon from "@/components/WordleIcon";
import PlayingContext from "@/components/PlayContext";
import Button from "@/components/Button";

import { auth0 } from "@/lib/auth0";

type AuthReturnType = Awaited<ReturnType<typeof auth0.getSession>>;

function StartingPage({ session }: { session: AuthReturnType }) {
  const gameCtx = useContext(PlayingContext);
  const setPlayingState = gameCtx!.setPlayingState;

  function handleClick() {
    setPlayingState();
  }

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-100">
      <div className="place-items-center">
        <WordleIcon size={70} twFontSize="text-5xl" />
        <h2 className="text-neutral-950 pt-4 text-3xl w-90 text-center">
          Get 6 chances to guess a 5-letter word.
        </h2>
        <div className="py-5">
          {!session && <LoginButton />}
          <Button color={"BLACK"} clickHandler={handleClick}>
            Play
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StartingPage;
