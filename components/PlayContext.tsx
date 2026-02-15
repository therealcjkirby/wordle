"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import {
  currentGameState,
  currentGuesses,
  currentRound,
  currentUsedKeys,
  gameResults,
  KeyboardLetter,
  Results,
} from "@/store/LocalStorage";

type PlayingStats = {
  letterPosition: number;
  roundNumber: number;
  isPlaying: boolean;
  isGameOver: boolean;
  answer: string;
  attemptsList: string[][];
  currentKeys: KeyboardLetter[];
  results: Results;
  setPositionForward: () => void;
  setPositionBackward: () => void;
  resetPosition: () => void;
  setRoundCount: () => void;
  setPlayingState: () => void;
  setGameFinished: () => void;
  setGuessedLetter: (letterToSet: string) => void;
  removeGuessedLetter: () => void;
  checkIsValidLetter: (letterToCheck: string) => boolean;
  canSubmit: (letterToCheck: string) => boolean;
  updateKeys: () => void;
  setGameWon: () => void;
  setGameLost: () => void;
};

const PlayingContext = createContext<PlayingStats | null>(null);

type Props = {
  children: ReactNode;
  answer: string;
};

export function PlayingContextProvider({ children, answer }: Props) {
  const [letterPos, setLetterPos] = useState(0);
  const [round, setRound] = useState(currentRound);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setGameOver] = useState(currentGameState);
  const [board, setBoard] = useState<string[][]>(currentGuesses);
  const [keys, setKeys] = useState(currentUsedKeys);
  const [results, setResults] = useState(gameResults);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("round", JSON.stringify(round));
      localStorage.setItem("gameOver", JSON.stringify(isGameOver));
      localStorage.setItem("guesses", JSON.stringify(board));
      localStorage.setItem("usedKeys", JSON.stringify(keys));
      localStorage.setItem("gameResults", JSON.stringify(results));
    }
  }, [round, isGameOver]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gameAnswer", answer);
    }
  }, []);

  const setPositionForward = () => {
    if (letterPos < 4) {
      setLetterPos((prevPos) => (prevPos += 1));
    }
  };

  const setPositionBackward = () => {
    if (letterPos > 0) {
      setLetterPos((prevPos) => (prevPos -= 1));
    }
  };

  const resetPosition = () => {
    setLetterPos(0);
  };

  const setRoundCount = () => {
    round <= 5 && setRound((prevRound) => prevRound + 1);
  };

  const setPlayingState = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const setGameFinished = () => {
    setGameOver(true);
  };

  const setGuessedLetter = (letterToSet: string) => {
    //
    if (isGameOver == false) {
      const updatedBoard = [...board];
      if (letterPos < 4 && board[round][letterPos] !== " ") {
        updatedBoard[round][letterPos + 1] = letterToSet;
      } else if (board[round][letterPos] === " ") {
        updatedBoard[round][letterPos] = letterToSet;
      }
      setBoard(updatedBoard);
      setPositionForward();
    }
  };

  const removeGuessedLetter = () => {
    if (isGameOver == false) {
      const updatedBoard = [...board];
      if (letterPos > 0 && board[round][letterPos] === " ") {
        updatedBoard[round][letterPos - 1] = " ";
      } else {
        updatedBoard[round][letterPos] = " ";
      }
      setBoard(updatedBoard);
      setPositionBackward();
    }
  };

  const checkIsValidLetter = (letterToCheck: string) => {
    return /^[a-z]$/i.test(letterToCheck);
  };

  const canSubmit = (letterToCheck: string) => {
    if (
      letterToCheck === "ENTER" &&
      letterPos === 4 &&
      board[round][letterPos].trim().length !== 0
    ) {
      return true;
    }

    return false;
  };

  const updateKeys = () => {
    const currentBoard = [...board];
    const currentKeys = [...keys];

    currentBoard.forEach((word) => {
      word.forEach((letter) => {
        if (letter !== " ") {
          if (answer.indexOf(letter) === word.indexOf(letter)) {
            currentKeys[
              currentKeys.findIndex((key) => key.letter === letter)
            ]!.state = "correct letter and position";
          }
          if (
            answer.includes(letter) &&
            currentKeys.find((key) => key.letter === letter)?.state !==
              "correct letter and position"
          ) {
            currentKeys[
              currentKeys.findIndex((key) => key.letter === letter)
            ]!.state = "correct letter";
          }
          if (!answer.includes(letter)) {
            currentKeys[
              currentKeys.findIndex((key) => key.letter === letter)
            ]!.state = "used and incorrect";
          }
        }
      });
    });

    setKeys(currentKeys);
  };

  const setGameWon = () => {
    setResults("won");
  };

  const setGameLost = () => {
    setResults("lost");
  };

  const context = {
    letterPosition: letterPos,
    roundNumber: round,
    isPlaying,
    isGameOver: isGameOver,
    answer: answer,
    attemptsList: board,
    currentKeys: keys,
    results,
    setPositionForward,
    setPositionBackward,
    resetPosition,
    setRoundCount,
    setPlayingState,
    setGameFinished,
    setGuessedLetter,
    removeGuessedLetter,
    checkIsValidLetter,
    canSubmit,
    updateKeys,
    setGameWon,
    setGameLost,
  };

  return (
    <PlayingContext.Provider value={context}>
      {children}
    </PlayingContext.Provider>
  );
}

export default PlayingContext;
