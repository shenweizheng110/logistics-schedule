import * as React from 'react';
import { Chart, Tooltip, Geom, Guide } from 'bizcharts';

const { Text } = Guide;
const data = [{
    gender: 'male',
    value: 50,
}];
const scale = {
    value: {
        min: 0,
        max: 100,
    },
};

const VehicleUsageRate = () => {
    return (
        <div className='card schedule-center-detail-item'>
            <div className='usage-rate-title'>车辆使用率</div>
            <div className='usage-rate-body'>
                <Chart
                    height={230}
                    data={data}
                    scale={scale}
                    forceFit
                    padding='auto'
                >
                    <Geom
                        type="interval"
                        position="gender*value"
                        color="gender"
                        shape="liquid-fill-gauge"
                        style={{
                            lineWidth: 10,
                            opacity: 0.75,
                        }}
                    />
                    <Guide>
                    {
                        data.map(row => (
                            <Text
                                content={`${row.value}%`}
                                top
                                position={{
                                    gender: row.gender,
                                    value: 60,
                                }}
                                style={{
                                    opacity: 0.75,
                                    fontSize: 20,
                                    textAlign: 'center',
                                }}
                            />
                        ))
                    }
                    </Guide>
                </Chart>
            </div>
        </div>
    )
}

export default VehicleUsageRate;