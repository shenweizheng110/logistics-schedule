import * as React from 'react';
import { Layout, Icon, Menu, Avatar, Dropdown } from 'antd';
import { Route, RouteComponentProps } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VehicleContainer from './vehicleContainer/VehicleContainer';
import OrderContainer from './orderContainer/OrderContainer';
import CityContainer from './cityContainer/CityContainer';
import DriverContainer from './driverContainer/DriverContainer';
import ScheduleCenterContainer from '../containers/scheduleContainer/ScheduleCenterContainer';
import ScheduleManualContainer from '../containers/scheduleContainer/ScheduleManualContainer';
import SystemLogContainer from '../containers/logContainer/LogContainer';
import User from '../components/user/User';

const { Header, Content, Sider } = Layout;

declare const QINIU: string;

interface AppProps extends RouteComponentProps {
    user: any,
    handleLogout: () => void,
    initUser: () => void
}

const App = (props: AppProps)=>{
    useEffect(() => {
        props.initUser();
    }, [])
    const [selectedKeys, setSelectedKeys] = useState([props.location.pathname]);
    const navigate = (e: any) => {
        props.history.push(`${e.key}`);
        setSelectedKeys(e.key)
    }
    const dropDownMenu = (
        <Menu>
            <Menu.Item key="personalInfo" onClick={() => props.history.push('/console/user')}>个人信息</Menu.Item>
            <Menu.Item key="logout" onClick={() => props.handleLogout()}>退出登陆</Menu.Item>
        </Menu>
    )
    return(
        <>
            <Layout style={{height: '100%'}}>
                <Header className="header">
                    <div className="logo">
                        <img src={QINIU + "logo.png"} alt="logo" />
                    </div>
                    <div className='header-right'>
                        {
                            props.user.id
                                ? <Dropdown
                                        overlay={dropDownMenu}
                                        overlayStyle={{top: '60px'}}
                                    >
                                        <span>
                                            <Avatar className='avatar' src={QINIU + 'head2.jpg'} size={50} alt='头像' />
                                            <Icon type="down" className='drop-down-icon' />
                                        </span>
                                    </Dropdown>
                                : <span
                                        style={{cursor: 'pointer'}}
                                        onClick={() => location.href='/login'}
                                    >
                                        登录
                                    </span>
                        }
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
                            <Menu.Item key="/console/city/list">
                                <Icon type="global" />城市点管理
                            </Menu.Item>
                            <Menu.Item key="/console/schedule/center">
                                <Icon type="robot" />调度中心
                            </Menu.Item>
                            <Menu.Item key="/console/driver">
                                <Icon type="contacts" />司机管理
                            </Menu.Item>
                            <Menu.Item key="/console/systemLog">
                                <Icon type="sound" />系统日志
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content className='content'>
                            <Route exact path='/console/user' component={User} />
                            <Route exact path='/console/vehicle' component={VehicleContainer} />
                            <Route exact path='/console/order' component={OrderContainer} />
                            <Route exact path='/console/city/:type' component={CityContainer} />
                            <Route exact path='/console/driver' component={DriverContainer} />
                            <Route exact path='/console/systemLog' component={SystemLogContainer} />
                            <Route exact path='/console/schedule/center' component={ScheduleCenterContainer} />
                            <Route exact path='/console/schedule/manual' component={ScheduleManualContainer} />
                            <div className='footer'></div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default App;