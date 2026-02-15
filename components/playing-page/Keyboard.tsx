import Key from "@/components/playing-page/Key";
import PlayingContext from "../PlayContext";
import { useEffect, useContext } from "react";
import { gameWon } from "@/lib/utils";

function Keyboard() {
  const gameCtx = useContext(PlayingContext);
  const keyboardLaneOne = gameCtx!.currentKeys
    .slice(0, 10)
    .map((key) => <Key key={key.letter} letter={key.letter} />);
  const keyboardLaneTwo = gameCtx!.currentKeys
    .slice(10, 19)
    .map((key) => <Key key={key.letter} letter={key.letter} />);
  const keyboardLaneThree = gameCtx!.currentKeys
    .slice(19, 28)
    .map((key) => <Key key={key.letter} letter={key.letter} />);

  const listener = (event: globalThis.KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (!gameCtx!.isGameOver) {
      if (key === "BACKSPACE") {
        gameCtx!.removeGuessedLetter();
      }
      if (key !== "Backspace" && key !== "Enter" && /^[A-Z]$/i.test(key)) {
        gameCtx!.setGuessedLetter(key);
      }
      if (gameCtx!.canSubmit(key)) {
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

  useEffect(() => {
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [listener]);

  return (
    <div className="keyboard-container">
      <div className="flex justify-center" tabIndex={-1}>
        {keyboardLaneOne}
      </div>
      <div className="flex justify-center" tabIndex={-1}>
        {keyboardLaneTwo}
      </div>
      <div className="flex justify-center" tabIndex={-1}>
        {keyboardLaneThree}
      </div>
    </div>
  );
}
export default Keyboard;
