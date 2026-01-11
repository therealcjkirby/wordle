type Props = {
  letter: string | null;
  classes: string;
};

function Letter({ letter, classes }: Props) {
  return (
    <div className={classes}>
      <p className="flex justify-center items-center size-14 text-xl">
        {letter}
      </p>
    </div>
  );
}

export default Letter;
