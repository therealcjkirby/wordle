import LoginButton from "@/components/LoginButton";
import { auth0 } from "@/lib/auth0";

type Props = {};

async function WorldInitialStartInfo({}: Props) {
  const session = await auth0.getSession();
  return (
    <>
      <h1 className="text-neutral-950 text-5xl font-bold pt-2 tracking-tigher">
        Wordle
      </h1>
      <h2 className="text-neutral-950 pt-4 text-3xl w-90 text-center">
        Get 6 chances to guess a 5-letter word.
      </h2>
      <div className="py-5">
        {!session && <LoginButton />}
        <button className="outline-neutral-950 outline-1 bg-neutral-950 w-35 h-10 m-2 text-neutral-100 font-bold rounded-3xl">
          Play
        </button>
      </div>
    </>
  );
}

export default WorldInitialStartInfo;
