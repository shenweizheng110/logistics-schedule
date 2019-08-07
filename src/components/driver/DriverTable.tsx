import * as React from 'react';
import { useEffect } from 'react';
import { Table, Divider, Popconfirm } from 'antd';
import { tableProps } from '../../interfaces';
import { sexType, healthStatus, isMedicalHistoryType } from '../../config/enums';

const DriverTable = ({
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
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    },{
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    },{
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render: (text: any) => (
            <span>{ sexType[text] }</span>
        )
    },{
        title: '月薪',
        dataIndex: 'pay',
        key: 'pay',
    },{
        title: '病史',
        dataIndex: 'isMedicalHistory',
        key: 'isMedicalHistory',
        render: (text: any) => (
            <span>{ isMedicalHistoryType[text] }</span>
        )
    },{
        title: '身体状态',
        dataIndex: 'healthStatus',
        key: 'healthStatus',
        render: (text: any) => (
            <span>{ healthStatus[text] }</span>
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

export default DriverTable;