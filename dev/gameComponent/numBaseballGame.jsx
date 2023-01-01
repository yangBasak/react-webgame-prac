// import React, { Component } from "react";
const React = require("react");
const { Component, createRef } = React;
const Try = require("../component/try");

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(chosen);
  }
  return arr;
}

class NumBaseballGame extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      this.setState((prevState)=>{
        return {
          result: "홈런",
          tries: [...prevState.tries, { try: this.state.value, result: "홈런" }],
        }
      });
      alert("restart");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
      this.inputRef.current.focus()
    } else {
      const answerArr = this.state.value.split("").map((item) => {
        return parseInt(item);
      });

      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10번 내 실패, 답은 ${this.state.answer.join("")}입니다.`,
        });
        alert("restart");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArr[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArr[i])) {
            ball += 1;
          }
        }
        this.setState((prevState)=>{
          return {
            tries: [...prevState.tries, { try: this.state.value, result: `스트라이크:${strike}, 볼:${ball}` }],
            value: ''
          }
        });
        this.inputRef.current.focus()
      }
    }
  };
  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  inputRef = createRef()

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form action="#" onSubmit={this.onSubmitForm}>
          <input ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput}></input>
          <div>시도: {this.state.tries.length}</div>
          <ul>
            {this.state.tries.map((item, i) => {
              return <Try key={`${i + 1}번 시도`} tryInfo={item} />;
            })}
          </ul>
          <button >
            asdf
          </button>
        </form>
      </>
    );
  }
}

module.exports = NumBaseballGame;
