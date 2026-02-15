"use client";
import Button from "@/components/Button";
import WordleIcon from "@/components/WordleIcon";
import PlayingContext from "../PlayContext";
import { useContext } from "react";

export default function ReturnFinished() {
  const gameCtx = useContext(PlayingContext);

  return (
    <div
      className="flex flex-row-reverse place-content-center"
      suppressHydrationWarning
    >
      <div className="flex flex-col items-center w-80 pb-100 pt-10">
        <WordleIcon size={40} twFontSize="text-2xl" />
        <h1
          className="text-neutral-950 pt-100 text-5xl text-center font-bold tracking-tighter"
          suppressHydrationWarning
        >
          Hi Wordler
        </h1>
        <h2 className="text-neutral-950 pt-3 text-3xl text-center tracking-tighter mt-4 mb-8">
          {gameCtx!.results == "lost"
            ? "Tomorrow's a new day, with a new puzzle. See you then."
            : "Great job on today's puzzle! Check out your progress."}
        </h2>
        <Button color="BLACK" clickHandler={gameCtx!.setPlayingState}>
          Admire Puzzle
        </Button>
      </div>
    </div>
  );
}
