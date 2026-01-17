const attempts = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
];

export type KeyboardLetter = {
  letter: string;
  state:
    | "unused"
    | "used and incorrect"
    | "correct letter"
    | "correct letter and position";
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
  { letter: "ENTER", state: "unused" },
  { letter: "Z", state: "unused" },
  { letter: "X", state: "unused" },
  { letter: "C", state: "unused" },
  { letter: "V", state: "unused" },
  { letter: "B", state: "unused" },
  { letter: "N", state: "unused" },
  { letter: "M", state: "unused" },
  { letter: "⌫", state: "unused" },
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
    const storedGameState = localStorage.getItem("gameState");
    if (storedGameState !== null) {
      return JSON.parse(storedGameState);
    }
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("gameState", JSON.stringify(false));
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
