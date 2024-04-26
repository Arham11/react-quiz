import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  let min = Math.floor(secondsRemaining / 60);
  let seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min > 9 ? min : `0${min}`} : {seconds > 9 ? seconds : `0${seconds}`}
    </div>
  );
}
export default Timer;
