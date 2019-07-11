import * as React from 'react';
import { Form, Modal, Input, Select, InputNumber } from 'antd';
import { OrderStatus } from '../config/enums'
import { modalProps, cityItemProp } from '../interfaces';

const Option = Select.Option;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const orderStatusOptions: any = [];
for(let item in OrderStatus){
    orderStatusOptions.push(<Option value={item}>{OrderStatus[item]}</Option>)
}

const cityList: any = [];
const cityOptions = cityList.map((item: cityItemProp) => (
    <Option value={item.id}>{cityList[item.name]}</Option>
))

const OrderAddModal = ({
    isShowModal,
    form,
    modalData,
    handleModalSubmit,
    handleCloseModal
}: modalProps) => {
    const { getFieldDecorator } = form;
    return (
        <Modal
            visible={isShowModal}
            title={modalData.id ? '修改订单' : '添加订单'}
            onOk={() => handleModalSubmit(form)}
            onCancel={() => handleCloseModal(form)}
        >
            <Form {...formItemLayout}>
                <Form.Item label='订单名称'>
                    {
                        getFieldDecorator('title',{
                            rules: [{
                                required: true, message: '订单名称不为空'
                            },{
                                max: 64, message: '最大长度不超过64'
                            }],
                            initialValue: modalData.title
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label='订单重量' className='input-number'>
                    {
                        getFieldDecorator('load',{
                            rules: [{
                                required: true, message: '订单重量不为空'
                            }],
                            initialValue: modalData.load
                        })(
                            <InputNumber min={1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='订单体积' className='input-number'>
                    {
                        getFieldDecorator('volume',{
                            rules: [{
                                required: true, message: '最大体积不为空'
                            }],
                            initialValue: modalData.volume
                        })(
                            <InputNumber min={1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='收货人姓名' className='input-number'>
                    {
                        getFieldDecorator('consigneeName',{
                            rules: [{
                                required: true, message: '收货人姓名不为空'
                            }],
                            initialValue: modalData.consigneeName
                        })(
                            <InputNumber min={1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='起始城市'>
                    {
                        getFieldDecorator('startCityId',{
                            rules: [{
                                required: true, message: '起始城市不为空'
                            }],
                            initialValue: modalData.startCityId
                        })(
                            <Select>
                                {
                                    cityOptions
                                }
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='目标城市'>
                    {
                        getFieldDecorator('targetCityId',{
                            rules: [{
                                required: true, message: '目标城市不为空'
                            }],
                            initialValue: modalData.targetCity
                        })(
                            <Select>
                                {
                                    cityOptions
                                }
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='详细地址' className='input-number'>
                    {
                        getFieldDecorator('consigneeAddress',{
                            rules: [{
                                required: true, message: '详细地址不为空'
                            }],
                            initialValue: modalData.consigneeAddress
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label='订单状态'>
                    {
                        getFieldDecorator('status',{
                            rules: [{
                                required: true, message: '订单状态不为空'
                            }],
                            initialValue: modalData.status
                        })(
                            <Select>
                                {
                                    orderStatusOptions.map((item: any) => (
                                        item
                                    ))
                                }
                            </Select>
                        )
                    }
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Form.create<modalProps>()(OrderAddModal);