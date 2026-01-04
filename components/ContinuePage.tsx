"use client";

import { useContext } from "react";

import WordleIcon from "@/components/WordleIcon";
import PlayingContext from "@/components/PlayContext";

function ContinuePage() {
  const gameCtx = useContext(PlayingContext);

  return (
    <div className="place-items-center w-screen h-screen bg-neutral-100 pt-[40vh]">
      <WordleIcon size={100} twFontSize="text-7xl" />
      <h1 className="text-neutral-950 text-5xl font-bold pt-2 tracking-tigher">
        Welcome Back!
      </h1>
      <h2 className="text-neutral-950 pt-4 text-3xl w-90 text-center">
        You've made {gameCtx.numberOfAttempts} of 6 guesses. Keep it up!
      </h2>
      <div className="py-5">
        <button
          className="outline-neutral-950 outline-1 bg-neutral-950 w-35 h-10 m-2 text-neutral-100 font-bold rounded-3xl"
          onClick={() => gameCtx.setPlayingState}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ContinuePage;
