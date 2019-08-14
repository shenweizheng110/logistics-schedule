import * as React from 'react';
import { Table, Button } from 'antd';
import AllocatOrderModalContainer from '../../../containers/scheduleContainer/scheduleManual/AllocatOrderModalContainer';
import AllocatRouteModalContainer from '../../../containers/scheduleContainer/scheduleManual/AllocatRouteModalContainer';

interface AllocatOrderRouteProps {
    vehicleSelectedRows: any,
    currentStep: number,
    vehicleRoute: any,
    toNextStep: (current: number, vehicleSelectedRows: any, vehicleRoute: any) => void,
    openAllocatModal: (type: string, vehicleLicense: string) => void
}

const AllocatOrderRoute = ({
    vehicleSelectedRows,
    currentStep,
    vehicleRoute,
    toNextStep,
    openAllocatModal
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
        dataIndex: 'midwayCitys',
        key: 'midwayCitys',
        render: (text: any) => (
            <span>
                {
                    !text || text.length === 0
                        ? <span>无</span>
                        : text
                        .map((item: any, index: number) => (
                            <span>{item.label}{index === text.length - 1 ? '' : '-'}</span>
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
                <a
                    href="javascript:;"
                    onClick={() => {
                        openAllocatModal(
                            currentStep === 1 ? 'order' : 'route',
                            record.vehicleLicense
                        )
                    }}
                >
                    {currentStep === 1 ? '分配订单' : '分配路线'}
                </a>
            </span>
        )
    }];
    return (
        <>
            <Table
                columns={columns}
                dataSource={vehicleSelectedRows}
            />
            <div className='card-footer'>
                <Button
                    type='primary'
                    className='next-step'
                    onClick={() => toNextStep(++currentStep, vehicleSelectedRows, vehicleRoute)}
                >
                    下一步
                </Button>
                <Button
                    type='primary'
                    className='next-step'
                    onClick={() => toNextStep(--currentStep, vehicleSelectedRows, vehicleRoute)}
                >
                    上一步
                </Button>
            </div>
            {
                currentStep === 1
                ? <AllocatOrderModalContainer />
                : <AllocatRouteModalContainer />
            }
        </>
    )
}

export default AllocatOrderRoute;