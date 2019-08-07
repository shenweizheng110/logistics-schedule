import * as React from 'react';
import PageHeader from '../common/PageHeader';
import VehicleFilterPanelContainer from '../../containers/vehicleContainer/VehicleFilterPanelContainer';
import VehicleTableContainer from '../../containers/vehicleContainer/VehicleTableContainer';
import VehicleAddModalContainer from '../../containers/vehicleContainer/VehicleAddModalContainer';
import { listProps } from '../../interfaces';
import { useEffect } from 'react';

const Vehicle = ({
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
                title='车辆管理'
                isUnflod={isUnflod}
                showFilterPanel={showFilterPanel}
                handleShowModal={handleShowModal}
            />
            {
                isUnflod ? <VehicleFilterPanelContainer /> : null
            }
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='card'>
                        <div className='card-body'>
                            <VehicleTableContainer />
                        </div>
                    </div>
                </div>
            </div>
            <VehicleAddModalContainer />
        </>
    )
}

export default Vehicle;