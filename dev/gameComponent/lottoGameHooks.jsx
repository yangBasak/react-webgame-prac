const React = require("react");
const { useState, useEffect, useRef, useMemo, useCallback } = React;
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

const LottoGame = () => {
  const lottoNumbers = useMemo(()=>getWinNumber(),[])
  const [winNumber, setWinNumber] = useState(lottoNumbers)
  const [winBalls, setWinBalls] = useState([])
  const [bonus, setBonus] = useState(null)
  const [redo, setRedo] = useState(false)
  const timeouts = useRef([]);
     
  useEffect(()=>{
    runTimeouts()
    return () => {
      timeouts.current.forEach((v)=>{
        clearTimeout(v)
      })
    }
  },[timeouts.current])  
  // 아래 timeouts.current[i] = ...는 요소를 삽입한거라 배열이 바뀐것이 아니므로 인식x


  const runTimeouts = () => {
    for(let i = 0; i < winNumber.length - 1; i++){
      timeouts.current[i] = setTimeout(()=>{
        setWinBalls((prevWinBalls)=> [...prevWinBalls, winNumber[i]] )
      },(i+1)*100)
    }
    timeouts.current[6] = setTimeout(()=>{
      setBonus(winNumber[6])
      setRedo(true)
    }, 700)
  }

  const onClickRedo = useCallback(() => {
    setWinNumber(getWinNumber())
    setWinBalls([])
    setBonus(null)
    setRedo(false)
    timeouts.current = []
  },[winNumber]) // winNumber가 값이 바뀌면 실행되게끔
    return (
      <>
        <div>당첨 숫자</div>
        <div id="result">
            {winBalls.map((v)=><Ball key={v} number={v} />)}
        </div>
        <div>보너스</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={onClickRedo}>한 번 더</button>}
      </>
    );
  
}

module.exports = LottoGame;
