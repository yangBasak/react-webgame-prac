// const React = require("react");
// const { useCallback } = React;
// const { CLICK_CELL, SET_TURN } = require("../gameComponent/tictaktocGame");

import React, { useCallback, memo } from 'react';
import { CLICK_CELL } from '../gameComponent/tictaktocGame';

const Td = memo(({ cellData, rowIndex, cellIndex, dispatch }) => {
  const onClickTd = useCallback(() => {
    if(cellData){
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
});

//module.exports = Td;
export default Td;
