const React = require("react");
const Tr = require("./tr");

const Table = ({ tableData, dispatch }) => {
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowData={tableData[i]} rowIndex={i} dispatch={dispatch} />
        ))}
    </table>
  );
};

module.exports = Table;
