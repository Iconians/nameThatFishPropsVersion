import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";
import { Fish } from "../../types";

const initialFishes: Fish[] = [
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
  const [userInput, setUserInput] = useState("");
  const [fishes, setFishes] = useState<Fish[]>(initialFishes);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [correctFish, SetCorrectFish] = useState<string | null>(
    initialFishes[0].name
  );

  const formUserInput = () => {
    if (correctFish === userInput) {
      const filter = fishes.filter((fish) => fish.name !== userInput);
      setFishes(filter);
      setCorrectCount(correctCount + 1);
      SetCorrectFish(filter.length ? filter[0].name : null);
      setUserInput("");
    } else {
      const filter = fishes.filter((fish) => fish.name !== correctFish);
      setFishes(filter);
      setIncorrectCount(incorrectCount + 1);
      SetCorrectFish(filter.length ? filter[0].name : null);
      setUserInput("");
    }
  };

  return (
    <>
      {fishes.length ? (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            fishes={fishes}
          />
          <FunctionalGameBoard
            userOnChange={setUserInput}
            onSubmit={formUserInput}
            fishes={fishes}
            userInput={userInput}
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
