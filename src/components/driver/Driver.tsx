import * as React from 'react';
import PageHeader from '../common/PageHeader';
import { listProps } from '../../interfaces';
import DriverFilterPanelContainer from '../../containers/driverContainer/DriverFilterPanelContainer';
import DriverTableContainer from '../../containers/driverContainer/DriverTabelContainer';
import DriverAddModalContainer from '../../containers/driverContainer/DriverAddModalContainer';
import { useEffect } from 'react'

const Driver = ({
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
                title='司机管理'
                isUnflod={isUnflod}
                showFilterPanel={showFilterPanel}
                handleShowModal={handleShowModal}
            />
            {
                isUnflod ? <DriverFilterPanelContainer /> : null
            }
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='card'>
                        <div className='card-body'>
                            <DriverTableContainer />
                        </div>
                    </div>
                </div>
            </div>
            <DriverAddModalContainer />
        </>
    )
}

export default Driver;