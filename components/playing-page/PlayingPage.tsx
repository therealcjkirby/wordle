import Keyboard from "@/components/playing-page/Keyboard";
import AttemptsBoard from "@/components/playing-page/AttemptsBoard";
import Answer from "@/components/Answer";
import PlayingContext from "@/components/PlayContext";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/Button";
import Modal from "../modals/Modal";

type Props = {};

function PlayingPage({}: Props) {
  const gameCtx = useContext(PlayingContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="playing-page">
      {gameCtx!.results === "lost" && <Answer />}
      <AttemptsBoard />
      {gameCtx!.isGameOver == false && <Keyboard />}
      {gameCtx!.isGameOver && (
        <Button color="WHITE" clickHandler={() => setShowModal(true)}>
          See Results
        </Button>
      )}
      {showModal &&
        createPortal(
          <Modal closeModal={() => setShowModal(false)} />,
          document.body,
        )}
    </main>
  );
}

export default PlayingPage;
