import { useContext } from "react";
import PlayingContext from "./PlayContext";

export default function Answer() {
  const gameCtx = useContext(PlayingContext);

  const answer = gameCtx!.answer;
  return (
    <div className="bg-black text-white text-sm font-bold p-2.5 uppercase rounded-md mt-10">
      {answer}
    </div>
  );
}
