import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Form, Input, Button, Icon } from 'antd';

interface LoginProps extends RouteComponentProps {
    form: any,
    handleLogin: (form: any) => void
}

const Login = ({
    form,
    handleLogin
}: LoginProps) => {
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
        },
    };
    return (
        <>
            <div className='login'>
                <Form {...formItemLayout} className='login-form'>
                    <div className='title'>登录</div>
                    <span>手机号</span>
                    <Form.Item>
                        {
                            getFieldDecorator('phone',{
                                rules: [{
                                    required: true, message: '手机号不为空'
                                },{
                                    pattern: /^1(3|4|5|7|8|9)\d{9}$/, message: '手机号格式不正确'
                                }]
                            })(
                                <div className='input-out'>
                                    <Input autoComplete="off" placeholder='输入手机号' />
                                    <span className='input-cover'></span>
                                </div>
                            )
                        }
                    </Form.Item>
                    <span>密码</span>
                    <Form.Item>
                        {
                            getFieldDecorator('password',{
                                rules: [{
                                    required: true, message: '登录密码不为空'
                                }]
                            })(
                                <div className='input-out'>
                                    <Input type='password' autoComplete="off" placeholder='输入密码' />
                                    <span className='input-cover'></span>
                                </div>
                            )
                        }
                    </Form.Item>
                    <div className='login-button-wrapper'>
                        <div className='login-button-bg'></div>
                        <Button className='login-button' onClick={() => handleLogin(form)}>登录</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

const LoginWrapper = Form.create<LoginProps>()(Login);

export default withRouter(LoginWrapper);