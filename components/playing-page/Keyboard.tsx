import Key from "@/components/playing-page/Key";

const keyBoardLetters = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

function Keyboard() {
  return (
    <div className="keyboard-container">
      {keyBoardLetters.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.map((col, colIndex) => (
            <Key key={`${rowIndex}-${colIndex}`} letter={col} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
