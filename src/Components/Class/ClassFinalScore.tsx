import { Component } from "react";
import { Fish } from "../../types";

interface FinalScoreProps {
  correctCount: number;
  totalCount: Fish[];
}

export class ClassFinalScore extends Component<FinalScoreProps> {
  render() {
    const { correctCount, totalCount } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount.length}</p>
        </div>
      </div>
    );
  }
}
