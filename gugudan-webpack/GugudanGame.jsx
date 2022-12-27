import React, { useState, useRef } from "react";

function GugudanComp() {
  const [firstNum, setFirstNum] = useState(Math.ceil(Math.random() * 9));
  const [secondNum, setSecondNum] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inpurRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === firstNum * secondNum) {
      setResult("정답");
      setFirstNum(Math.ceil(Math.random() * 9));
      setSecondNum(Math.ceil(Math.random() * 9));
      setValue("");
      inpurRef.current.focus();
    } else {
      setResult("놉");
      setValue("");
      inpurRef.current.focus();
    }
  };
  return (
    <>
      <div>
        {firstNum} x {secondNum} ?
      </div>
      <form onSubmit={onSubmit}>
        <input
          ref={inpurRef}
          type="number"
          value={value}
          onChange={onChangeInput}
        />
        <button type="submit">확인</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default function Res() {
  const [start, setStart] = useState(false);
  if (start) {
    return (
      <div>
        <h1>구구단</h1>
        <GugudanComp />
      </div>
    );
  } else {
    return <button onClick={() => setStart(true)}>시작</button>;
  }
}
