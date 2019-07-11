import * as React from 'react';
import PageHeader from './PageHeader';
import { listProps } from '../interfaces';
import OrderFilterPanelContainer from '../containers/OrderFilterPanelContainer';
import OrderTableContainer from '../containers/OrderTableContainer';
import OrderAddModalContainer from '../containers/OrderAddModalContainer';

const Order = ({
    isUnflod,
    showFilterPanel,
    handleShowModal
}: listProps) => {
    return(
        <>
            <PageHeader
                title='订单管理'
                isUnflod={isUnflod}
                showFilterPanel={showFilterPanel}
                handleShowModal={handleShowModal}
            />
            {
                isUnflod ? <OrderFilterPanelContainer /> : null
            }
            <OrderTableContainer />
            <OrderAddModalContainer />
        </>
    )
}

export default Order;