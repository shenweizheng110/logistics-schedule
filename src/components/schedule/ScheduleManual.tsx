import * as React from 'react';
import { Steps } from 'antd';
import VehicleChooseContainer from '../../containers/scheduleContainer/scheduleManual/VehicleChooseContainer';
import AllocatOrderRouteContainer from '../../containers/scheduleContainer/scheduleManual/AllocatOrderRouteContainer';
import ScheduleManualDetailContainer from '../../containers/scheduleContainer/scheduleManual/ScheduleManualDetailContainer';

const { Step } = Steps;
type ScheduleManualProps = {
    currentStep: number,
}

const ScheduleManual = ({
    currentStep
}: ScheduleManualProps) => {
    const stepList = [{
        title: '选择车辆',
        content: <VehicleChooseContainer />
    },{
        title: '分配订单',
        content: <AllocatOrderRouteContainer />
    },{
        title: '分配路线',
        content: <AllocatOrderRouteContainer />
    },{
        title: '调度详情',
        content: <ScheduleManualDetailContainer />
    }];
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
                                <Steps current={currentStep}>
                                    {
                                        stepList.map(item => (
                                            <Step key={item.title} title={item.title} />
                                        ))
                                    }
                                </Steps>
                                <div className="steps-content">
                                    {
                                        stepList[currentStep].content
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