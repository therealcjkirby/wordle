"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

const initialStart = 0;

const ANSWER = "GRAVY";

const attempts = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
];

type CellValue = string;

type PlayingStats = {
  letterPosition: number;
  roundNumber: number;
  isPlaying: boolean;
  isGameOver: boolean;
  answer: string;
  attemptsList: string[][];
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
};

const PlayingContext = createContext<PlayingStats>({
  letterPosition: initialStart,
  roundNumber: initialStart,
  isPlaying: false,
  isGameOver: false,
  answer: ANSWER,
  attemptsList: attempts,
  setPositionForward: () => {},
  setPositionBackward: () => {},
  resetPosition: () => {},
  setRoundCount: () => {},
  setPlayingState: () => {},
  setGameFinished: () => {},
  setGuessedLetter: (letterToSet: string) => {},
  removeGuessedLetter: () => {},
  checkIsValidLetter: (answerToCheck: string) => {
    return false;
  },
  canSubmit: (letterToCheck: string) => {
    return false;
  },
});

export function PlayingContextProvider({ children }: { children: ReactNode }) {
  const [letterPos, setLetterPos] = useState(initialStart);
  const [round, setRound] = useState(initialStart);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const [board, setBoard] = useState<string[][]>(attempts);

  useEffect(() => {
    console.log("Position at the end of action: " + letterPos);
    console.log(board);
  }, [letterPos]);

  const setPositionForward = () => {
    if (letterPos < 4) {
      setLetterPos((prevPos) => (prevPos += 1));
      console.log("moved forward");
    }
  };

  const setPositionBackward = () => {
    if (letterPos > 0) {
      setLetterPos((prevPos) => (prevPos -= 1));
      console.log("moved backward");
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
      board[round][letterPos].length !== 0
    ) {
      console.log("ITS TRUE");
      return true;
    }

    return false;
  };

  const context = {
    letterPosition: letterPos,
    roundNumber: round,
    isPlaying,
    isGameOver,
    answer: ANSWER,
    attemptsList: board,
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
  };

  return (
    <PlayingContext.Provider value={context}>
      {children}
    </PlayingContext.Provider>
  );
}

export default PlayingContext;
