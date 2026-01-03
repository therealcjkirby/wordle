"use client";

import WordleIcon from "@/components/WordleIcon";
import WordleInitialStartInfo from "@/components/WordleInitialStartInfo";

import { useState } from "react";

async function page() {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <>
      {!isPlaying && (
        <>
          <WordleIcon />
          <WordleInitialStartInfo />{" "}
        </>
      )}
    </>
  );
}
export default page;
