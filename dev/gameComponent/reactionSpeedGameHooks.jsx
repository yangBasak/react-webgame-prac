// import React, { Component } from "react";
const React = require("react");
const { useState, useRef } = React;

function NumBaseballGame() {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭 시작");
  const [result, setResult] = useState([]);
  const timeOut = useRef(null);
  const startTime = useRef(null);
  const endTime = useRef(null);

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색되면 클릭");
      timeOut.current = setTimeout(() => {
        setState("now");
        setMessage("클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(timeOut.current);
      setState("waiting");
      setMessage("아직 변하지 않았어요. 다시 시작하세요");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭 시작");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };
  const onReset = () => {
    setResult([]);
  };
  return (
    <>
      <h2>반응속도 게임</h2>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {result.length === 0 ? null : (
        <>
          <div>
            평균 시간: {result.reduce((a, c) => a + c) / result.length}ms
          </div>
          <button onClick={onReset}>리셋</button>
        </>
      )}
    </>
  );
}

module.exports = NumBaseballGame;
