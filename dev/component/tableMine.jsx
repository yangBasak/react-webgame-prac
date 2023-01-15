import React, {useContext} from 'react';
import { TableContext } from '../gameComponent/mineSerach';
import Tr from './trMine';

const Table = ({ }) => {
    const {tableData} = useContext(TableContext)
    return (
        <table>
            <tbody>
            {Array(tableData.length)
                .fill()
                .map((tr, i) => (
                <Tr Key={i} rowIndex={i}/>
            ))}
            </tbody>
        </table>
    );
};

export default Table;

