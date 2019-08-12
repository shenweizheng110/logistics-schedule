import * as React from 'react';

type UndisposedOrderCountPros = {
    undisposedOrderCount: number
}

const UndisposedOrderCount = ({
    undisposedOrderCount
}: UndisposedOrderCountPros) => {
    return (
        <div className='card schedule-center-detail-item'>
            <div className='usage-rate-title'>未处理订单</div>
            <div className='usage-rate-body'>
                <div className='undisposed-order-count'>{undisposedOrderCount}</div>
                <div className='undisposed-order-desc'>订单数量</div>
            </div>
        </div>
    )
}

export default UndisposedOrderCount;