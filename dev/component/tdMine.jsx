import React, {useCallback, useContext} from 'react';
import { CODE, TableContext, OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL } from '../gameComponent/mineSerach';

const getTdStyle = (code) => {
switch (code) {
     case CODE.NORMAL :
     case CODE.MINE : 
          return {
               backgroundColor: "#333"
          }
     case CODE.CLICKED_MINE : 
     case CODE.OPENED : 
          return {  
               backgroundColor: "#fff"
          }
     case CODE.FLAG_MINE:
     case CODE.FLAG:
          return {
               backgroundColor: 'yellow'
          }
     case CODE.QUESTION_MINE:
     case CODE.QUESTION:
          return {
               backgroundColor: 'red'
          }
     default:
          return {
               backgroundColor: "#fff"
          }
}
}
const getTdText = (code) => {
     switch (code){
          case CODE.NORMAL: 
               return ''
          case CODE.MINE:
               return 'X'
          case CODE.CLICKED_MINE:
               return '펑'
          case CODE.FLAG_MINE:
          case CODE.FLAG:
               return '!'
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
               return '?'
          default:
               return ''

     }
}

const Td = ({ rowIndex, cellIndex }) => {
    const {tableData, dispatch, halted} = useContext(TableContext) 
     if(halted) return
    const onClickTd = useCallback(() => {
     if (halted) {
          return;
        }
        switch (tableData[rowIndex][cellIndex]) {
          case CODE.OPENED:
          case CODE.FLAG_MINE:
          case CODE.FLAG:
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
            return;
          case CODE.NORMAL:
            dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
            return;
          case CODE.MINE:
            dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
            return;
          default:
            return;
        }
    }, [tableData[rowIndex][cellIndex], halted])

    const onRightClickTd = useCallback((e) => {
     e.preventDefault();
     if(halted) return
     switch(tableData[rowIndex][cellIndex]){
          case CODE.NORMAL:
          case CODE.MINE: 
               dispatch({type: FLAG_CELL,row: rowIndex, cell: cellIndex})
               return
          case CODE.FLAG_MINE:
          case CODE.FLAG:
               dispatch({type: QUESTION_CELL, row: rowIndex, cell: cellIndex})
               return
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
               dispatch({type: NORMALIZE_CELL, row: rowIndex, cell, cellIndex})
               return
          default:
               return;
         }    
    },[tableData[rowIndex][cellIndex], halted])
   return (
          <td 
               style={getTdStyle(tableData[rowIndex][cellIndex])}
               onClick={onClickTd}
               onContextMenu={onRightClickTd}
          >
          {getTdText(tableData[rowIndex][cellIndex])}</td>
   );
};

export default Td;

