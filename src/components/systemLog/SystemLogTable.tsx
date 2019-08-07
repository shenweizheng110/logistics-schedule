import * as React from 'react';
import { useEffect } from 'react';
import { Table } from 'antd';

type SystemLogTableProps = {
    isLoading: boolean,
    dataSource: any,
    page: number,
    total: number,
    pageSize: number,
}

const SystemLogTable = ({
    isLoading,
    dataSource,
    page,
    total,
    pageSize,
}: SystemLogTableProps) => {
    const columns = [{
        title: '日志类型',
        dataIndex: 'logType',
        key: 'logType'
    },{
        title: '标题',
        dataIndex: 'title',
        key: 'title'
    },{
        title: '时间',
        dataIndex: 'createTime',
        key: 'createTime'
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: string, record: any) => (
            <span>
                <a href='javascript:;'>编辑</a>
            </span>
        )
    }];

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
                }}
            />
        </>
    )
}

export default SystemLogTable;