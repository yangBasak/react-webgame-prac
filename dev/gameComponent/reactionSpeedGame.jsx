// import React, { Component } from "react";
const React = require("react");
const { Component, createRef } = React;

class NumBaseballGame extends Component {
    state={
        state: 'waiting',
        message: '클릭 시작',
        result: []
    }
    timeout;
    startTime;
    endTime;
    onClickScreen = () => {
        const {state, message, result} = this.state;
        if(state === 'waiting'){
            this.setState({
                state: 'ready',
                message: '초록색되면 클릭'
            })
            this.timeout = setTimeout(()=>{
                this.setState({
                    state: 'now',
                    message: '클릭'
                })
                this.startTime = new Date()
            },Math.floor(Math.random() * 1000) + 2000)
        }else if(state === 'ready'){
            clearTimeout(this.timeout)
            this.setState({
                state: 'waiting',
                message: '아직 변하지 않았어요. 다시 시작하세요'
            })

        }else if(state === 'now'){
            this.endTime = new Date()
            this.setState((prevState)=>{
                return {
                    state: 'waiting',
                    message: '클릭 시작',
                    result: [...prevState.result, this.endTime - this.startTime]
                }
            })
        }
    }
    onReset = () => {
        this.setState({
            result: []
        })
    }
  render() {
    return (
      <>
      <div id="screen" className={this.state.state} onClick={this.onClickScreen}>
        {this.state.message}
      </div>
      {
        this.state.result.length === 0 
        ? null
        : <>
            <div>평균 시간: {this.state.result.reduce((a,c)=> a + c) / this.state.result.length}ms</div>
            <button onClick={this.onReset}>리셋</button>
        </>  
      }
      
      </>
    );
  }
}

module.exports = NumBaseballGame;
