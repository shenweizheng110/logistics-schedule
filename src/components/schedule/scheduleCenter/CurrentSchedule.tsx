import * as React from 'react';
import { Table } from 'antd';

const columns: any = [{
    title: '车牌号',
    key: 'vehicleLicense',
    dataIndex: 'vehicleLicense'
},{
    title: '驾驶员',
    key: 'drivers',
    dataIndex: 'drivers',
    render: (text: any) => (
        <span>
            {
                text.map((item: any, index: number) => (
                    <span>{item}{index === text.length - 1 ? '' : ';'}</span>
                ))
            }
        </span>
    )
},{
    title: '当前位置',
    key: 'currentCityName',
    dataIndex: 'currentCityName'
},{
    title: '下一城市',
    key: 'nextCityName',
    dataIndex: 'nextCityName'
},{
    title: '当前载重',
    key: 'currentLoad',
    dataIndex: 'currentLoad'
},{
    title: '当前体积',
    key: 'currentVolume',
    dataIndex: 'currentVolume'
},{
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    render: (text: any, record: any, index: number) => (
        <span>
            <a href="javascript:;">详情</a>
        </span>
    )
}]

const CurrentSchedule = () => {
    return (
        <div className='card'>
            <div className='usage-rate-title'>当前调度</div>
            <div className='card-body'>
                <Table
                    columns={columns}
                    dataSource={[{
                        vehicleLicense: '苏J1024',
                        currentCityName: '苏州',
                        nextCityName: '南京',
                        currentLoad: '100',
                        currentVolume: '3',
                        drivers: ['张三','李四']
                    }]}
                />
            </div>
        </div>
    )
}

export default CurrentSchedule;