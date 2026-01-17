"use client";

import { useContext } from "react";

import Letter from "@/components/playing-page/Letter";
import PlayingContext from "@/components/PlayContext";

function AttemptsBoard() {
  const gameCtx = useContext(PlayingContext);

  const attempts = gameCtx!.attemptsList;

  const checkAnswer = (
    letterToCheck: string,
    rowIndex: number,
    colIndex: number,
  ): string => {
    if (gameCtx!.roundNumber > rowIndex) {
      return gameCtx!.answer[colIndex] === letterToCheck
        ? "bg-green-800"
        : gameCtx!.answer.includes(letterToCheck)
          ? "bg-yellow-300"
          : "bg-gray-500";
    }
    return " ";
  };

  return (
    <div className="board-container">
      {attempts.map((row, rowIndex) => (
        <div key={rowIndex} className={"attempt-container"}>
          {row.map((col, colIndex) => (
            <Letter
              key={`${rowIndex}-${colIndex}`}
              letter={attempts[rowIndex][colIndex]}
              classes={`attempt-letter ${checkAnswer(col, rowIndex, colIndex)}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AttemptsBoard;
