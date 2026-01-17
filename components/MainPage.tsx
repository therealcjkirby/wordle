"use client";

import { useContext } from "react";

import PlayingContext from "@/components/PlayContext";
import StartingPage from "@/components/StartingPage";
import ContinuePage from "@/components/ContinuePage";
import PlayingPage from "@/components/playing-page/PlayingPage";

import { auth0 } from "@/lib/auth0";
type AuthReturnType = Awaited<ReturnType<typeof auth0.getSession>>;

function MainPage({ session }: { session: AuthReturnType }) {
  const gameCtx = useContext(PlayingContext);

  return (
    <>
      {!gameCtx!.isPlaying && gameCtx!.roundNumber === 0 && (
        <StartingPage session={session} />
      )}
      {!gameCtx!.isPlaying &&
        gameCtx!.roundNumber > 0 &&
        !gameCtx!.isGameOver && <ContinuePage />}

      {gameCtx!.isPlaying && <PlayingPage />}
    </>
  );
}

export default MainPage;
