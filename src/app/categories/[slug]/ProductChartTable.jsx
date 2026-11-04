import React from 'react';

const ProductChartTable = ({ product }) => {

    const minBn = product.min?.toLocaleString('bn-BD');
    const maxBn = product.max?.toLocaleString('bn-BD');
    const avrg = (product.min+product.max)/2;
    const avrgBn= avrg.toLocaleString('bn-BD');

    return (
        <tr className='chart-table-row-details'>
            <td>{product.market}</td>
            <td>{product.division}</td>
            <td>{minBn}</td>
            <td>{maxBn}</td>
            <td>{avrgBn}</td>
        </tr>


    );
};

export default ProductChartTable;