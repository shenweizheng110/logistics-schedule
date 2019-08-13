import * as React from 'react';
import { Button, Spin } from 'antd';
import VehicleUsageRate from './scheduleCenter/VehicleUsageRate';
import VehicleNoloadRate from './scheduleCenter/VehicleNoloadRate';
import CostRate from './scheduleCenter/CostRate';
import UndisposedOrderCount from './scheduleCenter/UndisposedOrderCount';
import CurrentScheduleContainer from '../../containers/scheduleContainer/scheduleCenter/currentScheduleContainer';
import ScheduleDetailModalContainer from '../../containers/scheduleContainer/scheduleCenter/scheduleDetailModalContainer';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useEffect } from 'react';

interface ScheduleCenterProps extends RouteComponentProps {
    pageLoading: {
        isShowPageLoading: boolean,
        loadingTip: string
    },
    scheduleIntro: any,
    toScheduleManual: () => void,
    autoSchedule: () => void,
    getScheduleIntro: () => void,
}

const ScheduleCenter = ({
    pageLoading,
    scheduleIntro,
    toScheduleManual,
    autoSchedule,
    getScheduleIntro,
}: ScheduleCenterProps) => {
    useEffect(() => {
        getScheduleIntro();
    }, [])
    return (
        <Spin
            spinning={pageLoading.isShowPageLoading}
            tip={pageLoading.loadingTip}
        >
            <div className='page-header'>
                <div className='page-title'>调度中心</div>
                <div className='page-header-base-button'>
                    <Button
                        className='left-button'
                        type='default'
                        onClick={() => toScheduleManual()}
                    >
                        手动调度
                    </Button>
                    <Button
                        className='left-button'
                        type='primary'
                        onClick={() => autoSchedule()}
                    >
                        一键调度
                    </Button>
                </div>
            </div>
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='schedule-detail'>
                        <VehicleUsageRate vehicleUsageRate={scheduleIntro.vehicleUsedRate} />
                        <VehicleNoloadRate noLoadRate={scheduleIntro.notLoadRate / 10} />
                        <CostRate costRate={scheduleIntro.costRate} />
                        <UndisposedOrderCount undisposedOrderCount={scheduleIntro.undisposedOrderCount} />
                    </div>
                    <div className='current-schedule'>
                        <CurrentScheduleContainer />
                    </div>
                </div>
            </div>
            <ScheduleDetailModalContainer />
        </Spin>
    )
}

const scheduleCenterWrapper = withRouter(ScheduleCenter);

export default scheduleCenterWrapper;