import React, { useEffect, useReducer, useCallback, createContext, useMemo } from 'react';
import Table from '../component/tableMine';
import Form from '../component/formMine';

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0
}
export const TableContext = createContext({
    tableData: [],
    halted: true,
    dispatch: () => {}
})

const initialState = {
    tableData: [],
    timer: 0,
    result: '',
    halted: true
}
const plantMine = (row,cell,mine) => {
    // 전체 칸 갯수. 각 칸에 index를 부여해주는거나 마찬가지임
    const candidate = Array(row * cell).fill().map((arr, i)=>{
        return i
    })
    // 배열에서 지뢰 갯수만큼 지뢰 위치 저장해놓음
    const shuffle = []; 
    while (candidate.length > row * cell - mine){
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]
        shuffle.push(chosen)
    }
    const data = [];
    // 2차원 배열. 위의 index에 맞춰 모두 normal 코드를 넣어놓음
    for(let i = 0; i<row; i++){
        const rowData = []
        data.push(rowData);
        for(let j = 0; j<cell; j++){
            rowData.push(CODE.NORMAL)
        }
    }
    // 지뢰의 index에 맞춰 mine 코드를 넣어놓음
    for(let k = 0; k<shuffle.length; k++) {
        const ver = Math.floor(shuffle[k] / cell)
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE
    }
    return data
}
export const START_GAME = 'START_GAME'
export const OPEN_CELL = 'OPEN_CELL'
export const CLICK_MINE = 'CLICK_MINE'
export const FLAG_CELL = 'FLAG_CELL'
export const QUESTION_CELL = 'QUESTION_CELL'
export const NORMALIZE_CELL = 'NORMALIZE_CELL'

const reducer = (state, action) => {
    switch(action.type){
        case START_GAME: {
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine),
                halted: false
            }
        }
        case OPEN_CELL: {
            const tableData = [...state.tableData]
            tableData[action.row] = [...state.tableData[action.row]]
            tableData[action.row][action.cell]  = CODE.OPENED
            return {
                ...state,
                tableData
            }
        }
        case CLICK_MINE: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.CLICKED_MINE;
            console.log(tableData)
            return {
              ...state,
              tableData,
              halted: true
            };
          }
        case FLAG_CELL: {
            const tableData = [...state.tableData]
            tableData[action.row] = [...state.tableData[action.row]]
            if(tableData[action.row][action.cell] === CODE.MINE){
                tableData[action.row][action.cell] = CODE.FLAG_MINE
            }else {
                tableData[action.row][action.cell] = CODE.FLAG
            }
            console.log(tableData)
            return {
                ...state,
                tableData,
            }
        }
        case QUESTION_CELL: {
            const tableData = [...state.tableData]
            tableData[action.row] = [...state.tableData[action.row]]
            if(tableData[action.row][action.cell] === CODE.FLAG_MINE){
                tableData[action.row][action.cell] = CODE.QUESTION_MINE
            }else {
                tableData[action.row][action.cell] = CODE.QUESTION
            }
            return {
                ...state,
                tableData,
            }
        }
        case NORMALIZE_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if (tableData[action.row][action.cell] === CODE.QUESTION_MINE) {
              tableData[action.row][action.cell] = CODE.MINE;
            } else {
              tableData[action.row][action.cell] = CODE.NORMAL;
            }
            return {
              ...state,
              tableData,
            };
        }
        default:
            return state;
    }
}
const MineSerach = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {tableData, halted, timer, result} = state
    // provider에 바로 안넣어주는 이유는 렌더링 될 시 value값들도 같이 리렌더링이 되기 때문에 최적화 떨어짐. 그래서 memo로 캐싱해둠
    const value = useMemo(() => ({ tableData, halted, dispatch }), [tableData, halted])
    return (
      <TableContext.Provider value={value}>
        <Form />
        <div>{timer}</div>
        <Table />
        <div>{result}</div>
      </TableContext.Provider>
    );
  };
  

export default MineSerach;
  