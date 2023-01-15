import React, {useContext} from 'react';
import { TableContext } from '../gameComponent/mineSerach';
import Td from './tdMine';

const Tr = ({ rowIndex }) => {
    const {tableData} = useContext(TableContext)
    return (
        <tr>
            {tableData[0] && Array(tableData[0].length)
                .fill()
                .map((td, i) => (
                <Td Key={i} rowIndex={rowIndex} cellIndex={i} />
            ))}
            </tr>
    );
};

export default Tr ;

