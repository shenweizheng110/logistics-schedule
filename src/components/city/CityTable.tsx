import * as React from 'react';
import { useEffect } from 'react';
import { Table, Divider, Popconfirm } from 'antd';
import { tableProps } from '../../interfaces';

interface CityTableProps extends tableProps{
    checkCityStatus: (id: number, type: string) => void
}

const CityTable = ({
    isLoading,
    dataSource,
    page,
    total,
    pageSize,
    handleChange,
    checkCityStatus
}: CityTableProps) => {
    const columns = [{
        title: '城市名称',
        dataIndex: 'cityName',
        key: 'cityName'
    },{
        title: '经度',
        dataIndex: 'longitude',
        key: 'longitude'
    },{
        title: '纬度',
        dataIndex: 'latitude',
        key: 'latitude'
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: string, record: any) => (
            <span>
                <a href='javascript:;' onClick={() => checkCityStatus(record.id,'edit')}>编辑</a>
                <Divider type='vertical' />
                <Popconfirm title="确认报废吗？" onConfirm={() => checkCityStatus(record.id,'delte')}>
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

export default CityTable;