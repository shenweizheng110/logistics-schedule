import * as React from 'react';
import { Form, Button, Input, Select } from 'antd';
import { filterPanelProps } from '../../interfaces';

const Option = Select.Option;

const OrderFilterPanel= ({
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
                            <Form.Item label='订单编号'>
                                {
                                    getFieldDecorator('number')(
                                        <Input />
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='订单名称'>
                                {
                                    getFieldDecorator('title')(
                                        <Input />
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='订单状态' className='select'>
                                {
                                    getFieldDecorator('status')(
                                        <Select>
                                            <Option value="undisposed">未处理</Option>
                                            <Option value="is_transit">运输中</Option>
                                            <Option value="finished">已完成</Option>
                                        </Select>
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='收货人姓名'>
                                {
                                    getFieldDecorator('consignee_name')(
                                        <Input />
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='收货人手机号'>
                                {
                                    getFieldDecorator('consignee_phone')(
                                        <Input />
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

export default Form.create<filterPanelProps>()(OrderFilterPanel);