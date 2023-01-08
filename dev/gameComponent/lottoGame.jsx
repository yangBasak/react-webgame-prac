const React = require("react");
const { Component } = React;
const Ball = require('../component/ball')

function getWinNumber() {
    const candidate = Array(45).fill().map((v,i)=> i + 1)
    const shuffle = []
    while (candidate.length > 0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0])
    }
    const bonusNumber = shuffle[shuffle.length - 1]
    const winNumber = shuffle.slice(0,6).sort((p,c)=> p-c) 
    return [...winNumber, bonusNumber]
}

class RSPGame extends Component {
    state={
        winNumber: getWinNumber(),
        winBalls: [],
        bonus: null,
        redo: false
    }
    
  render() {
    const {winBalls, bonus, redo} = this.state
    return (
      <>
        <div>당첨 숫자</div>
        <div id="result">
            {winBalls.map((v)=><Ball key={v} number={v} />)}
        </div>
        <div>보너스</div>
        {bonus && <Ball number={bonus} />}
        <button onClick={redo ? this.onClickRedo : ()=>{}}>한 번 더</button>
      </>
    );
  }
}

module.exports = RSPGame;
``