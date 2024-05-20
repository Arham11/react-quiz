import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        <span>emoji</span>
        <span>
          You scored <strong>{points} </strong>out of {maxPossiblePoints} points
          ({Math.ceil(percentage)}%)
        </span>
      </p>
      <p className="highscore">(Highscore: 0 points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
