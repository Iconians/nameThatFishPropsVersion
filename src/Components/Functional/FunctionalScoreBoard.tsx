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
}: ScoreBoardProps) {
  const answersLeft = ["trout", "salmon", "tuna", "shark"];
  const fishLeft = answersLeft.slice(
    incorrectCount + correctCount,
    answersLeft.length
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
