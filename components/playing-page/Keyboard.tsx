import Key from "@/components/playing-page/Key";
import PlayingContext from "../PlayContext";
import { useEffect, useContext } from "react";

const keyBoardLetters = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

function Keyboard() {
  const gameCtx = useContext(PlayingContext);

  const listener = (event: globalThis.KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (key === "BACKSPACE") {
      gameCtx.removeGuessedLetter();
    }
    if (key !== "Backspace" && key !== "Enter" && /^[A-Z]$/i.test(key)) {
      gameCtx.setGuessedLetter(key);
    }
    if (gameCtx.canSubmit(key)) {
      gameCtx.setRoundCount();
      gameCtx.resetPosition();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [listener]);

  return (
    <div className="keyboard-container">
      {keyBoardLetters.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.map((col, colIndex) => (
            <Key key={`${rowIndex}-${colIndex}`} letter={col} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
