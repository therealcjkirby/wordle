export const gameWon = (
  attempts: String[][],
  rowIndex: number,
  answer: string,
): boolean => {
  if (attempts[rowIndex].join("") == answer) {
    return true;
  }
  return false;
};
