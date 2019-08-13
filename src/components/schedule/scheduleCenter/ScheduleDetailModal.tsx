import * as React from 'react';
import { Modal } from 'antd';
import { Table } from 'antd';

type scheduleDetailModalProps = {
    isShowScheduleDetailModal: boolean,
    scheduleDetail: {
        orders: any,
        routes: any,
        drivers: any
    },
    closeModal: () => void
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
    isShowScheduleDetailModal,
    scheduleDetail,
    closeModal
}: scheduleDetailModalProps) => {
    return (
        <Modal
            title='车辆详情'
            width={720}
            visible={isShowScheduleDetailModal}
            destroyOnClose={true}
            footer={null}
            onCancel={closeModal}
        >
            <div className='detail-item'>
                <div className='schedule-detail-title'>运输路线</div>
                <div className='schedule-detail-route-body'>
                    {
                        scheduleDetail.routes.map((item: any) => (
                            <span className='route-item'>{item.cityName}</span>
                        ))
                    }
                </div>
            </div>
            <div className='detail-item'>
                <div className='schedule-detail-title'>驾驶员</div>
                <div className='schedule-detail-route-body'>
                    {
                        scheduleDetail.drivers.map((item: any, index: number) => (
                            <span>{item.name}{index === scheduleDetail.drivers.length - 1 ? '' : '；'}</span>
                        ))
                    }
                </div>
            </div>
            <div className='detail-item'>
                <div className='schedule-detail-title'>预处理订单</div>
                <Table
                    columns={columns}
                    dataSource={scheduleDetail.orders}
                />
            </div>
        </Modal>
    )
}

export default ScheduleDetailModal;