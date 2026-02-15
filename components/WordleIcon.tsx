import Image from "next/image";

type IconProps = {
  size: number;
  twFontSize: string;
};

function WordleIcon(props: IconProps) {
  return (
    <>
      <Image
        suppressHydrationWarning
        src="/wordle.svg"
        alt="Wordle Logo"
        width={props.size}
        height={props.size}
      />
      <h1
        className={`text-neutral-950 ${props.twFontSize} font-bold pt-3 tracking-tighter`}
        suppressHydrationWarning
      >
        Wordle
      </h1>
    </>
  );
}

export default WordleIcon;
