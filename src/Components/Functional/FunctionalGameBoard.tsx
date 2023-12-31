import { useState } from "react";
import { Fish } from "../../types";
import "./styles/game-board.css";

interface GameBoardProps {
  onSubmit: (guess: string) => void;
  fishes: Fish[];
  currentImageIndex: number;
}

export function FunctionalGameBoard({
  onSubmit,
  fishes,
  currentImageIndex,
}: GameBoardProps) {
  const [userInput, setUserInput] = useState("");
  const nextFishToName =
    fishes[currentImageIndex !== 4 ? currentImageIndex : 0];

  const collectUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const onClick = () => {
    onSubmit(userInput);
    setUserInput("");
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
          onChange={collectUserInput}
        />
        <input type="submit" onClick={onClick} />
      </form>
    </div>
  );
}
