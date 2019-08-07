import * as React from 'react';
import { Button } from 'antd';
import VehicleUsageRate from './scheduleCenter/VehicleUsageRate';
import VehicleNoloadRate from './scheduleCenter/VehicleNoloadRate';
import CostRate from './scheduleCenter/CostRate';
import UndisposedOrderCount from './scheduleCenter/UndisposedOrderCount';
import CurrentSchedule from './scheduleCenter/CurrentSchedule';
import ScheduleDetailModal from './scheduleCenter/ScheduleDetailModal';

const ScheduleCenter = () => {
    return (
        <>
            <div className='page-header'>
                <div className='page-title'>调度中心</div>
                <div className='page-header-base-button'>
                    <Button className='left-button' type='default'>手动调度</Button>
                    <Button className='left-button' type='primary'>一键调度</Button>
                    <Button className='left-button' type='primary'>调度配置</Button>
                </div>
            </div>
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='schedule-detail'>
                        <VehicleUsageRate />
                        <VehicleNoloadRate />
                        <CostRate />
                        <UndisposedOrderCount />
                    </div>
                    <div className='current-schedule'>
                        <CurrentSchedule />
                    </div>
                </div>
            </div>
            <ScheduleDetailModal
                isShowModal={false}
                routes={['苏州','江宁','六合','盐城','射阳','常州']}
                orders={[{
                    number: '201908021045123',
                    orderLoad: 40 ,
                    orderVolume: 4,
                    startCityName: '南京',
                    targetCityName: '常州',
                }]}
                drivers={['张三','李四']}
            />
        </>
    )
}

export default ScheduleCenter;