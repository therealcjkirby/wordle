"use client";

import { useContext, useEffect } from "react";

import PlayingContext from "@/components/PlayContext";

type Props = {
  letter: string;
};

function Key({ letter }: Props) {
  const gameCtx = useContext(PlayingContext);
  const allKeys = gameCtx!.currentKeys;

  const handleClick = () => {
    if (letter === "⌫") {
      gameCtx!.removeGuessedLetter();
    }
    if (letter !== "⌫" && letter !== "ENTER") {
      gameCtx!.setGuessedLetter(letter);
    }
    if (gameCtx!.canSubmit(letter)) {
      gameCtx!.setRoundCount();
      gameCtx!.resetPosition();
      gameCtx!.updateKeys();
    }
  };

  const checkKeyType = (letterToCheck: string): string => {
    const standardContainer = "key-container";
    if (letterToCheck === "ENTER") {
      return `${standardContainer} text-sm px-4`;
    }
    if (letterToCheck === "⌫") {
      return `${standardContainer} text-lg px-5`;
    }
    if (
      allKeys[allKeys.findIndex((key) => key.letter === letterToCheck)]
        .state === "correct letter and position"
    ) {
      return standardContainer + " bg-green-800";
    }
    if (
      allKeys[allKeys.findIndex((key) => key.letter === letterToCheck)]
        .state === "correct letter"
    ) {
      return standardContainer + " bg-yellow-300";
    }
    if (
      allKeys[allKeys.findIndex((key) => key.letter === letterToCheck)]
        .state === "used and incorrect"
    ) {
      return standardContainer + " bg-gray-500";
    }
    if (
      allKeys[allKeys.findIndex((key) => key.letter === letterToCheck)]
        .state === "unused"
    ) {
      return standardContainer;
    }
    return "";
  };

  useEffect(() => {
    //
  }, [gameCtx!.roundNumber]);

  return (
    <button onClick={handleClick} className={checkKeyType(letter)}>
      <p className="select-none">{letter}</p>
    </button>
  );
}

export default Key;
