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

class LottoGame extends Component {
    state={
        winNumber: getWinNumber(),
        winBalls: [],
        bonus: null,
        redo: false
    }
    timeouts = [];
    runTimeouts = () => {
      const {winNumber} = this.state
      for(let i = 0; i < winNumber.length - 1; i++){
        this.timeouts = setTimeout(()=>{
          this.setState((prevState)=>{
            return {
              winBalls: [...prevState.winBalls, winNumber[i]]
            }
          })
        },(i+1)*100)
      }
      this.timeouts = setTimeout(()=>{
        this.setState({
          bonus: winNumber[6],
          redo: true
        })
      }, 700)
    }
    componentDidMount() {
      this.runTimeouts()
    }
    componentDidUpdate(prevProps, prevState){
      if(this.state.winBalls.length === 0){
        this.runTimeouts()
      }
    }
    componentWillUnmount() {
      this.timeouts.forEach((v)=>{
        clearTimeout(v)
      })
    }
    onClickRedo = () => {
      this.setState({
        winNumber: getWinNumber(),
        winBalls: [],
        bonus: null,
        redo: false 
      })
      this.timeouts = []
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
        {redo && <button onClick={this.onClickRedo}>한 번 더</button>}
      </>
    );
  }
}

module.exports = LottoGame;
``