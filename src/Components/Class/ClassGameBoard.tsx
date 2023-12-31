import { Component } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

interface GameBoardProps {
  onSubmit: (guess: string) => void;
  fishes: Fish[];
  currentImageIndex: number;
}

export class ClassGameBoard extends Component<GameBoardProps> {
  state = {
    userInput: "",
    // currentImageIndex: 0,
  };

  collectUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    const { onSubmit, fishes, currentImageIndex } = this.props;
    const nextFishToName =
      fishes[currentImageIndex !== 4 ? currentImageIndex : 0];

    const onClick = () => {
      onSubmit(this.state.userInput);
      this.setState({ userInput: "" });
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
            value={this.state.userInput}
            onChange={this.collectUserInput}
          />
          <input type="submit" onClick={onClick} />
        </form>
      </div>
    );
  }
}
