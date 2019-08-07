import * as React from 'react';
import { Form, Button, Input } from 'antd';
import { filterPanelProps } from '../../interfaces';

const CityDistanceFilterPanel= ({
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
                            <Form.Item label='起始城市'>
                                {
                                    getFieldDecorator('startCityName')(
                                        <Input />
                                    )
                                }
                            </Form.Item>
                            <Form.Item label='目的城市'>
                                {
                                    getFieldDecorator('targetCityName')(
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

export default Form.create<filterPanelProps>()(CityDistanceFilterPanel);