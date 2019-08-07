import * as React from 'react';
import { Chart, Axis, Coord, Geom, Guide, Shape } from 'bizcharts';

const { Html, Arc } = Guide;

function creatData() {
    const data = [];
    let val: any = Math.random() * 6;
    val = val.toFixed(1);
    data.push({ value: val * 1 });
    return data;
}

Shape.registerShape('point', 'pointer', {
    drawShape(cfg: any, group: any) {
        let point = cfg.points[0]; // 获取第一个标记点
        point = this.parsePoint(point);
        const center = this.parsePoint({ // 获取极坐标系下画布中心点
            x: 0,
            y: 0,
        });
        // 绘制指针
        group.addShape('line', {
            attrs: {
                x1: center.x,
                y1: center.y,
                x2: point.x,
                y2: point.y,
                stroke: cfg.color,
                lineWidth: 5,
                lineCap: 'round',
            },
        });
        return group.addShape('circle', {
            attrs: {
                x: center.x,
                y: center.y,
                r: 12,
                stroke: cfg.color,
                lineWidth: 4.5,
                fill: '#fff',
            },
        });
    },
});

const color = ['#0086FA', '#FFBF00', '#F5222D'];
const cols = {
    value: {
        min: 0,
        max: 6,
        tickInterval: 1,
        nice: false,
    },
};

const VehicleNoloadRate = () => {
    const lineWidth: number = 15,
        data: any = creatData();
    const val = data[0].value;
    return (
        <div className='card schedule-center-detail-item'>
            <div className='usage-rate-title'>车辆空载率</div>
            <div className='usage-rate-body'>
                <Chart
                    height={400}
                    data={data}
                    scale={cols}
                    padding={[0, 0, 210, 0]}
                    forceFit
                    >
                    <Coord type="polar" startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.75} />
                    <Axis
                        name="value"
                        zIndex={2}
                        line={null}
                        label={{
                            offset: -20,
                            textStyle: {
                                fontSize: 13,
                                fill: '#CBCBCB',
                                textAlign: 'center',
                                textBaseline: 'middle',
                            },
                        }}
                        tickLine={{
                            length: -24,
                            stroke: '#fff',
                            strokeOpacity: 1,
                        }}
                    />
                    <Axis name="1" visible={false} />
                    <Guide>
                        <Arc
                            // zIndex={0}
                            start={[0, 0.965]}
                            end={[6, 0.965]}
                            style={{ // 底灰色
                                stroke: 'rgba(0, 0, 0, 0.09)',
                                lineWidth,
                            }}
                        />
                        {val >= 2 && <Arc
                            // zIndex={1}
                            start={[0, 0.965]}
                            end={[val, 0.965]}
                            style={{ // 底灰色
                                stroke: color[0],
                                lineWidth,
                            }}
                        />}
                        { val >= 4 &&
                        <Arc
                            // zIndex={1}
                            start={[2, 0.965]}
                            end={[4, 0.965]}
                            style={{ // 底灰色
                                stroke: color[1],
                                lineWidth,
                            }}
                        />}
                        { val >= 4 && val < 6 &&
                        <Arc
                            // zIndex={1}
                            start={[4, 0.965]}
                            end={[val, 0.965]}
                            style={{ // 底灰色
                                stroke: color[2],
                                lineWidth,
                            }}
                        />}
                        { val >= 2 && val < 4 &&
                        <Arc
                            // zIndex={1}
                            start={[2, 0.965]}
                            end={[val, 0.965]}
                            style={{ // 底灰色
                                stroke: color[1],
                                lineWidth,
                            }}
                        />}
                        { val < 2 &&
                            <Arc
                                // zIndex={1}
                                start={[0, 0.965]}
                                end={[val, 0.965]}
                                style={{ // 底灰色
                                    stroke: color[0],
                                    lineWidth,
                                }}
                            />
                        }
                        <Html
                            position={['50%', '95%']}
                            html={
                                `<div style="width: 300px;text-align: center;font-size: 12px!important;">
                                    <p style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">空载率</p>
                                    <p style="font-size: 16px;color: rgba(0,0,0,0.85);margin: 0;">${val * 10}%</p>
                                </div>`
                            }
                        />
                    </Guide>
                    <Geom
                        type="point"
                        position="value*1"
                        shape="pointer"
                        color="#1890FF"
                        active={false}
                        style={{ stroke: '#fff', lineWidth: 1 }}
                    />
                </Chart>
            </div>
        </div>
    )
}

export default VehicleNoloadRate;