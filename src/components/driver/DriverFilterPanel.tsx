import * as React from 'react';
import { Form, Button, Input, Select, InputNumber } from 'antd';
import { filterPanelProps } from '../../interfaces';

const Option = Select.Option;

const DriverFilterPanel= ({
    form,
    handleFilterSubmit,
    handleResetFilter
}: filterPanelProps) => {
    const { getFieldDecorator } = form;

    return (
        <div className='page-content'>
            <div className='page-content-wrap'>
                <div className='card'>
                    <div className='card-body'>
                        <Form layout='inline'>
                            <Form.Item label='司机名称'>
                                {
                                    getFieldDecorator('name')(
                                        <Input />
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='年龄' className='input-number'>
                                {
                                    getFieldDecorator('age')(
                                        <InputNumber min={18} max={100} />
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='性别' className='select'>
                                {
                                    getFieldDecorator('sex')(
                                        <Select>
                                            <Option value='male'>男性</Option>
                                            <Option value='female'>女性</Option>
                                        </Select>
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='驾驶车辆' className='vehicleLicense'>
                                {
                                    getFieldDecorator('vehicleLicense')(
                                        <Input />
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='健康状态' className='select'>
                                {
                                    getFieldDecorator('healthStatus')(
                                        <Select>
                                            <Option value='good'>良好</Option>
                                            <Option value='general'>中等</Option>
                                            <Option value='bad'>较差</Option>
                                        </Select>
                                    )
                                }
                            </Form.Item>
                            <div className='filter-panel-bottom-button'>
                                <Button className='left-button' type='primary' onClick={() => handleFilterSubmit(form)}>确认</Button>
                                <Button type='default' onClick={() => handleResetFilter(form)}>重置</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form.create<filterPanelProps>()(DriverFilterPanel);