import * as React from 'react';
import { Modal } from 'antd';
import { Table } from 'antd';

type scheduleDetailModalProps = {
    isShowModal: boolean,
    routes: any,
    orders: any,
    drivers: string[]
}

const columns: any = [{
    title: '订单编号',
    dataIndex: 'number',
    key: 'number'
},{
    title: '重量',
    dataIndex: 'orderLoad',
    key: 'orderLoad'
},{
    title: '体积',
    dataIndex: 'orderVolume',
    key: 'orderVolume'
},{
    title: '起始城市',
    dataIndex: 'startCityName',
    key: 'startCityName'
},{
    title: '起始城市',
    dataIndex: 'targetCityName',
    key: 'targetCityName'
}]

const ScheduleDetailModal = ({
    isShowModal,
    routes,
    orders,
    drivers
}: scheduleDetailModalProps) => {
    return (
        <Modal
            title='车辆详情'
            width={720}
            visible={isShowModal}
            destroyOnClose={true}
            footer={null}
        >
            <div className='detail-item'>
                <div className='schedule-detail-title'>运输路线</div>
                <div className='schedule-detail-route-body'>
                    {
                        routes.map((item: string, index: number) => (
                            <span className='route-item'>{item}</span>
                        ))
                    }
                </div>
            </div>
            <div className='detail-item'>
                <div className='schedule-detail-title'>驾驶员</div>
                <div className='schedule-detail-route-body'>
                    {
                        drivers.map((item: any, index: number) => (
                            <span>{item}{index === drivers.length - 1 ? '' : '；'}</span>
                        ))
                    }
                </div>
            </div>
            <div className='detail-item'>
                <div className='schedule-detail-title'>预处理订单</div>
                <Table
                    columns={columns}
                    dataSource={orders}
                />
            </div>
        </Modal>
    )
}

export default ScheduleDetailModal;