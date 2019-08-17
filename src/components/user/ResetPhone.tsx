import * as React from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { useState } from 'react';

interface ResetPhoneProps {
    form: any,
    user: any,
    handleSubmit: (form: any) => void,
    handleGetCode: () => void
}

const ResetPhone = ({
    form,
    user,
    handleSubmit,
    handleGetCode
}: ResetPhoneProps) => {
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
    let [code, setCode] = useState(0);
    const getCode = () => {
        handleGetCode();
        setCode(60);
        let time: any = setInterval(() => {
            setCode((preState: number) => {
                preState--;
                if(preState === 0){
                    window.clearInterval(time);
                }
                return preState;
            });
        }, 1000);
    }
    return (
        <>
            <Form {...formItemLayout}>
                <Form.Item label="新手机号">
                    {
                        getFieldDecorator('phone',{
                            rules: [{
                                required: true, message: '新手机号不为空'
                            },{
                                pattern: /^1[3|4|5|7|8]\d{9}$/, message: '手机号格式错误'
                            }],
                            initialValue: user.newPhone
                        })(
                            <Input autoComplete='off' />
                        )
                    }
                </Form.Item>
                <Form.Item label="验证码">
                    <Row gutter={8}>
                        <Col span={12}>
                            {
                                getFieldDecorator('code', {
                                    rules: [{ required: true, message: '验证码不为空' }],
                                })(
                                    <Input />
                                )
                            }
                        </Col>
                        <Col span={12}>
                            {
                                code === 0 ? (
                                    <Button onClick={() => getCode()}>获取验证码</Button>
                                ) : (
                                    <Button disabled>{code}s</Button>
                                )
                            }
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type='primary' onClick={() => handleSubmit(form)}>提交</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Form.create<ResetPhoneProps>()(ResetPhone);