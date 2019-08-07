import * as React from 'react';
import { Table } from 'antd';
import { tableProps } from '../../../interfaces';
import AllocatOrderModal from './AllocatOrderModal';
import AllocatRouteModal from './AllocatRouteModal';

interface AllocatOrderRouteProps extends tableProps {
    current: number
}

const AllocatOrder = ({
    handleChange,
    isLoading,
    page,
    total,
    pageSize,
    dataSource,
    current
}: AllocatOrderRouteProps) => {
    const columns = [
    {
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
        title: '中途城市点',
        dataIndex: 'midwayCityNames',
        key: 'midwayCityNames',
        render: (text: any) => (
            <span>
                {
                    text && text.length === 0
                        ? <span>无</span>
                        : text
                        .map((item: any, index: number) => (
                            <span>${item}{index === text.length ? '' : ';'}</span>
                        ))
                }
            </span>
        )
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: any, record: any) => (
            <span>
                <a href="javascript:;">{current === 1 ? '分配订单' : '分配路线'}</a>
            </span>
        )
    }];
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{
                    current: page,
                    total,
                    pageSize,
                    onChange: handleChange
                }}
            />
            {
                current === 1
                ? <AllocatOrderModal
                    isShowModal={false}
                    orders={[{
                        number: '20161231231',
                        load: 80,
                        volume: 2,
                        currentCityName: '南京',
                        targetCityName: '苏州'
                    }]}
                />
                : <AllocatRouteModal
                    isShowModal={true}
                    currentCity={{
                        currentCityId: 10,
                        currentCityName: 'A'
                    }}
                />
            }
        </>
    )
}

export default AllocatOrder;