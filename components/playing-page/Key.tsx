"use client";

import { useContext } from "react";

import PlayingContext from "@/components/PlayContext";

type Props = {
  letter: string;
};

function Key({ letter }: Props) {
  const gameCtx = useContext(PlayingContext);

  const handleClick = () => {
    if (letter === "⌫") {
      gameCtx.removeGuessedLetter();
    }
    if (letter !== "⌫" && letter !== "ENTER") {
      gameCtx.setGuessedLetter(letter);
    }
    if (gameCtx.canSubmit(letter)) {
      gameCtx.setRoundCount();
      gameCtx.resetPosition();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={
        letter === "ENTER"
          ? "key-container text-sm px-4"
          : letter === "⌫"
            ? "key-container text-lg px-5"
            : "key-container"
      }
    >
      <p className="select-none">{letter}</p>
    </button>
  );
}

export default Key;
