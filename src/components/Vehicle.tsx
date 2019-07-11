import * as React from 'react';
import PageHeader from './PageHeader';
import VehicleFilterPanelContainer from '../containers/VehicleFilterPanelContainer';
import VehicleTableContainer from '../containers/VehicleTableContainer';
import VehicleAddModalContainer from '../containers/VehicleAddModalContainer';
import { listProps } from '../interfaces';

const Vehicle = ({
    isUnflod,
    showFilterPanel,
    handleShowModal
}: listProps) => {
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
            <VehicleTableContainer />
            <VehicleAddModalContainer />
        </>
    )
}

export default Vehicle;