import * as React from 'react';
import { Table, Divider } from 'antd';
import { VehicleType, VehicleStatus } from '../../../config/enums';

const vehcileColumns = [{
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
    title: '最大行程',
    dataIndex: 'maxDayDistance',
    key: 'maxDayDistance'
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
    render: (text: any, record: any) => (
        <span>
            <a href="#">查看路线</a>
        </span>
    )
}];

const orderColumns = [{
    title: '订单编号',
    dataIndex: 'number',
},{
    title: '装载车辆',
    dataIndex: 'vehicleLicense',
},{
    title: '重量',
    dataIndex: 'load',
},{
    title: '体积',
    dataIndex: 'volume',
},{
    title: '起始点',
    dataIndex: 'currentCityName',
},{
    title: '目的点',
    dataIndex: 'targetCityName',
}]

const ScheduleManualDetail = () => {
    return (
        <>
            <div className='manual-detail-item'>
                <div className='manual-detail-item-title'>预计成本</div>
                <div className='manual-detail-item-body'>
                    <div className='detail-body-item'>
                        <span className='cost-label'>总成本</span>
                        <span className='cost-value'>9890</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>运输成本</span>
                        <span className='cost-value'>3409</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>运输占比</span>
                        <span className='cost-value'>0.5</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>惩罚成本</span>
                        <span className='cost-value'>800</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>惩罚占比</span>
                        <span className='cost-value'>0.3</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>人工成本</span>
                        <span className='cost-value'>582</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>人工占比</span>
                        <span className='cost-value'>0.2</span>
                    </div>
                </div>
            </div>
            <Divider />
            <div className='manual-detail-item'>
                <div className='manual-detail-item-title'>预使用车辆</div>
                <Table
                    columns={vehcileColumns}
                />
            </div>
            <Divider />
            <div className='manual-detail-item'>
                <div className='manual-detail-item-title'>预处理订单</div>
                <Table
                    columns={orderColumns}
                />
            </div>
        </>
    )
}

export default ScheduleManualDetail;