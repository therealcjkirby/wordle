function page() {
  return (
    <>
      <div className="size-19 grid grid-cols-3 gap-1 p-1 bg-neutral-900 rounded-md place-items-center">
        <div className="size-5 bg-neutral-100 rounded-xs"></div>
        <div className="size-5 bg-neutral-100 rounded-xs"></div>
        <div className="size-5 bg-neutral-100 rounded-xs"></div>
        <div className="size-5 bg-neutral-100 rounded-xs"></div>
        <div className="size-5 bg-yellow-200 rounded-xs"></div>
        <div className="size-5 bg-green-500 rounded-xs"></div>
        <div className="size-5 bg-green-500 rounded-xs"></div>
        <div className="size-5 bg-green-500 rounded-xs"></div>
        <div className="size-5 bg-green-500 rounded-xs"></div>
      </div>
      <h1 className="text-neutral-950 text-5xl font-bold pt-2 tracking-tigher">
        Wordle
      </h1>
      <h2 className="text-neutral-950 pt-4 text-3xl w-90 text-center">
        Get 6 chances to guess a 5-letter word.
      </h2>
      <div className="py-5">
        <button className="outline-neutral-950 outline-1 bg-neutral-100 w-35 h-10 m-2 text-neutral-950 font-bold rounded-3xl">
          Login
        </button>
        <button className="outline-neutral-950 outline-1 bg-neutral-950 w-35 h-10 m-2 text-neutral-100 font-bold rounded-3xl">
          Play
        </button>
      </div>
    </>
  );
}
export default page;
