import * as React from 'react';
import { Form, Select, Input, InputNumber, Button } from 'antd';

interface BaseInfoProps {
    user: any
    form: any,
    handleSubmit: (form: any) => void;
}

const Option = Select.Option;

const BaseInfo = ({
    form,
    handleSubmit,
    user
}: BaseInfoProps) => {
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: {
            xs: { span: 12 },
            sm: { span: 4 },
        },
        wrapperCol: {
            xs: { span: 4 },
            sm: { span: 4 },
        },
    };
    const tailFormItemLayout = {
        labelCol: {
            xs: { span: 3 },
            sm: { span: 3 },
        },
        wrapperCol: {
            xs: {
                span: 3,
                offset: 3,
            },
        }
    };
    return (
        <>
            <Form {...formItemLayout}>
                <Form.Item label="用户名">
                    {
                        getFieldDecorator('username',{
                            rules: [{
                                required: true, message: '用户名不为空'
                            }],
                            initialValue: user.username
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="年龄">
                    {
                        getFieldDecorator('age',{
                            rules: [{
                                required: true, message: '年龄不为空'
                            }],
                            initialValue: user.age
                        })(
                            <InputNumber min={18} max={100} />
                        )
                    }
                </Form.Item>
                <Form.Item label="性别">
                    {
                        getFieldDecorator('gender',{
                            rules: [{
                                required: true, message: '性别不为空'
                            }],
                            initialValue: user.gender
                        })(
                            <Select>
                                <Option value='male'>女性</Option>
                                <Option value='female'>男性</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type='primary' onClick={() => handleSubmit(form)}>提交</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Form.create<BaseInfoProps>()(BaseInfo);