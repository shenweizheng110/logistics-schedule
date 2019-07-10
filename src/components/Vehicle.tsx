import * as React from 'react';
import PageHeader from './PageHeader';
import VehicleFilterPanelContainer from '../containers/VehicleFilterPanelContainer';
import VehicleTableContainer from '../containers/VehicleTableContainer';
import VehicleAddModalContainer from '../containers/VehicleAddModalContainer';

type VehicleProp = {
    isUnflod: boolean,
    showFilterPanel: (isUnflod: boolean) => void,
    handleShowModal: (isShowModal: boolean) => void
}

const Vehicle = ({
    isUnflod,
    showFilterPanel,
    handleShowModal
}: VehicleProp) => {
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