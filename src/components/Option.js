import { useQuiz } from "../contexts/QuizContext";

function Option() {
  const { dispatch, answer, questions, index } = useQuiz();
  const hasAnswered = answer !== null;
  const question = questions[index];

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${
            hasAnswered &&
            (index === question.correctOption ? "correct" : "wrong")
          } ${index === answer ? "answer" : ""} `}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
          {hasAnswered}
        </button>
      ))}
    </div>
  );
}

export default Option;
