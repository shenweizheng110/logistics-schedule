import * as React from 'react';
import { useEffect } from 'react';
import { Table, Divider, Popconfirm, message } from 'antd';
import { OrderStatus } from '../../config/enums';
import { tableProps } from '../../interfaces';

interface OrderTableProps extends tableProps{
    openOrderDetailModal: (record: any) => void
}

const OrderTable = ({
    isLoading,
    dataSource,
    page,
    total,
    pageSize,
    handleChange,
    handleDelete,
    openEditModal,
    openOrderDetailModal
}:OrderTableProps) => {
    const handleTableAction = (status: string, type: string, id: number) => {
        if(status === 'in_transit'){
            message.warn('订单运输中，不可操作');
        }else{
            type === 'edit' ? openEditModal(id) : (handleDelete(id));
        }
    }
    const columns = [{
        title: '订单编号',
        dataIndex: 'number',
        key: 'number'
    },{
        title: '订单名称',
        dataIndex: 'title',
        key: 'title'
    },{
        title: '订单金额',
        dataIndex: 'money',
        key: 'money'
    },{
        title: '订单重量',
        dataIndex: 'orderLoad',
        key: 'orderLoad'
    },{
        title: '订单体积',
        dataIndex: 'orderVolume',
        key: 'orderVolume'
    },{
        title: '订单状态',
        dataIndex: 'orderStatus',
        key: 'orderStatus',
        render: (text: any) => (
            <span>{OrderStatus[text]}</span>
        )
    },{
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text: any) => (
            <span>
                {
                    `${new Date(text).toLocaleString()}`
                }
            </span>
        )
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: string, record: any) => (
            <span>
                <a href='javascript:;' onClick={() => handleTableAction(record.orderStatus, 'edit', record.id)}>编辑</a>
                <Divider type='vertical' />
                <a href='javascript:;' onClick={() => openOrderDetailModal(record)}>详情</a>
                <Divider type='vertical' />
                <Popconfirm title="确认报废吗？" onConfirm={() => handleTableAction(record.orderStatus, 'delete', record.id)}>
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