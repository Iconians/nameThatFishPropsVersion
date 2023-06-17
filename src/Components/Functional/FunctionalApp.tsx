import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

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

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const currentCorrectFish = initialFishes[correctCount + incorrectCount]?.name;
  const fishIndex = correctCount + incorrectCount;

  const formUserInput = (guess: string) => {
    if (currentCorrectFish === guess.toLowerCase()) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };

  return (
    <>
      {fishIndex !== 4 ? (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            fishes={initialFishes}
          />
          <FunctionalGameBoard
            onSubmit={formUserInput}
            fishes={initialFishes}
            currentImageIndex={fishIndex}
          />
        </>
      ) : (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes}
        />
      )}
    </>
  );
}
