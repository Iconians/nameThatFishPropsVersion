import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  render() {
    const currentCorrectFish =
      initialFishes[this.state.correctCount + this.state.incorrectCount]?.name;
    const fishIndex = this.state.correctCount + this.state.incorrectCount;

    const formUserInput = (guess: string) => {
      if (currentCorrectFish === guess.toLowerCase()) {
        this.setState({ correctCount: this.state.correctCount + 1 });
      } else {
        this.setState({ incorrectCount: this.state.incorrectCount + 1 });
      }
    };

    return (
      <>
        {fishIndex !== 4 ? (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              fishes={initialFishes}
            />
            <ClassGameBoard
              onSubmit={formUserInput}
              fishes={initialFishes}
              currentImageIndex={fishIndex}
            />
          </>
        ) : (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={initialFishes}
          />
        )}
      </>
    );
  }
}
