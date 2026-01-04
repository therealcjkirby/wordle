import Letter from "@/components/playing-page/Letter";

const attemptsBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function AttemptsBoard() {
  return (
    <div className="board-container">
      {attemptsBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="attempt-container">
          {row.map((col, colIndex) => (
            <Letter key={`${rowIndex}-${colIndex}`} letter={null} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AttemptsBoard;
