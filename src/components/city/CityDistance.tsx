import * as React from 'react';
import { useEffect } from 'react';
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

const DataSet = require('@antv/data-set');

type DistanceType = {
    citys: any,
    getAllCity: () => void
}

const CityDistance = ({ citys, getAllCity }: DistanceType) => {
    useEffect(() => {
        getAllCity()
    },[])
    const ds = new DataSet();
    const dv = citys.nodes.length !== 0 ? ds.createView().source(citys, {
        type: 'graph',
        nodes: (d: any) => d.nodes, // 节点集对应的字段
        edges: (d: any) => d.links // 边集对应的字段
    }) : null;
    if(dv){
        dv.transform({
            type: "diagram.arc",
            marginRatio: 0.5
        });
    }
    const handleTooltipChange = (ev: any) => {
        let items = ev.items;
        let origin = items[0];
        let originData = origin.point._origin;
        items.splice(0);
        let fields = [{
            title: '起始城市',
            key: 'sourceName'
        },{
            title: '目的城市',
            key: 'targetName'
        },{
            title: '距离',
            key: 'distance'
        }];
        if(originData.id === undefined){
            fields.map(item => {
                items.push({
                    name: item.title,
                    marker: true,
                    color: origin.color,
                    value: originData[item.key]
                })
            });
        }else{
            items.push({
                name: '城市',
                marker: true,
                color: origin.color,
                value: originData.name
            })
        }
    }
    return(
        <div
            className='city-map-container'
            style={{
                width: '1000px',
                margin: '0 auto'
            }}
        >
            {
                citys.nodes.length === 0 ? null : (
                    <Chart
                        data={citys.nodes.length === 0 ? null : citys}
                        forceFit={true}
                        height={600}
                        onTooltipChange={handleTooltipChange}
                        placeholder='城市点为空'
                    >
                        <Tooltip showTitle={false} />
                        <View data={dv.edges}>
                            <Geom
                                type='edge'
                                position='x*y'
                                shape='arc'
                                color='source'
                                opacity={0.5}
                            />
                        </View>
                        <View data={dv.nodes}>
                            <Geom
                                type='point'
                                position='x*y'
                                shape='circle'
                                size={10}
                                color='id'
                                opacity={0.5}
                                style={{
                                    stroke: 'grey'
                                }}
                            >
                                <Label
                                    content='name'
                                    offset={-15}
                                    textStyle={{
                                        textAlign: 'left',
                                        rotate: 90,
                                        fill: 'black'
                                    }}
                                />
                            </Geom>
                        </View>
                    </Chart>
                )
            }
        </div>
    )
}

export default CityDistance;