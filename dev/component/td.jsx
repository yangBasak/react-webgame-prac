const React = require("react");
const { useCallback } = React;
const CLICK_CELL = require("../gameComponent/tictaktocGame");
const SET_TURN = require("../gameComponent/tictaktocGame");

const Td = ({ cellData, rowIndex, cellIndex, dispatch }) => {
  console.log(SET_TURN);
  const onClickTd = useCallback(() => {
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: SET_TURN });
  }, []);
  return <td onClick={onClickTd}>{cellData}</td>;
};

module.exports = Td;
