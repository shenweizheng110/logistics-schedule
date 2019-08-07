import * as React from 'react';
import { Form, Button, Input, Select } from 'antd';
import { filterPanelProps } from '../../interfaces';

const Option = Select.Option;

const SystemLogFilterPanel = ({
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
                            <Form.Item label='日志类型'>
                                {
                                    getFieldDecorator('logType')(
                                        <Select>
                                            <Option value='vehicle'>车辆</Option>
                                            <Option value='order'>订单</Option>
                                            <Option value='schedule'>调度</Option>
                                            <Option value='city'>城市点</Option>
                                            <Option value='driver'>司机</Option>
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

export default Form.create<filterPanelProps>()(SystemLogFilterPanel);