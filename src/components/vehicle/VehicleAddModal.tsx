import * as React from 'react';
import { Form, Modal, Input, Select, InputNumber } from 'antd';
import { VehicleType, VehicleStatus } from '../../config/enums'
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

const vehicleTypeOptions: any = [];
for(let item in VehicleType){
    vehicleTypeOptions.push(<Option value={item}>{VehicleType[item]}</Option>)
}

const vehicleStatusOptions: any = [];
for(let item in VehicleStatus){
    vehicleStatusOptions.push(<Option value={item}>{VehicleStatus[item]}</Option>);
}

interface VehicleAddModalProps extends modalProps {
    cityList: any,
}

const VehicleAddModal = ({
    isShowModal,
    form,
    modalData,
    cityList,
    handleModalSubmit,
    handleCloseModal,
}: VehicleAddModalProps) => {
    const { getFieldDecorator } = form;
    return (
        <Modal
            visible={isShowModal}
            title={modalData.id ? '修改车辆' : '添加车辆'}
            onOk={() => handleModalSubmit(form)}
            onCancel={() => handleCloseModal(form)}
            destroyOnClose={true}
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
                <Form.Item label='百公里油耗' className='input-number'>
                    {
                        getFieldDecorator('oil',{
                            rules: [{
                                required: true, message: '百公里油耗不为空'
                            }],
                            initialValue: modalData.oil
                        })(
                            <InputNumber min={1} step={0.1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='初始速度' className='input-number'>
                    {
                        getFieldDecorator('baseSpeed',{
                            rules: [{
                                required: true, message: '初始速度不为空'
                            }],
                            initialValue: modalData.baseSpeed
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
                {
                    modalData.id
                    ? (
                        <>
                            <Form.Item label='当前位置'>
                                {
                                    getFieldDecorator('currentCityId',{
                                        rules: [{
                                            required: true, message: '当前位置不为空'
                                        }],
                                        initialValue: modalData.currentCityId
                                    })(
                                        <Select>
                                            {
                                                cityList.map((item: any) => (
                                                    <Option value={item.id}>{item.cityName}</Option>
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
                                            required: true, message: '车辆状态不为空'
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
                        </>
                    )
                    : null
                }
            </Form>
        </Modal>
    )
}

export default Form.create<modalProps>()(VehicleAddModal);
