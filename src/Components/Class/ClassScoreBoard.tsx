import { Component } from "react";
import "./styles/score-board.css";
import { Fish } from "../../types";

interface ScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
  fishes: Fish[];
}

export class ClassScoreBoard extends Component<ScoreBoardProps> {
  render() {
    const { correctCount, incorrectCount, fishes } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {fishes.map((fish) => (
            <div key={fish.name} className="choice">
              {fish.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
