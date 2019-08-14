import * as React from 'react';
import { Modal, Select, Button } from 'antd';
import { useEffect } from 'react';

type AllocatRouteModalProps = {
    isShowAllocatRouteModal: boolean,
    currentCity: {
        currentCityId: number,
        currentCityName: string,
    },
    cityList: any,
    currentVehicleRoute: any,
    handleCloseModal: () => void,
    getCityList: () => void,
    changeCurrentVehicleRoute: (currentVehicleRoute: any, value: any, selectIndex: number) => void,
    addNewSelect: (currentVehicleRoute: any) => void,
    handleModalSubmit: (currentVehicleRoute: any) => void
}
const Option = Select.Option;
const AllocatRouteModal = ({
    isShowAllocatRouteModal,
    currentCity,
    currentVehicleRoute,
    cityList,
    handleCloseModal,
    getCityList,
    changeCurrentVehicleRoute,
    addNewSelect,
    handleModalSubmit
}: AllocatRouteModalProps) => {
    useEffect(() => {
        getCityList();
    },[]);

    const modalFooter = (
        <div>
            <Button type='primary' onClick={() => addNewSelect(currentVehicleRoute)}>添加</Button>
            <Button type='default' onClick={() => handleModalSubmit(currentVehicleRoute)}>取消</Button>
            <Button type='primary' onClick={() => handleModalSubmit(currentVehicleRoute)}>确认</Button>
        </div>
    )

    return (
        <>
            <Modal
                title='分配路线'
                visible={isShowAllocatRouteModal}
                footer={modalFooter}
                destroyOnClose={true}
                onCancel={handleCloseModal}
            >
                <div className='allocat-route-body'>
                    <div className='allocat-route-item allocat-route-start-city'>
                        <span className='route-item-title'>当前城市点：</span>
                        <span>{currentCity.currentCityName}</span>
                    </div>
                    {
                        currentVehicleRoute.map((nextCityItem: any, nextCityIndex: number) => (
                            <div className='allocat-route-item'>
                                <div className='allocat-roue-item-body'>
                                    <span className='route-item-title'>下一城市点：</span>
                                    <Select
                                        value={nextCityItem}
                                        data-nextCityIndex={nextCityIndex}
                                        labelInValue={true}
                                        onSelect={(value: any) => {
                                            changeCurrentVehicleRoute(currentVehicleRoute,value, nextCityIndex);
                                        }}
                                    >
                                        {
                                            cityList.map((item: any) => (
                                                <Option value={item.id}>{item.cityName}</Option>
                                            ))
                                        }
                                    </Select>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Modal>
        </>
    )
}

export default AllocatRouteModal;