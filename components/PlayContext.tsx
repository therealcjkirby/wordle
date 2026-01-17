"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import {
  currentGameState,
  currentGuesses,
  currentRound,
  currentUsedKeys,
  KeyboardLetter,
} from "@/store/LocalStorage";

const ANSWER = "GRAVY";

type PlayingStats = {
  letterPosition: number;
  roundNumber: number;
  isPlaying: boolean;
  isGameOver: boolean;
  answer: string;
  attemptsList: string[][];
  currentKeys: KeyboardLetter[];
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
};

const PlayingContext = createContext<PlayingStats | null>(null);

export function PlayingContextProvider({ children }: { children: ReactNode }) {
  const [letterPos, setLetterPos] = useState(0);
  const [round, setRound] = useState(currentRound);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setGameOver] = useState(currentGameState);
  const [board, setBoard] = useState<string[][]>(currentGuesses);
  const [keys, setKeys] = useState(currentUsedKeys);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("round", JSON.stringify(round));
      localStorage.setItem("gameState", JSON.stringify(isGameOver));
      localStorage.setItem("guesses", JSON.stringify(board));
      localStorage.setItem("usedKeys", JSON.stringify(keys));
    }
  }, [round, isGameOver]);

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
    round < 5 && setRound((prevRound) => prevRound + 1);
  };

  const setPlayingState = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const setGameFinished = () => {
    setGameOver((prevState) => !prevState);
  };

  const setGuessedLetter = (letterToSet: string) => {
    //
    const updatedBoard = [...board];
    if (letterPos < 4 && board[round][letterPos] !== " ") {
      updatedBoard[round][letterPos + 1] = letterToSet;
    } else if (board[round][letterPos] === " ") {
      updatedBoard[round][letterPos] = letterToSet;
    }
    setBoard(updatedBoard);
    setPositionForward();
  };

  const removeGuessedLetter = () => {
    const updatedBoard = [...board];
    if (letterPos > 0 && board[round][letterPos] === " ") {
      updatedBoard[round][letterPos - 1] = " ";
    } else {
      updatedBoard[round][letterPos] = " ";
    }
    setBoard(updatedBoard);
    setPositionBackward();
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
          if (ANSWER.indexOf(letter) === word.indexOf(letter)) {
            currentKeys[
              currentKeys.findIndex((key) => key.letter === letter)
            ]!.state = "correct letter and position";
          }
          if (
            ANSWER.includes(letter) &&
            currentKeys.find((key) => key.letter === letter)?.state !==
              "correct letter and position"
          ) {
            currentKeys[
              currentKeys.findIndex((key) => key.letter === letter)
            ]!.state = "correct letter";
          }
          if (!ANSWER.includes(letter)) {
            currentKeys[
              currentKeys.findIndex((key) => key.letter === letter)
            ]!.state = "used and incorrect";
          }
        }
      });
    });

    setKeys(currentKeys);
  };

  const context = {
    letterPosition: letterPos,
    roundNumber: round,
    isPlaying,
    isGameOver,
    answer: ANSWER,
    attemptsList: board,
    currentKeys: keys,
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
  };

  return (
    <PlayingContext.Provider value={context}>
      {children}
    </PlayingContext.Provider>
  );
}

export default PlayingContext;
