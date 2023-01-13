const React = require("react");
const Tr = require('./tr')

const Table = ({tableData}) => {
    return (
        <table>
            {Array(tableData.length).fill().map((tr)=><Tr />)}
        </table>
        
    )
}

module.exports = Table;