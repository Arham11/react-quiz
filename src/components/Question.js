import { useQuiz } from "../contexts/QuizContext";
import Option from "./Option";

function Question() {
  const { questions, index } = useQuiz();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Option />
    </div>
  );
}

export default Question;
