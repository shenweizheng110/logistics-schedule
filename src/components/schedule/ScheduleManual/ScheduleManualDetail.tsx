import * as React from 'react';
import { Table, Divider, Button } from 'antd';
import { VehicleType, VehicleStatus } from '../../../config/enums';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface ScheduleManualDetailProps extends RouteComponentProps {
    usedVehicles: any,
    handleOrders: any,
    currentStep: number,
    currentManualSchedule: any,
    toPreStep: (currentStep: number) => void,
    submitManualSchedule: (history: any) => void
}

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
    dataIndex: 'orderLoad',
},{
    title: '体积',
    dataIndex: 'orderVolume',
},{
    title: '起始点',
    dataIndex: 'startCityName',
},{
    title: '目的点',
    dataIndex: 'targetCityName',
}]

const ScheduleManualDetail = (props: ScheduleManualDetailProps) => {
    let {
        usedVehicles,
        handleOrders,
        currentManualSchedule,
        currentStep,
        toPreStep,
        submitManualSchedule
    } = props;
    return (
        <>
            <div className='manual-detail-item'>
                <div className='manual-detail-item-title'>预计成本</div>
                <div className='manual-detail-item-body'>
                    <div className='detail-body-item'>
                        <span className='cost-label'>总成本</span>
                        <span className='cost-value'>{currentManualSchedule.cost}</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>运输成本</span>
                        <span className='cost-value'>{currentManualSchedule.oilCost}</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>运输占比</span>
                        <span className='cost-value'>0.5</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>惩罚成本</span>
                        <span className='cost-value'>{currentManualSchedule.timePunish}</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>惩罚占比</span>
                        <span className='cost-value'>0.3</span>
                    </div>
                    <div className='detail-body-item'>
                        <span className='cost-label'>人工成本</span>
                        <span className='cost-value'>{currentManualSchedule.driverCost}</span>
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
                    dataSource={usedVehicles}
                />
            </div>
            <div className='manual-detail-item'>
                <div className='manual-detail-item-title'>预处理订单</div>
                <Table
                    columns={orderColumns}
                    dataSource={handleOrders}
                />
            </div>
            <div className='card-footer'>
                <Button
                    type='primary'
                    className='next-step'
                    onClick={() => submitManualSchedule(props.history)}
                >
                    确认
                </Button>
                <Button
                    type='primary'
                    className='next-step'
                    onClick={() => toPreStep(--currentStep)}
                >
                    上一步
                </Button>
            </div>
        </>
    )
}

const ScheduleManualDetailWrapper = withRouter(ScheduleManualDetail);

export default ScheduleManualDetailWrapper;