import { Fish } from "../../types";
import "./styles/final-score.css";

interface FinalScoreProps {
  correctCount: number;
  totalCount: Fish[];
}

export const FunctionalFinalScore = ({
  correctCount,
  totalCount,
}: FinalScoreProps) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount.length}</p>
    </div>
  </div>
);
