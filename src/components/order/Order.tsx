import * as React from 'react';
import PageHeader from '../common/PageHeader';
import { listProps } from '../../interfaces';
import OrderFilterPanelContainer from '../../containers/orderContainer/OrderFilterPanelContainer';
import OrderTableContainer from '../../containers/orderContainer/OrderTableContainer';
import OrderAddModalContainer from '../../containers/orderContainer/OrderAddModalContainer';
import OrderDetailModalContainer from '../../containers/orderContainer/OrderDetailModalContainer';
import { useEffect } from 'react';

const Order = ({
    isUnflod,
    showFilterPanel,
    handleShowModal,
    handleClearPage
}: listProps) => {
    // 清空页面数据
    useEffect(() => {
        return () => {
            handleClearPage();
        }
    },[]);
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
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='card'>
                        <div className='card-body'>
                        <OrderTableContainer />
                        </div>
                    </div>
                </div>
            </div>
            <OrderAddModalContainer />
            <OrderDetailModalContainer />
        </>
    )
}

export default Order;