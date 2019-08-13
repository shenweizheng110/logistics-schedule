import * as React from 'react';
import { Table } from 'antd';
import { useEffect } from 'react';

type CurrentScheduleProps = {
    currentSchedule: any,
    getCurrentSchedule: () => void,
    openVehicleScheduleModal: (vehicleId: number) => void
}

const CurrentSchedule = ({
    currentSchedule,
    getCurrentSchedule,
    openVehicleScheduleModal
}: CurrentScheduleProps) => {
    useEffect(() => {
        getCurrentSchedule();
    }, []);

    const columns: any = [{
        title: '车牌号',
        key: 'vehicleLicense',
        dataIndex: 'vehicleLicense'
    },{
        title: '当前位置',
        key: 'currentCityName',
        dataIndex: 'currentCityName'
    },{
        title: '当前载重',
        key: 'currentLoad',
        dataIndex: 'currentLoad',
        render: (text: any) => (
            <span>
                { text ? text : 0 }
            </span>
        )
    },{
        title: '当前体积',
        key: 'currentVolume',
        dataIndex: 'currentVolume',
        render: (text: any) => (
            <span>
                { text ? text : 0 }
            </span>
        )
    },{
        title: '操作',
        key: 'action',
        dataIndex: 'action',
        render: (text: any, record: any, index: number) => (
            <span>
                <a href="javascript:;" onClick={() => openVehicleScheduleModal(record.vehicleId)}>详情</a>
            </span>
        )
    }];

    return (
        <div className='card'>
            <div className='usage-rate-title'>当前调度</div>
            <div className='card-body'>
                <Table
                    columns={columns}
                    dataSource={currentSchedule}
                />
            </div>
        </div>
    )
}

export default CurrentSchedule;