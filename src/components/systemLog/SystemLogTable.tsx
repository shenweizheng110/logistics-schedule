import * as React from 'react';
import { useEffect } from 'react';
import { Table } from 'antd';

type SystemLogTableProps = {
    isLoading: boolean,
    dataSource: any,
    page: number,
    total: number,
    pageSize: number,
    handleChange: (page: number, pageSize: number) => void
}

const SystemLogTable = ({
    isLoading,
    dataSource,
    page,
    total,
    pageSize,
    handleChange
}: SystemLogTableProps) => {
    useEffect(() => {
        handleChange(1,10);
    }, []);
    const columns = [{
        title: '日志类型',
        dataIndex: 'logType',
        key: 'logType'
    },{
        title: '标题',
        dataIndex: 'logContent',
        key: 'logContent'
    },{
        title: '时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text: any) => (
            <span>{new Date(text).toLocaleString()}</span>
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