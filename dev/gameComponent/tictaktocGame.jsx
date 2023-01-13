const React = require("react");
const { useReducer } = React;
const Table = require("../component/table");

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

exports.SET_WINNER = "SET_WINNER";
exports.CLICK_CELL = "CLICK_CELL";
exports.SET_TURN = "SET_TURN";

const reducer = (state, action) => {
  console.log(action.type);
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
      };
    }
    case SET_TURN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    }
  }
};
const TictaktocGame = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Table tableData={state.tableData} dispatch={dispatch} />
      {state.winner && <div>{state.winner}님 승리</div>}
    </>
  );
};

module.exports = TictaktocGame;
