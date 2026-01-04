"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const DUMMY_ANSWER = "gravy";

type AnswerStats = {
  answer: string;
  isAnswer: boolean;
  checkAnswer: () => void;
  checkIsValidLetter: () => void;
};

const AnswerContext = createContext<AnswerStats>({
  answer: DUMMY_ANSWER,
  isAnswer: false,
  checkAnswer: () => {},
  checkIsValidLetter: () => {},
});

type Props = {};

export function AnswerContextProvider({ children }: { children: ReactNode }) {
  const [isAnswer, setIsAnswer] = useState(false);

  const context = {};

  return (
    <AnswerContext.Provider value={context}>{children}</AnswerContext.Provider>
  );
}

export default AnswerContext;
