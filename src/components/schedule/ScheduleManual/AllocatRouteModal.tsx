import * as React from 'react';
import { Modal, Input, Select, Button } from 'antd';
import { useState } from 'react';

type AllocatRouteModalProps = {
    isShowModal: boolean,
    currentCity: {
        currentCityId: number,
        currentCityName: string,
    }
}
const Option = Select.Option;
const AllocatRouteModal = ({
    isShowModal,
    currentCity
}: AllocatRouteModalProps) => {
    const [nextCitys, setNextCitys] = useState([]);
    let testRef: any = null;
    // 添加下一城市点
    const addNextCity = () => {
        setNextCitys([...nextCitys, null])
    }
    // 城市下拉框
    const handleCityChange = (value: any, e: any) => {
        let nextCityIndex = testRef.props['data-nextCityIndex'];
        let nextCityCopy = [...nextCitys];
        nextCityCopy[nextCityIndex] = value;
        setNextCitys(nextCityCopy);
    }

    const modalFooter = (
        <div>
            <Button type='primary' onClick={addNextCity}>添加</Button>
            <Button type='default'>取消</Button>
            <Button type='primary'>确认</Button>
        </div>
    )

    return (
        <>
            <Modal
                title='分配路线'
                visible={isShowModal}
                footer={modalFooter}
                destroyOnClose={true}
            >
                <div className='allocat-route-body'>
                    <div className='allocat-route-item allocat-route-start-city'>
                        <span className='route-item-title'>当前城市点：</span>
                        <span>{currentCity.currentCityName}</span>
                    </div>
                    {
                        nextCitys.map((nextCityItem: any, nextCityIndex: number) => (
                            <div className='allocat-route-item'>
                                <div className='allocat-roue-item-body'>
                                    <span className='route-item-title'>下一城市点：</span>
                                    <Select
                                        value={nextCityItem}
                                        data-nextCityIndex={nextCityIndex}
                                        onSelect={handleCityChange}
                                        ref={(sel) => {testRef = sel}}
                                    >
                                        <Option value='10'>A</Option>
                                        <Option value='11'>B</Option>
                                        <Option value='12'>C</Option>
                                        <Option value='13'>D</Option>
                                        <Option value='14'>E</Option>
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