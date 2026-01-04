"use client";

type Props = {
  letter: string;
};

function Key({ letter }: Props) {
  const handleClick = () => {
    // alert(letter);
  };

  return (
    <button
      onClick={handleClick}
      className={
        letter === "ENTER"
          ? "key-container text-sm px-4"
          : letter === "⌫"
            ? "key-container text-lg px-5"
            : "key-container"
      }
    >
      <p className="select-none">{letter}</p>
    </button>
  );
}

export default Key;
