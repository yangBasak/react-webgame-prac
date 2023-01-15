// const React = require("react");
// const Td = require("./td");
import React, {memo} from 'react';
import Td from './td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td key={i} cellData={rowData[i]} rowIndex={rowIndex} cellIndex={i} dispatch={dispatch}>{''}</Td>
        ))}
    </tr>
  );
});

export default Tr;
