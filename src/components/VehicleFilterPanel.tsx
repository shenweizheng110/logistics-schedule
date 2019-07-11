import * as React from 'react';
import { Form, Button, Input, Select } from 'antd';
import { filterPanelProps } from '../interfaces';

const Option = Select.Option;

const VehicleFilterPanel = ({
    form,
    handleFilterSubmit,
    handleResetFilter
}: filterPanelProps) => {
    const { getFieldDecorator } = form;

    return (
        <div className='filter-panel'>
            <Form layout='inline'>
                <Form.Item label='车牌号'>
                    {
                        getFieldDecorator('vehicleLicense')(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label='车牌类型' className='select'>
                    {
                        getFieldDecorator('vehicleType')(
                            <Select>
                                <Option value='van'>厢式货车</Option>
                                <Option value='torTruck'>小型货车</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='车辆状态' className='select'>
                    {
                        getFieldDecorator('status')(
                            <Select>
                                <Option value='unused'>未使用</Option>
                                <Option value='maintain'>维修</Option>
                                <Option value='scrap'>报废</Option>
                                <Option value='out'>外出</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='车辆载重' className='select'>
                    {
                        getFieldDecorator('maxLoad')(
                            <Select>
                                <Option value='0-10'>10kg及以下</Option>
                                <Option value='11-50'>11kg~50kg</Option>
                                <Option value='51-100'>51kg~100kg</Option>
                                <Option value='100-~'>100kg及以上</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='车辆体积' className='select'>
                    {
                        getFieldDecorator('maxVolume')(
                            <Select>
                                <Option value='0-10'>10m3及以下</Option>
                                <Option value='11-50'>11m3~50m3</Option>
                                <Option value='51-100'>51m3~100m3</Option>
                                <Option value='100-~'>100km3及以上</Option>
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
    )
}

export default Form.create<filterPanelProps>()(VehicleFilterPanel);