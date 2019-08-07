import * as React from 'react';
import { Form, Button, Input, Select, InputNumber } from 'antd';
import { filterPanelProps } from '../../interfaces';

const Option = Select.Option;

const CityFilterPanel= ({
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
                            <Form.Item label='城市名称'>
                                {
                                    getFieldDecorator('cityName')(
                                        <Input />
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='经度' className='input-number'>
                                {
                                    getFieldDecorator('longitude')(
                                        <InputNumber />
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='纬度' className='input-number'>
                                {
                                    getFieldDecorator('consignee_name')(
                                        <InputNumber />
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

export default Form.create<filterPanelProps>()(CityFilterPanel);