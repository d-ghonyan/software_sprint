import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className = "wrapper">
        <div className="flex items-center justify-between border-2 p-3 my-2 rounded-md">
          <h2
            onClick={() => setShowAnswer(!showAnswer)}
            className="text-lg font-semibold tracking-wider cursor-pointer"
          >
            {question}
          </h2>
          {showAnswer ? (
            <button>
              <FaMinus />
            </button>
          ) : (
            <button onClick={() => setShowAnswer(!showAnswer)}>
              <BsPlus className="text-xl" />
            </button>
          )}
        </div>
        <div className="px-5">{showAnswer && <p>{answer}</p>}</div>
      </div>
    </>
  );
}
