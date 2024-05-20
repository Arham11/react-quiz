import { useEffect } from "react";
import { useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Loader from "./Loader";

import StartScreen from "./StartScreen";
import Question from "./Question";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";

function App() {
  const { status, questions, index } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question question={questions[index]} index={index} />
            <Footer>
              <Timer />
              <NextQuestion />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
        {/* <p>1/15</p>
        <p>Question?</p> */}
      </Main>
    </div>
  );
}

export default App;
