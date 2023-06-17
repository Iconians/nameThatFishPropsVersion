import { Component } from "react";
import "./styles/score-board.css";
import { Fish } from "../../types";

interface ScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
  fishes: Fish[];
}

export class ClassScoreBoard extends Component<ScoreBoardProps> {
  answersLeft = ["trout", "salmon", "tuna", "shark"];

  render() {
    const { correctCount, incorrectCount } = this.props;
    const fishLeft = this.answersLeft.slice(
      incorrectCount + correctCount,
      this.answersLeft.length
    );
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {fishLeft.map((fish) => (
            <div key={fish} className="choice">
              {fish}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
