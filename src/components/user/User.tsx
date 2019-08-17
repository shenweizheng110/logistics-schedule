import * as React from 'react';
import { Tabs } from 'antd';
import BaseInfoContainer from '../../containers/userContainer/BaseInfoContainer';
import ResetPhoneContainer from '../../containers/userContainer/ResetPhoneContainer';
import ResetPasswordContainer from '../../containers/userContainer/ResetPasswordContainer';

const { TabPane } = Tabs;

const User = () => {
    return (
        <>
            <div className='page-header'>
                <div className='page-title'>个人信息</div>
            </div>
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='card'>
                        <div className='card-body'>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="基本信息" key="1">
                                    <BaseInfoContainer />
                                </TabPane>
                                <TabPane tab="重置手机号" key="2">
                                    <ResetPhoneContainer />
                                </TabPane>
                                <TabPane tab="重置密码" key="3">
                                    <ResetPasswordContainer />
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;