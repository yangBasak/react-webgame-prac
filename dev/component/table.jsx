// const React = require("react");
// const Tr = require("./tr");

import React from 'react';
import Tr from './tr';

const Table = ({ tableData, dispatch }) => {
  return (
    <table>
        <tbody>
          {Array(tableData.length)
            .fill()
            .map((tr, i) => (
              <Tr Key={i} rowData={tableData[i]} rowIndex={i} dispatch={dispatch} />
          ))}
        </tbody>
    </table>
  );
};

export default Table;

