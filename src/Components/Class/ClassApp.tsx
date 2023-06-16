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
    fishes: initialFishes,
    userInput: "",
    incorrectCount: 0,
    correctCount: 0,
    correctFish: initialFishes[0].name,
  };

  formUserInput = () => {
    if (this.state.correctFish === this.state.userInput) {
      const filter = this.state.fishes.filter(
        (fish) => fish.name !== this.state.userInput
      );
      this.setState({ fishes: filter });
      this.setState({ correctCount: this.state.correctCount + 1 });
      this.setState({ userInput: "" });
      this.setState({
        correctFish: filter.length ? filter[0].name : null,
      });
    } else {
      const filter = this.state.fishes.filter(
        (fish) => fish.name !== this.state.correctFish
      );
      this.setState({ fishes: filter });
      this.setState({ incorrectCount: this.state.incorrectCount + 1 });
      this.setState({ userInput: "" });
      this.setState({
        correctFish: filter.length ? filter[0].name : null,
      });
    }
  };

  setUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <>
        {this.state.fishes.length ? (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              fishes={this.state.fishes}
            />
            <ClassGameBoard
              setUserInput={this.setUserInput}
              onSubmit={this.formUserInput}
              fishes={this.state.fishes}
              userInput={this.state.userInput}
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
