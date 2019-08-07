import * as React from 'react';
import { Table } from 'antd';
import { VehicleType, VehicleStatus } from '../../../config/enums';
import { tableProps } from '../../../interfaces';

const columns = [{
    title: '车牌号',
    dataIndex: 'vehicleLicense',
    key: 'vehicleLicense'
},{
    title: '最大载重',
    dataIndex: 'maxLoad',
    key: 'maxLoad'
},{
    title: '最大体积',
    dataIndex: 'maxVolume',
    key: 'maxVolume'
},{
    title: '最大行程',
    dataIndex: 'maxDayDistance',
    key: 'maxDayDistance'
},{
    title: '初始速度',
    dataIndex: 'baseSpeed',
    key: 'baseSpeed'
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

const VehicleChoose = ({
    handleChange,
    isLoading,
    page,
    total,
    pageSize,
    dataSource
}: tableProps) => {
    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };
    return (
        <Table
            rowSelection={rowSelection}
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
    )
}

export default VehicleChoose;