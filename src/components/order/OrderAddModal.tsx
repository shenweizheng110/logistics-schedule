import * as React from 'react';
import { Form, Modal, Input, Select, InputNumber } from 'antd';
import { OrderStatus } from '../../config/enums'
import { modalProps } from '../../interfaces';
import { useEffect } from 'react';

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

interface orderAddModalProps extends modalProps {
    cityList: any,
    getCityList: () => void
}

const OrderAddModal = ({
    isShowModal,
    cityList,
    form,
    modalData,
    handleModalSubmit,
    handleCloseModal,
    getCityList
}: orderAddModalProps) => {
    useEffect(() => {
        getCityList();
    },[]);

    const { getFieldDecorator } = form;
    const orderStatusOptions: any = [];
    for(let item in OrderStatus){
        orderStatusOptions.push(<Option value={item}>{OrderStatus[item]}</Option>)
    }
    const cityOptions = cityList.map((item: any) => (
        <Option value={item.id}>{item.cityName}</Option>
    ))

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
                <Form.Item label='订单金额' className='input-number'>
                    {
                        getFieldDecorator('money',{
                            rules: [{
                                required: true, message: '订单金额不为空'
                            }],
                            initialValue: modalData.money
                        })(
                            <InputNumber min={1} step={0.1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='订单重量' className='input-number'>
                    {
                        getFieldDecorator('orderLoad',{
                            rules: [{
                                required: true, message: '订单重量不为空'
                            }],
                            initialValue: modalData.orderLoad
                        })(
                            <InputNumber min={1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='订单体积' className='input-number'>
                    {
                        getFieldDecorator('orderVolume',{
                            rules: [{
                                required: true, message: '最大体积不为空'
                            }],
                            initialValue: modalData.orderVolume
                        })(
                            <InputNumber min={1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='收货人姓名'>
                    {
                        getFieldDecorator('consigneeName',{
                            rules: [{
                                required: true, message: '收货人姓名不为空'
                            }],
                            initialValue: modalData.consigneeName
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label='收货人手机号'>
                    {
                        getFieldDecorator('consigneePhone',{
                            rules: [{
                                required: true, message: '收货人手机号不为空'
                            }],
                            initialValue: modalData.consigneePhone
                        })(
                            <Input />
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
                            initialValue: modalData.targetCityId
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
            </Form>
        </Modal>
    )
}

export default Form.create<modalProps>()(OrderAddModal);