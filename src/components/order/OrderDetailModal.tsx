import * as React from 'react';
import { Modal, Divider } from 'antd';
import { OrderStatus } from '../../config/enums'

type OrderDetailModalProps = {
    isShowDetailModal: boolean,
    modalData: any,
    handleCloseModal: () => void
}

const OrderDetailModal = ({
    isShowDetailModal,
    modalData,
    handleCloseModal
}: OrderDetailModalProps) => {
    modalData.createTime = new Date(modalData.createTime).toLocaleString();
    modalData.orderStatus = OrderStatus[modalData.orderStatus];
    const orderFields = [{
        title: '订单编号',
        key: 'number'
    },{
        title: '订单名称',
        key: 'title'
    },{
        title: '订单状态',
        key: 'orderStatus'
    },{
        title: '订单金额',
        key: 'money'
    },{
        title: '订单重量',
        key: 'orderLoad'
    },{
        title: '订单体积',
        key: 'orderVolume'
    },{
        title: '起始城市',
        key: 'startCityName'
    },{
        title: '目的城市',
        key: 'targetCityName'
    },{
        title: '创建时间',
        key: 'createTime'
    }];
    const consigneeFields = [{
        title: '姓名',
        key: 'consigneeName'
    },{
        title: '联系方式',
        key: 'consigneePhone'
    },{
        title: '详细地址',
        key: 'consigneeAddress'
    }]
    return (
        <>
            <Modal
                visible={isShowDetailModal}
                title={'订单详情'}
                destroyOnClose={true}
                onCancel={handleCloseModal}
                width={820}
                footer={null}
            >
                <div className='order-detail-item'>
                    <div className='order-detail-title'>订单详情</div>
                    <div className='order-detail-body'>
                        {
                            orderFields.map((item: any) => (
                                <div className='order-detail-body-item'>
                                    <span className='order-detail-body-item-label'>
                                        {item.title}
                                    </span>
                                    <span className='order-detail-body-item-content'>
                                        {modalData[item.key]}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Divider />
                <div className='order-detail-item'>
                    <div className='order-detail-title'>收货人详情</div>
                    <div className='order-detail-body'>
                        {
                            consigneeFields.map((item: any) => (
                                <div className='order-detail-body-item'>
                                    <span className='order-detail-body-item-label'>
                                        {item.title}
                                    </span>
                                    <span className='order-detail-body-item-content'>
                                        {modalData[item.key]}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default OrderDetailModal;