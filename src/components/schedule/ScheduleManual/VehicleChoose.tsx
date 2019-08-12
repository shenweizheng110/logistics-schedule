import * as React from 'react';
import { Table, Button, message } from 'antd';
import { VehicleType, VehicleStatus } from '../../../config/enums';
import { tableProps } from '../../../interfaces';
import { useEffect } from 'react';

const columns = [{
    title: '车牌号',
    dataIndex: 'vehicleLicense',
    key: 'vehicleLicense'
},{
    title: '当前载重',
    dataIndex: 'currentLoad',
    key: 'currentLoad'
},{
    title: '最大载重',
    dataIndex: 'maxLoad',
    key: 'maxLoad'
},{
    title: '当前体积',
    dataIndex: 'currentVolume',
    key: 'currentVolume'
},{
    title: '最大体积',
    dataIndex: 'maxVolume',
    key: 'maxVolume'
},{
    title: '百公里油耗',
    dataIndex: 'oil',
    key: 'oil'
},{
    title: '初始速度',
    dataIndex: 'baseSpeed',
    key: 'baseSpeed'
},{
    title: '当前位置',
    dataIndex: 'currentCityName',
    key: 'currentCityName'
},{
    title: '车辆类型',
    dataIndex: 'vehicleType',
    key: 'vehicleType',
    render: (text: any) => (
        <span>{VehicleType[text]}</span>
    )
},{
    title: '车辆状态',
    dataIndex: 'status',
    key: 'status',
    render: (text: any) => (
        <span>{VehicleStatus[text]}</span>
    )
}];

interface VehicleChooseProps extends tableProps {
    currentStep: number,
    vehicleSelectedRowKeys: string[],
    toNextStep: (current: number) => void,
    handleRowSelect: (selectedRowKeys: string[], selectedRows: any) => void
}

const VehicleChoose = ({
    currentStep,
    vehicleSelectedRowKeys,
    isLoading,
    page,
    total,
    pageSize,
    dataSource,
    handleChange,
    toNextStep,
    handleRowSelect
}: VehicleChooseProps) => {
    useEffect(() => {
        handleChange(1,10);
    }, []);

    const handleNextStep = () => {
        if(vehicleSelectedRowKeys.length === 0){
            message.error('调度车辆不为空');
        }else{
            toNextStep(++currentStep);
        }
    }

    return (
        <>
            <Table
                rowSelection={{
                    onChange: handleRowSelect,
                    selectedRowKeys: vehicleSelectedRowKeys
                }}
                rowKey={'vehicleLicense'}
                loading={isLoading}
                columns={columns}
                dataSource={dataSource}
                pagination={{
                    current: page,
                    total,
                    pageSize,
                    onChange: handleChange
                }}
            />
            <div className='card-footer'>
                <Button
                    type='primary'
                    className='next-step'
                    onClick={handleNextStep}
                >
                    下一步
                </Button>
            </div>
        </>
    )
}

export default VehicleChoose;