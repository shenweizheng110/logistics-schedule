import * as React from 'react';
import { useEffect } from 'react';
import { Table, Divider, Popconfirm, message } from 'antd';
import { VehicleType, VehicleStatus } from '../../config/enums';
import { tableProps } from '../../interfaces';

const VehicleTable = ({
    isLoading,
    dataSource,
    page,
    total,
    pageSize,
    handleChange,
    handleDelete,
    openEditModal
}: tableProps) => {
    const handleTableAction = (status: string, type: string, id: number) => {
        if(status === 'out'){
            message.warn('车辆运输中，不可操作');
        }else{
            type === 'edit' ? openEditModal(id) : handleDelete(id);
        }
    }
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
        title: '油耗',
        dataIndex: 'oil',
        key: 'oil'
    },{
        title: '当前位置',
        dataIndex: 'currentCityName',
        key: 'currentCityName'
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
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: string, record: any) => (
            <span>
                <a
                    href='javascript:;'
                    onClick={
                        () => handleTableAction(record.status, 'edit', record.id)
                    }
                >编辑</a>
                <Divider type='vertical' />
                <Popconfirm
                    title="确认报废吗？"
                    onConfirm={() => handleTableAction(record.status, 'delete', record.id)}
                >
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