// const React = require("react");
// const { useReducer } = React;
// const Table = require("../component/table");
import React, { useEffect, useReducer, useCallback } from 'react';
import Table from '../component/table';


const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1,-1]
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const SET_TURN = 'SET_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn; // 기존 tableData을 지키기위해 이렇게 하나하나 얕복을 해줘서 처리. immer라는 라이브러리로 더 가독성 좋게 할 수 있대
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell ]
      };
    }
    case SET_TURN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    }
    case RESET_GAME: {
      console.log(3)
      return {
        ...state,
        winner: '없음',
        turn: "O",
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1,-1]
      }
    }
    default:
      return state
  }
};
const TictaktocGame = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;
  useEffect(()=>{
    const [row, cell] = recentCell
    if(row < 0){
      return
    }
    let win = false;
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
      win = true;
    }
    if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
      win = true;
    }
    if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
      win = true;
    }
    if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
      win = true;
    }

    if(win){
      dispatch({type: SET_WINNER, winner: turn})
      dispatch({ type: RESET_GAME });
    }else{
      let all = true //true 시 무승부
      tableData.forEach((row)=>{
        row.forEach((cell)=>{
          if(!cell){
            all = false
          }
        })
      })
      if(all){
        dispatch({ type: RESET_GAME });
      }else{
        dispatch({ type: SET_TURN }); 
      }
    }
  },[recentCell])
  return (
    <>
      <Table tableData={tableData} dispatch={dispatch} />
      {winner && <div>승리: {winner}</div>}
    </>
  );
};

// module.exports = TictaktocGame;
export default TictaktocGame;
