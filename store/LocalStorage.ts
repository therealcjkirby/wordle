const attempts = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
];

export type Results = "lost" | "won" | null;

export type KeyboardLetter = {
  letter: string;
  state:
    | "unused"
    | "used and incorrect"
    | "correct letter"
    | "correct letter and position"
    | null;
};

const storedKeys: KeyboardLetter[] = [
  { letter: "Q", state: "unused" },
  { letter: "W", state: "unused" },
  { letter: "E", state: "unused" },
  { letter: "R", state: "unused" },
  { letter: "T", state: "unused" },
  { letter: "Y", state: "unused" },
  { letter: "U", state: "unused" },
  { letter: "I", state: "unused" },
  { letter: "O", state: "unused" },
  { letter: "P", state: "unused" },
  { letter: "A", state: "unused" },
  { letter: "S", state: "unused" },
  { letter: "D", state: "unused" },
  { letter: "F", state: "unused" },
  { letter: "G", state: "unused" },
  { letter: "H", state: "unused" },
  { letter: "J", state: "unused" },
  { letter: "K", state: "unused" },
  { letter: "L", state: "unused" },
  { letter: "ENTER", state: null },
  { letter: "Z", state: "unused" },
  { letter: "X", state: "unused" },
  { letter: "C", state: "unused" },
  { letter: "V", state: "unused" },
  { letter: "B", state: "unused" },
  { letter: "N", state: "unused" },
  { letter: "M", state: "unused" },
  { letter: "⌫", state: null },
];

export const currentRound = (): number => {
  if (typeof window !== "undefined") {
    const storedRound = localStorage.getItem("round");
    if (storedRound !== null) {
      return JSON.parse(storedRound);
    }
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("round", JSON.stringify(0));
  }
  return 0;
};

export const currentGuesses = (): string[][] => {
  if (typeof window !== "undefined") {
    const storedGuesses = localStorage.getItem("guesses");
    if (storedGuesses !== null) {
      return JSON.parse(storedGuesses);
    }
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("guesses", JSON.stringify(attempts));
  }
  return attempts;
};

export const currentGameState = (): boolean => {
  if (typeof window !== "undefined") {
    const storedGameState = localStorage.getItem("gameOver");
    if (storedGameState !== null) {
      return JSON.parse(storedGameState);
    }
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("gameOver", JSON.stringify(false));
  }
  return false;
};

export const currentUsedKeys = (): KeyboardLetter[] => {
  if (typeof window !== "undefined") {
    const storedUsedKeys = localStorage.getItem("usedKeys");
    if (storedUsedKeys !== null) {
      return JSON.parse(storedUsedKeys);
    }
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("usedKeys", JSON.stringify(storedKeys));
  }
  return storedKeys;
};

export const gameResults = (): Results => {
  if (typeof window !== "undefined") {
    const storedGameResults = localStorage.getItem("gameResults");
    if (storedGameResults !== null) {
      return JSON.parse(storedGameResults);
    }
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("gameResults", JSON.stringify(null));
  }
  return null;
};

export const gameAnswer = (): string => {
  if (typeof window !== "undefined") {
    const storedGameAnswer = localStorage.getItem("gameAnswer");
    if (storedGameAnswer !== null) {
      return JSON.parse(storedGameAnswer);
    }
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("gameAnswer", JSON.stringify(null));
  }
  return "";
};
