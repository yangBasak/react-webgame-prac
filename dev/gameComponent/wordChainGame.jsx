const React = require("react");
const { useState, useRef } = React;

const WordChainGame = function () {
  const [word, setWord] = useState("영양분");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  onSubmitFrom = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue("");
      setResult("ㅇㅋ");
      // this.input.focus();
    } else {
      setValue("");
      setResult("ㄴㄴ");
    }
  };
  onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2>끝말잇기 게임</h2>
      <div>{word}</div>
      <form onSubmit={onSubmitFrom}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordChainGame;
