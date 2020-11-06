import React from "react";


const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <div className="mood">{ score <=4 ? '(⋟﹏⋞)' : 'ヽ(•‿•)ノ'}</div>

    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
