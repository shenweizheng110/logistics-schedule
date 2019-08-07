import * as React from 'react';
import { Steps } from 'antd';
import { useState } from 'react';
import VehicleChoose from './ScheduleManual/VehicleChoose';
import AllocatOrderRoute from './ScheduleManual/AllocatOrderRoute';
import ScheduleManualDetail from './ScheduleManual/ScheduleManualDetail';

const { Step } = Steps;
const pageChange = (page: number, pageSize: number) => {

}
const stepList = [{
    title: '选择车辆',
    content: <VehicleChoose
        isLoading={false}
        page={1}
        total={1}
        pageSize={10}
        dataSource={[{
            vehicleLicense: 'asdasda',
            maxLoad: 100,
            maxVolume: 12,
            baseSpeed: 20,
            vehicleType: 'van',
            status: 'unused'
        }]}
        handleChange={pageChange}
    />
},{
    title: '分配订单',
    content: <AllocatOrderRoute
        isLoading={false}
        page={1}
        total={1}
        pageSize={10}
        dataSource={[{
            vehicleLicense: 'asdasda',
            currentLoad: 1,
            maxLoad: 100,
            currentVolume: 2,
            maxVolume: 12,
            midwayCityNames: []
        }]}
        handleChange={pageChange}
        current={1}
    />
},{
    title: '分配路线',
    content: <AllocatOrderRoute
        isLoading={false}
        page={1}
        total={1}
        pageSize={10}
        dataSource={[{
            vehicleLicense: 'asdasda',
            currentLoad: 1,
            maxLoad: 100,
            currentVolume: 2,
            maxVolume: 12,
            midwayCityNames: []
        }]}
        handleChange={pageChange}
        current={2}
    />
},{
    title: '调度详情',
    content: <ScheduleManualDetail />
}]

const ScheduleManual = () => {
    const [current, setCurrent] = useState(3);
    return (
        <>
            <div className='page-header'>
                <div className='page-title'>手动调度</div>
            </div>
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='schedule-manual-steps'>
                                <Steps current={current}>
                                    {
                                        stepList.map(item => (
                                            <Step key={item.title} title={item.title} />
                                        ))
                                    }
                                </Steps>
                                <div className="steps-content">
                                    {
                                        stepList[current].content
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScheduleManual;