// import React, { Component } from "react";
const React = require("react");
const { Component, createRef } = React;

const rspCoords = {
    rock: '0',
    scissor:'-142px',
    paper:'-284px',
}
const scores = {
    scissor: 1,
    rock:0,
    paper:-1,
}
const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v){
        return v[1] === imgCoord
    })[0]
}
class RSPGame extends Component {
    state={
        result: '', 
        score: 0,
        imgCoord: rspCoords.rock
    }
    interval;
    componentDidMount(){
        this.interval = setInterval(this.changeHand,1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    changeHand = () => {
        const {imgCoord} = this.state
        if(imgCoord === rspCoords.rock){
            this.setState({
                imgCoord: rspCoords.scissor
            })
            
        }else if(imgCoord === rspCoords.scissor){
            this.setState({
                imgCoord: rspCoords.paper
            })
        }else if(imgCoord === rspCoords.paper){
            this.setState({
                imgCoord: rspCoords.rock
            })
        }
    }
    onClickBtn = (choice) => () => {
        const {imgCoord} = this.state
        clearInterval(this.interval)
        const myScore = scores[choice]
        const cpuScore = scores[computerChoice(imgCoord)]
        const diff = myScore - cpuScore;
        if(diff === 0){
            this.setState({
                result: '비김'
            })
        }else if([-1,2].includes(diff)){
            this.setState((prevState)=>{
                return {
                    result: '이김',
                    score: prevState.score + 1
                }
            })
        }else{
            this.setState((prevState)=>{
                return {
                    result: '짐',
                    score: prevState.score - 1
                }
            })
        }
        setTimeout(()=>{
            this.interval = setInterval(this.changeHand,1000)
        },2000)
        
    }
  render() {
    const {result, score, imgCoord} = this.state
    return (
      <>
        <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} ></div>
        <div>
            <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>
            <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>가위</button>
            <button id="papae" className="btn" onClick={this.onClickBtn('paper')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재: {score}점</div>
      </>
    );
  }
}

module.exports = RSPGame;
``