import { Component } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

interface GameBoardProps {
  setUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  fishes: Fish[];
  userInput: string;
}

export class ClassGameBoard extends Component<GameBoardProps> {
  render() {
    const { setUserInput, onSubmit, fishes, userInput } = this.props;
    const nextFishToName = fishes[0];
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
}
