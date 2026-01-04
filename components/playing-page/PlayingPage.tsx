import KeyBoard from "@/components/playing-page/Keyboard";
import AttemptsBoard from "@/components/playing-page/AttemptsBoard";

type Props = {};

function PlayingPage({}: Props) {
  return (
    <main className="playing-page">
      <AttemptsBoard />
      <KeyBoard />
    </main>
  );
}

export default PlayingPage;
