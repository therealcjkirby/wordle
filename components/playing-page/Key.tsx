"use client";

import { useContext, useEffect } from "react";

import PlayingContext from "@/components/PlayContext";
import { gameWon } from "@/lib/utils";

type Props = {
  letter: string;
};

function Key({ letter }: Props) {
  const gameCtx = useContext(PlayingContext);
  const allKeys = gameCtx!.currentKeys;

  const handleClick = () => {
    if (!gameCtx!.isGameOver) {
      if (letter === "⌫") {
        gameCtx!.removeGuessedLetter();
      }
      if (letter !== "⌫" && letter !== "Enter" && /^[A-Z]$/i.test(letter)) {
        gameCtx!.setGuessedLetter(letter);
      }
      if (gameCtx!.canSubmit(letter)) {
        gameCtx!.updateKeys();

        if (
          gameWon(gameCtx!.attemptsList, gameCtx!.roundNumber, gameCtx!.answer)
        ) {
          gameCtx!.setGameFinished();
          gameCtx!.setGameWon();
        }

        if (gameCtx!.roundNumber !== 5) {
          gameCtx!.setRoundCount();
          gameCtx!.resetPosition();
        }

        if (gameCtx!.roundNumber === 5) {
          gameCtx!.setGameFinished();
          if (
            !gameWon(
              gameCtx!.attemptsList,
              gameCtx!.roundNumber,
              gameCtx!.answer,
            )
          ) {
            gameCtx!.setGameLost();
          }
        }
      }
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
      return standardContainer + " bg-green-500";
    }
    if (
      allKeys[allKeys.findIndex((key) => key.letter === letterToCheck)]
        .state === "correct letter"
    ) {
      return standardContainer + " bg-yellow-200";
    }
    if (
      allKeys[allKeys.findIndex((key) => key.letter === letterToCheck)]
        .state === "used and incorrect"
    ) {
      return standardContainer + " bg-gray-400";
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
    <button
      onClick={handleClick}
      className={checkKeyType(letter)}
      tabIndex={-1}
    >
      <p className="select-none">{letter}</p>
    </button>
  );
}

export default Key;
