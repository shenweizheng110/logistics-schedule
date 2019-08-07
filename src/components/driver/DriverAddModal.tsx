import * as React from 'react';
import { Form, Modal, Input, Select, InputNumber } from 'antd';
import { modalProps } from '../../interfaces';

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

const DriverAddModal = ({
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
            title={modalData.id ? '修改司机' : '添加司机'}
            onOk={() => handleModalSubmit(form)}
            onCancel={() => handleCloseModal(form)}
        >
            <Form {...formItemLayout}>
                <Form.Item label='司机名称'>
                    {
                        getFieldDecorator('name',{
                            rules: [{
                                required: true, message: '司机名称不为空'
                            },{
                                max: 8, message: '最大长度不超过8'
                            }],
                            initialValue: modalData.name
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label='年龄' className='input-number'>
                    {
                        getFieldDecorator('age',{
                            rules: [{
                                required: true, message: '年龄不为空'
                            }],
                            initialValue: modalData.age
                        })(
                            <InputNumber min={18} max={100}/>
                        )
                    }
                </Form.Item>
                <Form.Item label='性别'>
                    {
                        getFieldDecorator('sex',{
                            rules: [{
                                required: true, message: '性别不为空'
                            }],
                            initialValue: modalData.sex
                        })(
                            <Select>
                                <Option value='male'>男性</Option>
                                <Option value='female'>女性</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='司机薪资' className='input-number'>
                    {
                        getFieldDecorator('pay',{
                            rules: [{
                                required: true, message: '司机薪资不为空'
                            }],
                            initialValue: modalData.pay
                        })(
                            <InputNumber min={1} />
                        )
                    }
                </Form.Item>
                <Form.Item label='身体状况'>
                    {
                        getFieldDecorator('healthStatus',{
                            rules: [{
                                required: true, message: '身体状况不为空'
                            }],
                            initialValue: modalData.healthStatus
                        })(
                            <Select>
                                <Option value='good'>良好</Option>
                                <Option value='general'>中等</Option>
                                <Option value='bad'>较差</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='有无病史'>
                    {
                        getFieldDecorator('isMedicalHistory',{
                            rules: [{
                                required: true, message: '有无病史不为空'
                            }],
                            initialValue: modalData.isMedicalHistory
                        })(
                            <Select>
                                <Option value='false'>无</Option>
                                <Option value='true'>有</Option>
                            </Select>
                        )
                    }
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Form.create<modalProps>()(DriverAddModal);