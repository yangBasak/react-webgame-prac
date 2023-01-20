const React = require("react");
const { useState } = React;
const Try = require("../component/tryHooks");

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(chosen);
  }
  return arr;
}

function NumBaseballGame() {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(() => {
    getNumbers();
  }); //lazy init: 초깃값 설정때만 실행됨. 재렌더시 실행 x
  const [tries, setTries] = useState([]);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런");
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: "홈런" }];
      }); //이전 값 가져올때는 이런식으로
      alert("restart");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArr = value.split("").map((item) => {
        return parseInt(item);
      });

      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 내 실패, 답은 ${answer.join("")}입니다.`);
        alert("restart");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArr[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArr[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [
            ...prevTries,
            { try: value, result: `스트라이크:${strike}, 볼:${ball}` },
          ];
        });
        setValue("");
      }
    }
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2>야구 게임</h2>
      <h1>{result}</h1>
      <form action="#" onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput}></input>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((item, i) => {
            return <Try key={`${i + 1}번 시도`} tryInfo={item} />;
          })}
        </ul>
        <button>asdf</button>
      </form>
    </>
  );
}

module.exports = NumBaseballGame;
