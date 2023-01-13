// import React, { Component } from "react";
const React = require("react");
const { useState, useReducer } = React;
const Table = require('../component/table')

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [['','',''],['','',''],['','','']]
}
const reducer = (state, action) => {

}
const TictaktocGame = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

  
    return (
      <>
        <Table tableData={state.tableData}/>
        {state.winner && <div>{state.winner}님 승리</div>}
      </>
    );
  
}

module.exports = TictaktocGame;
`` 