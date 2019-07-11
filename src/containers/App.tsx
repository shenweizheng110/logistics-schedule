import * as React from 'react';
import { Layout, Icon, Menu } from 'antd';
import { Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import VehicleContainer from './VehicleContainer';
import OrderContainer from '../containers/OrderContainer';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

declare const QINIU: string;

const App = (props: any)=>{
    const [selectedKeys, setSelectedKeys] = useState([props.location.pathname]);
    const navigate = (e: any) => {
        props.history.push(`${e.key}`);
        setSelectedKeys(e.key)
    }
    return(
        <>
            <Layout style={{height: '100%'}}>
                <Header className="header">
                    <div className="logo">
                        <img src={QINIU + "logo.png"} alt="logo" />
                    </div>
                </Header>
                <Layout>
                    <Sider className='sider' width={200}>
                        <Menu
                            mode="inline"
                            style={{ height: '100%', borderRight: 0 }}
                            selectedKeys={selectedKeys}
                            onClick={navigate}
                        >
                            <Menu.Item key="/console/vehicle">
                                <Icon type="car" />车辆管理
                            </Menu.Item>
                            <Menu.Item key="/console/order">
                                <Icon type="shopping-cart" />订单管理
                            </Menu.Item>
                            <Menu.Item key="/console/city">
                                <Icon type="global" />城市点管理
                            </Menu.Item>
                            <SubMenu
                                key="/console/scheduleCenter"
                                title={
                                    <span>
                                        <Icon type="robot" />调度中心
                                    </span>
                                }
                            >
                                <Menu.Item key="/console/scheduleCenter/autoSchedule">自动调度</Menu.Item>
                                <Menu.Item key="/console/scheduleCentermanualSchedule">手动调度</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="/console/driver">
                                <Icon type="contacts" />司机管理
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content className='content'>
                            <Route path='/console/vehicle' component={VehicleContainer} />
                            <Route path='/console/order' component={OrderContainer} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default App;