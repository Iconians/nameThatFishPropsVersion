import { Fish } from "../../types";
import "./styles/score-board.css";
//  Where the score is presented

interface ScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
  fishes: Fish[];
}

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount,
  fishes,
}: ScoreBoardProps) {
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
