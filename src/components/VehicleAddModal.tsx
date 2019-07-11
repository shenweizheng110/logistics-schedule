import * as React from 'react';
import { Form, Modal, Input, Select, InputNumber } from 'antd';
import { VehicleType, VehicleStatus } from '../config/enums'
import { modalProps } from '../interfaces';

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

const vehicleTypeOptions: any = [];
for(let item in VehicleType){
    vehicleTypeOptions.push(<Option value={item}>{VehicleType[item]}</Option>)
}

const vehicleStatusOptions: any = [];
for(let item in VehicleStatus){
    vehicleStatusOptions.push(<Option value={item}>{VehicleStatus[item]}</Option>);
}

const VehicleAddModal = ({
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
            title={modalData.id ? '修改车辆' : '添加车辆'}
            onOk={() => handleModalSubmit(form)}
            onCancel={() => handleCloseModal(form)}
        >
            <Form {...formItemLayout}>
                <Form.Item label='车牌号'>
                    {
                        getFieldDecorator('vehicleLicense',{
                            rules: [{
                                required: true, message: '车牌号不为空'
                            },{
                                max: 8, message: '最大长度不超过8'
                            }],
                            initialValue: modalData.vehicleLicense
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label='最大载重' className='input-number'>
                    {
                        getFieldDecorator('maxLoad',{
                            rules: [{
                                required: true, message: '最大载重不为空'
                            }],
                            initialValue: modalData.maxLoad
                        })(
                            <InputNumber min={1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='最大体积' className='input-number'>
                    {
                        getFieldDecorator('maxVolume',{
                            rules: [{
                                required: true, message: '最大体积不为空不为空'
                            }],
                            initialValue: modalData.maxVolume
                        })(
                            <InputNumber min={1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='最大行驶距离' className='input-number'>
                    {
                        getFieldDecorator('maxDayDistance',{
                            rules: [{
                                required: true, message: '最大行驶距离不为空'
                            }],
                            initialValue: modalData.maxDayDistance
                        })(
                            <InputNumber min={1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='车辆类型'>
                    {
                        getFieldDecorator('vehicleType',{
                            rules: [{
                                required: true, message: '车辆类型不为空'
                            }],
                            initialValue: modalData.vehicleType
                        })(
                            <Select>
                                {
                                    vehicleTypeOptions.map((item: any) => (
                                        item
                                    ))
                                }
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='车辆状态'>
                    {
                        getFieldDecorator('status',{
                            rules: [{
                                required: true, message: '车牌号不为空'
                            }],
                            initialValue: modalData.status
                        })(
                            <Select>
                                {
                                    vehicleStatusOptions.map((item: any) => (
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

export default Form.create<modalProps>()(VehicleAddModal);
