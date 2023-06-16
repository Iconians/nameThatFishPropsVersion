import { Fish } from "../../types";
import "./styles/game-board.css";

interface GameBoardProps {
  userOnChange: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  fishes: Fish[];
  userInput: string;
}

export function FunctionalGameBoard({
  userOnChange,
  onSubmit,
  fishes,
  userInput,
}: GameBoardProps) {
  const nextFishToName = fishes[0];

  const setUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    userOnChange(e.target.value);
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userInput}
          onChange={setUserInput}
        />
        <input type="submit" onClick={onSubmit} />
      </form>
    </div>
  );
}
