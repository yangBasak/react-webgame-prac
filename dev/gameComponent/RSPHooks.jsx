const React = require("react");
const { useState } = React;
const useIntervalModule = require("../component/useInterval");
const useInterval = useIntervalModule.default;

const rspCoords = {
  rock: "0",
  scissor: "-142px",
  paper: "-284px",
};
const scores = {
  scissor: 1,
  rock: 0,
  paper: -1,
};
const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};
function RSPGame() {
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [imgCoord, setImgCoord] = useState(rspCoords.rock);
  const [isRunning, setIsRunning] = useState(true);

  const changeHand = () => {
    if (imgCoord === rspCoords.rock) {
      setImgCoord(rspCoords.scissor);
    } else if (imgCoord === rspCoords.scissor) {
      setImgCoord(rspCoords.paper);
    } else if (imgCoord === rspCoords.paper) {
      setImgCoord(rspCoords.rock);
    }
  };
  useInterval(changeHand, isRunning ? 1000 : null);
  const onClickBtn = (choice) => () => {
    if (isRunning) {
      setIsRunning(false);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult("비김");
      } else if ([-1, 2].includes(diff)) {
        setResult("이김");
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult("짐");
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        setIsRunning(true);
      }, 2000);
    }
  };

  return (
    <>
      <h2>가위바위보 게임</h2>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      ></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("rock")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={onClickBtn("scissor")}>
          가위
        </button>
        <button id="papae" className="btn" onClick={onClickBtn("paper")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재: {score}점</div>
    </>
  );
}

module.exports = RSPGame;
