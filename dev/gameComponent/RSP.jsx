// import React, { Component } from "react";
const React = require("react");
const { Component, createRef } = React;

const rspCoords = {
    scissor: '0',
    rock:'142px',
    paper:'284px',
}
const scores = {
    scissor: 1,
    rock:0,
    paper:-1,
}
class RSPGame extends Component {
    state={
        result: [], 
        score: 0,
        imgCoord: 0
    }
    interval;
    componentDidMount(){
        this.interval = setInterval(()=>{
            const {imgCoord} = this.state
            if(imgCoord === rspCoords.rock){
                this.setState({
                    imgCoord: repCoord.scissor
                })
            }else if(imgCoord === rspCoords.scissor){
                this.setState({
                    imgCoord: repCoord.paper
                })
            }else if(imgCoord === rspCoords.paper){
                this.setState({
                    imgCoord: repCoord.rock
                })
            }
        },1000)
    }
    onClickBtn = () => {}
  render() {
    const {result, score, imgCoord} = this.state
    return (
      <>
        <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} ></div>
        <div>
            <button id="rock" className="btn" onClick={()=>this.onClickBtn('바위')}>바위</button>
            <button id="scissor" className="btn" onClick={()=>this.onClickBtn('가위')}>가위</button>
            <button id="papae" className="btn" onClick={()=>this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재: {score}점</div>
      </>
    );
  }
}

module.exports = RSPGame;
``