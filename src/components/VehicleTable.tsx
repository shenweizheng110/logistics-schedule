import * as React from 'react';
import { useEffect } from 'react';
import { Table, Divider, Popconfirm } from 'antd';
import { VehicleType, VehicleStatus } from '../config/enums';

interface TableProp{
    isLoading: boolean,
    page: number,
    total: number,
    pageSize: number,
    dataSource: any,
    handleChange: (page: number, pageSize?: number) => void,
    handleDelete: (id: number) => void,
    openEditModal: (id: number) => void
}

const VehicleTable = ({
    isLoading,
    dataSource,
    page,
    total,
    pageSize,
    handleChange,
    handleDelete,
    openEditModal
}:TableProp) => {
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
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: string, record: any) => (
            <span>
                <a href='javascript:;' onClick={() => openEditModal(record.id)}>编辑</a>
                <Divider type='vertical' />
                <Popconfirm title="确认报废吗？" onConfirm={() => handleDelete(record.id)}>
                    <a href='javascript:;'>报废</a>
                </Popconfirm>
            </span>
        )
    }];

    useEffect(()=> {
        handleChange(1,10);
    },[])

    return (
        <>
            <Table
                loading={isLoading}
                columns={columns}
                dataSource={dataSource}
                pagination={{
                    current: page,
                    total: total,
                    pageSize: pageSize,
                    onChange: handleChange
                }}
            />
        </>
    )
}

export default VehicleTable;