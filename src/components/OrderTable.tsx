import * as React from 'react';
import { useEffect } from 'react';
import { Table, Divider, Popconfirm } from 'antd';
import { OrderStatus } from '../config/enums';
import { tableProps } from '../interfaces';

const OrderTable = ({
    isLoading,
    dataSource,
    page,
    total,
    pageSize,
    handleChange,
    handleDelete,
    openEditModal
}:tableProps) => {
    const columns = [{
        title: '订单编号',
        dataIndex: 'number',
        key: 'number'
    },{
        title: '订单名称',
        dataIndex: 'title',
        key: 'title'
    },{
        title: '订单重量',
        dataIndex: 'load',
        key: 'load'
    },{
        title: '订单体积',
        dataIndex: 'volume',
        key: 'volume'
    },{
        title: '订单状态',
        dataIndex: 'status',
        key: 'status',
        render: (text: any) => (
            <span>{OrderStatus[text]}</span>
        )
    },{
        title: '运输车辆',
        dataIndex: 'vehicleLicense',
        key: 'vehicleLicense'
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: string, record: any) => (
            <span>
                <a href='javascript:;' onClick={() => openEditModal(record.id)}>编辑</a>
                <Divider type='vertical' />
                <Popconfirm title="确认报废吗？" onConfirm={() => handleDelete(record.id)}>
                    <a href='javascript:;'>删除</a>
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

export default OrderTable;