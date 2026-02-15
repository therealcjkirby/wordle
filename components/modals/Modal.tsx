"use client";

import PlayingContext from "../PlayContext";
import Image from "next/image";

import { useContext, useState } from "react";

type ModalProps = {
  closeModal: () => void;
};

function Modal({ closeModal }: ModalProps) {
  const gameCtx = useContext(PlayingContext);

  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-999 bg-white">
      <div className="flex flex-row-reverse place-content-center">
        <Image
          src="/x.svg"
          alt="x"
          width={20}
          height={20}
          onClick={closeModal}
          className="hover:cursor-pointer py-5 pb-60"
        />
        <div className="flex flex-col items-center w-80 py-100">
          <Image
            src={
              gameCtx!.results === "lost"
                ? "/wordle-lose.svg"
                : "/wordle_congrats.svg"
            }
            alt="Wordle Result"
            width={55}
            height={55}
          />
          <h1 className="text-neutral-950 pt-4 text-3xl text-center font-bold tracking-tighter">
            {gameCtx!.results === "lost"
              ? "Thanks for playing today!"
              : "Congratulations!"}
          </h1>
          <h2 className="text-neutral-950 pt-3 text-lg text-center tracking-tighter">
            Come back tomorrow for a new word!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Modal;
