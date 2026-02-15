"use server";

import fs from "node:fs/promises";

const listPath = "store/possibleAnswers.txt";

export default async function fetchNewWord(): Promise<string> {
  const wordList = await fs.readFile(listPath, "utf-8");
  const arrayWords = wordList.split("\n");
  const randomIndex = Math.floor(Math.random() * arrayWords.length - 1);
  return arrayWords[randomIndex];
}
