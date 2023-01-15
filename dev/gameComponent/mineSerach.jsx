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
    dispatch: () => {}
})

const initialState = {
    tableData: [],
    timer: 0,
    result: ''
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
    console.log(data)
    return data
}
export const START_GAME = 'START_GAME'

const reducer = (state, action) => {
    switch(action.type){
        case START_GAME: {
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine)
            }
        }
        default:
            return state;
    }
}
const MineSerach = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // provider에 바로 안넣어주는 이유는 렌더링 될 시 value값들도 같이 리렌더링이 되기 때문에 최적화 떨어짐. 그래서 memo로 캐싱해둠
    const value = useMemo(()=>{
        return {tableData: state.tableData, dispatch}
    }, [state.tableData])
    return (
      <TableContext.Provider value={value}>
        <Form />
        <div>{state.timer}</div>
        <Table />
        <div>{state.result}</div>
      </TableContext.Provider>
    );
  };
  

export default MineSerach;
  