import * as React from 'react';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";
import { Empty } from 'antd';

const DataSet = require("@antv/data-set");

type CostRateProps = {
    costRate: any
}

const CostRate = ({
    costRate
}: CostRateProps) => {
    const { DataView } = DataSet;
    const data = [{
        item: "油耗成本",
        count: costRate.oilCost
    },{
        item: "惩罚成本",
        count: costRate.punishCost
    },{
        item: "人工成本",
        count: costRate.peopleCost
    }];
    const dv = new DataView();
    dv.source(data).transform({
        type: "percent",
        field: "count",
        dimension: "item",
        as: "percent"
    });
    const cols = {
        percent: {
            formatter: (val: any) => {
                val = (val * 100).toFixed(1) + "%";
                return val;
            }
        }
    };
    return (
        <div className='card schedule-center-detail-item'>
            <div className='usage-rate-title'>成本占比</div>
            <div className='usage-rate-body'>
                {
                    costRate.oilCost === 0 && costRate.punishCost === 0 && costRate.peopleCost === 0
                    ?   <Empty />
                    :   <Chart
                            height={400}
                            data={dv}
                            scale={cols}
                            padding={[0,0,150,-100]}
                            forceFit
                        >
                            <Coord type="theta" radius={0.65} />
                            <Axis name="percent" />
                            <Legend
                                position="right"
                                offsetY={-400 / 2 + 120}
                                offsetX={-100}
                            />
                            <Tooltip
                                showTitle={false}
                                itemTpl='<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>'
                            />
                            <Geom
                                type="intervalStack"
                                position="percent"
                                color="item"
                                tooltip={[
                                    "item*percent",
                                    (item, percent) => {
                                        percent = (percent * 100).toFixed(1) + "%";
                                        return {
                                            name: item,
                                            value: percent
                                        };
                                    }
                                ]}
                                style={{
                                    lineWidth: 1,
                                    stroke: "#fff"
                                }}
                            >
                                {/* <Label
                                    content="item*percent"
                                    // offset={30}
                                    textStyle={{
                                        rotate: 0,
                                        textAlign: "center",
                                        shadowBlur: 2,
                                        shadowColor: "rgba(0, 0, 0, .45)"
                                    }}
                                /> */}
                            </Geom>
                        </Chart>
                }
            </div>
        </div>
    )
}

export default CostRate;