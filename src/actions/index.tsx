import * as types from '../constants/ActionTypes';
import axios from '../common/request';
import { deleteAction, openEditModalAction, recordLog } from './commonAction';
import { getCityListApi, deleteCityApi, getCityApi } from '../api';
import { Modal } from 'antd';

// 修改筛选面板的开关
export const changeDropDown = (isUnflod: boolean) => ({
    type: types.CHANGE_DROP_DOWN,
    isUnflod
})

// 保存筛选数据
export const saveFilter = (filterData: any) => ({
    type: types.SAVE_FILTER,
    filterData
})

type tableBaseData = {
    page: number,
    pageSize: number,
    total: number,
    dataSource: any,
}

// 下一页或筛选操作
export const changeOrFilter = ({page,pageSize,total,dataSource}: tableBaseData) => ({
    type: types.CHANGE_OR_FILTER,
    page,
    pageSize,
    total,
    dataSource,
})

// 修改表格loading
export const changeTableLoading = (isLoading: boolean) => ({
    type: types.CHANGE_TABLE_LOADING,
    isLoading
});

// 展示错误信息
export const showMsg = (msgInfo: any) => ({
    type: types.SHOW_MSG,
    msgInfo
})

// 展示弹窗
export const showModal = (isShowModal: boolean) => ({
    type: types.SHOW_MODAL,
    isShowModal
})

// 弹窗初始化
export const setModalData = (modalData: any) => ({
    type: types.SET_MODAL_DATA,
    modalData
})

// 展示订单详情弹窗
export const showDetailModal = (isShowDetailModal: any) => ({
    type: types.SHOW_DETAIL_MODAL,
    isShowDetailModal
})

// 获取城市距离
export const getAllCity = (citys: any) => ({
    type: types.GET_ALL_CITY,
    citys
})

// 获取城市列表
const setCityList = (cityList: any) => ({
    type: types.GET_CITY_LIST,
    cityList
})

// 获取城市距离
export const getCityList = () => {
    return (dispatch: any) => {
        axios.get('/api/city/all')
            .then((res: any) => {
                if(res.data.code === 0){
                    dispatch(setCityList(res.data.data));
                }else{
                    dispatch({
                        type: 'error',
                        msg: res.data.msg
                    })
                }
            })
            .catch((error: any) => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }))
            })
    }
}

// 获取所有的城市点距离
export const getCityDistance = () => {
    return (dispatch: any) => {
        axios.get('/api/city/distance')
        .then(res => {
            if(res.data.code === 0){
                dispatch(getAllCity({
                    nodes: [],
                    links: []
                }));
                dispatch(getAllCity(res.data.data));
            }else{
                dispatch({
                    type: 'error',
                    msg: res.data.msg
                })
            }
        })
        .catch(error => {
            dispatch(showMsg({
                    type: 'error',
                    msg: error
                }))
        })
    }
}

// 清空页面数据
export const clearData = () => ({
    type: types.CLEAR_DATA,
    isUnflod: false,
    modalData: {},
    filterData: {},
    isShowModal: false,
    isShowDetailModal: false,
    isLoading: false,
    page: 1,
    pageSize: 10,
    total: 0,
    isCityDistanceUnflod: false
})

// 检查城市状态
export const checkCityStatus = (cityId: number, type: string) => {
    return (dispatch: any) => {
        return axios.get('/api/city/checkCityStatus',{
            params: {
                cityId
            }
        }).then((res: any) => {
            if(res.data.code === 0){
                if(res.data.data === 0){
                    if(type === 'edit')
                        dispatch(openEditModalAction(getCityApi ,cityId));
                    else
                        dispatch(deleteAction(deleteCityApi ,cityId, getCityListApi, 'city'));
                }else{
                    dispatch(showMsg({
                        type: 'warn',
                        msg: '城市点使用中，不可操作'
                    }))
                }
            }else{
                dispatch(showMsg({
                    type: 'error',
                    msg: res.data.msg
                }))
            }
        }).catch((error: any) => {
            dispatch(showMsg({
                type: 'error',
                    msg: error
            }))
        })
    }
}

// 城市距离筛选面板确认
export const handleCityDistanceFilter = (startCityName: string, targetCityName: string) => {
    return (dispatch: any) => {
        axios.get('/api/city/distance',{
            params: {
                startCityName,
                targetCityName
            }
        }).then((res: any) => {
            if(res.data.code === 0){
                dispatch(getAllCity({
                    nodes: [],
                    links: []
                }));
                dispatch(getAllCity(res.data.data));
            }else{
                dispatch(showMsg({
                    type: 'error',
                    msg: res.data.msg
                }))
            }
        }).catch((error: any) => {
            dispatch(showMsg({
                type: 'error',
                    msg: error
            }))
        })
    }
}

// 修改手动调度中的步骤条的当前步骤
export const changeCurrentStep = (current: number) => ({
    type: types.CHANGE_CURRENT_STEP,
    current
})

// 修改车辆表格的 selectedRowKeys
export const changeVehicleSelected = (vehicleSelected: any) => ({
    type: types.CHANGE_VEHICLE_SELECTED,
    vehicleSelected
})

// 展示分配订单的弹窗
export const showAllocatOrderModal = (isShowAllocatOrderModal: boolean) => ({
    type: types.SHOW_ALLOCAT_ORDER_MODAL,
    isShowAllocatOrderModal
})

// 展示分配路线的弹窗
export const showAllocatRouteModal = (isShowAllocatRouteModal: boolean) => ({
    type: types.SHOW_ALLOCAT_ROUTE_MODAL,
    isShowAllocatRouteModal
})

const setOrderTargetKeys = (orderTargetKeys: any) => ({
    type: types.SET_ORDER_TARGET_KEYS,
    orderTargetKeys
})

// 设置分配订单穿梭框的 targetKeys
export const setOrderTargetKeysAsync = (nextTargetKeys: any) => {
    return async (dispatch: any, getState: any) => {
        let currentAllocatVehicle = getState().currentAllocatVehicle;
        let orderTargetKeys = getState().orderTargetKeys;
        orderTargetKeys[currentAllocatVehicle] = nextTargetKeys;
        await dispatch(setOrderTargetKeys(orderTargetKeys));
    }
}

// 设置订单
const setOrders = (orders: any) => ({
    type: types.SET_ORDERS,
    orders
})

// 异步请求获取订单数据
export const getUndisposedOrdes = () => {
    return (dispatch: any) => {
        axios.get('/api/order/undisposed')
            .then((res: any) => {
                if(res.data.code === 0){
                    dispatch(setOrders(res.data.data));
                }else{
                    dispatch(showMsg({
                        type: 'error',
                        msg: res.data.msg
                    }))
                }
            })
            .catch((error: any) => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }))
            })
    }
}

// 设置当前分配的车辆
export const setCurrentAllocatVehicle = (vehicleLicense: string) => ({
    type: types.CURRENT_ALLOCAT_VEHICLE,
    vehicleLicense
})

// 分配订单弹窗的确认
export const allocatOrderSubmit = (nextTargetKeys: any) => {
    return async (dispatch: any, getState: any) => {
        let vehicleSelectedRows = getState().vehicleSelected.selectedRows,
            currentAllocatVehicle = getState().currentAllocatVehicle,
            orderListJson = getState().orderListJson,
            load: number = 0,
            volume: number = 0,
            midwayCitys: any = [],
            errors: any = [];
        nextTargetKeys.forEach((item: any) => {
            load += orderListJson[item].orderLoad;
            volume += orderListJson[item].orderVolume;
            midwayCitys = midwayCitys.concat({
                key: orderListJson[item].startCityId,
                label: orderListJson[item].startCityName
            },{
                key: orderListJson[item].targetCityId,
                label: orderListJson[item].targetCityName
            })
        })
        vehicleSelectedRows.some((item: any) => {
            if(item.vehicleLicense === currentAllocatVehicle){
                item.currentLoad = load;
                item.currentVolume = volume;
                item.midwayCitys = item.originMidwayCitys.concat(midwayCitys);
                if(load > item.maxLoad || volume > item.maxVolume){
                    errors.push(`车辆${item.vehicleLicense} 超出装载量`);
                }
                return true;
            }
        });
        if(errors.length > 0){
            dispatch(showMsg({
                type: 'error',
                msg: errors
            }));
        }else{
            let orderTargetKeys = getState().orderTargetKeys;
            orderTargetKeys[currentAllocatVehicle] = nextTargetKeys;
            dispatch(setOrderTargetKeys(orderTargetKeys));
            dispatch(changeVehicleSelected({
                selectedRowKeys: getState().vehicleSelected.selectedRowKeys,
                selectedRows: vehicleSelectedRows
            }));
            dispatch(showAllocatOrderModal(false));
        }
    }
}

// 当前初始化选中的订单
export const currentTargetKeys = (currentTargetKeys: any) => ({
    type: types.CURRENT_TARGET_KEYS,
    currentTargetKeys
})

// 当前初始化路线
export const setCurrentVehicleRoute = (currentVehicleRoute: any) => ({
    type: types.CURRENT_VEHICLE_ROUTE,
    currentVehicleRoute
})

// 设置车辆路线
export const setVehicleRoute = (vehicleRoute: any) => ({
    type: types.SET_VEHICLE_ROUTE,
    vehicleRoute
})

// 处理分配弹窗的弹出
export const showAllocatModal = (type: string, vehicleLicense: string) => {
    return async (dispatch: any, getState: any) => {
        dispatch(setCurrentAllocatVehicle(vehicleLicense));
        if(type === 'order'){
            let targetKeys = getState().orderTargetKeys[vehicleLicense];
            targetKeys = targetKeys ? targetKeys : [];
            dispatch(currentTargetKeys(targetKeys));
            dispatch(showAllocatOrderModal(true))
        }else{
            let currentVehicleRoute = getState().vehicleRoute[vehicleLicense];
            currentVehicleRoute = currentVehicleRoute ? currentVehicleRoute : [];
            dispatch(setCurrentVehicleRoute(currentVehicleRoute));
            dispatch(showAllocatRouteModal(true));
        }
    }
}

// 处理分配路线弹窗的确认
export const handleAllocatRouteModalSubmit = (currentVehicleRoute: any) => {
    return (dispatch: any, getState: any) => {
        let { currentAllocatVehicle, vehicleRoute } = getState();
        vehicleRoute[currentAllocatVehicle] = currentVehicleRoute;
        dispatch(setVehicleRoute(vehicleRoute));
        dispatch(showAllocatRouteModal(false))
    }
}

// 页面loading
export const showPageLoading = (pageLoading: {
    isShowPageLoading: boolean,
    loadingTip: string
}) => ({
    type: types.SHOW_PAGE_LOADING,
    pageLoading
})

// 设置调度图标数据
export const setScheduleIntro = (scheduleIntro: any) =>({
    type: types.SET_SCHEDULE_INTRO,
    scheduleIntro
})

// 异步获取调度图标数据
export const getScheduleIntro = () => {
    return (dispatch: any) => {
        axios.get('/api/schedule/detail')
            .then((res: any) => {
                if(res.data.code === 0){
                    dispatch(setScheduleIntro(res.data.data))
                }else{
                    dispatch(showMsg({
                        type: 'error',
                        msg: res.data.msg
                    }))
                }
            })
            .catch((error: any) => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }))
            })
    }
}

// 自动调度
export const autoSchedule = () => {
    return (dispatch: any) => {
        let ws = new WebSocket('ws://localhost:3000/autoSchedule');
        ws.onmessage = (e) => {
            let res: any = JSON.parse(e.data);
            if(res.code === 2){
                dispatch(showMsg({
                    type: 'success',
                    msg: '调度成功'
                }));
                dispatch(recordLog({
                    type: 'schedule',
                    content: '完成一次自动调度'
                }))
                dispatch(getCurrentScheduleAsync());
                dispatch(showPageLoading({
                    isShowPageLoading: false,
                    loadingTip: 'loading'
                }));
                ws.close();
            }else if(res.code === 0){
                dispatch(showPageLoading({
                    isShowPageLoading: true,
                    loadingTip: res.msg
                }))
            }else{
                dispatch(showMsg({
                    type: 'error',
                    msg: res.msg
                }))
            }
        }
        ws.onopen = () => {
            console.log('已连接');
        }
        ws.onclose = () => {
            console.log('已关闭');
        }
        ws.onerror = (error: any) => {
            console.log(error);
        }
    }
}

// 当前调度详情
const getCurrentSchedule = (currentSchedule: any) => ({
    type: types.GET_CURRENT_SCHEDULE,
    currentSchedule
})

// 异步请求获取当前调度详情
export const getCurrentScheduleAsync = () => {
    return (dispatch: any) => {
        axios.get('/api/schedule/current')
            .then((res: any) => {
                if(res.data.code === 0){
                    dispatch(getCurrentSchedule(res.data.data));
                }else{
                    dispatch(showMsg({
                        type: 'success',
                        msg: res.data.msg
                    }))
                }
            })
            .catch((error: any) => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }))
            })
    }
}

// 存储所有的车辆
const setAllVehicle = (vehicleList: any) => ({
    type: types.SET_ALL_VEHICLE,
    vehicleList
})

// 异步获取所有的车辆
export const getAllVehicle = () => {
    return (dispatch: any) => {
        axios.get('/api/vehicle/all')
            .then((res: any) => {
                if(res.data.code === 0){
                    dispatch(setAllVehicle(res.data.data));
                }else{
                    dispatch(showMsg({
                        type: 'error',
                        msg: res.data.msg
                    }))
                }
            })
            .catch((error: any) => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }))
            })
    }
}

// 展示调度详情弹窗
export const showScheduleDetailModal = (isShowScheduleDetailModal: boolean) => ({
    type: types.SHOW_SCHEDULE_DETAIL_MODAL,
    isShowScheduleDetailModal
})

// 调度详细信息
export const scheduleDetail = (scheduleDetail: any) => ({
    type: types.SCHEDULE_DETAIL,
    scheduleDetail
})

// 获取车辆调度详情
export const getVehicleSchedule = (vehicleId: number) => {
    return (dispatch: any) => {
        axios.get(`/api/schedule/vehicleSchedule/${vehicleId}`)
            .then((res: any) => {
                if(res.data.code === 0){
                    dispatch(scheduleDetail(res.data.data));
                    dispatch(showScheduleDetailModal(true));
                }else{
                    dispatch(showMsg({
                        type: 'error',
                        msg: res.data.msg
                    }))
                }
            })
            .catch((error: any) => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }))
            })
    }
}

// 当前手动调度结果
const setCurrentManualSchedule = (currentManualSchedule: any) => ({
    type: types.CURRENT_MANUAL_SCHEDULE,
    currentManualSchedule
})

// 获取当前手动调度的各个成本
export const getManualScheduleCost = () => {
    return (dispatch: any, getState: any) => {
        let vehicleUsedList = getState().vehicleSelected.selectedRows;
        let { orderTargetKeys, vehicleRoute, orderListJson } = getState();
        let combineResult: any = [];
        vehicleUsedList.forEach((vehicleItem: any) => {
            let combineItem: any = {
                vehicleId: vehicleItem.id,
                orderIds: vehicleItem.originOrderIds,
                shortPath: [vehicleItem.currentCityId]
            };
            // 组合订单
            if(orderTargetKeys[vehicleItem.vehicleLicense]){
                let newOrderIds: number[] = [];
                orderTargetKeys[vehicleItem.vehicleLicense].forEach((orderItem: any) => {
                    newOrderIds.push(orderListJson[orderItem].orderId);
                });
                combineItem.orderIds = combineItem.orderIds.concat(newOrderIds);
            }
            // 组合路径
            vehicleRoute[vehicleItem.vehicleLicense] && vehicleRoute[vehicleItem.vehicleLicense].forEach((cityItem: any) => {
                combineItem.shortPath.push(cityItem.key);
            });
            combineItem.shortPath.push(vehicleItem.finishCityId);
            combineResult.push(combineItem);
        });
        axios.post('/api/schedule/manual/cost',{
            combineResult: JSON.stringify(combineResult)
        }).then((res: any) => {
            if(res.data.code === 0){
                // console.log(res.data.data);
                dispatch(setCurrentManualSchedule(res.data.data[0]));
            }else{
                dispatch(showMsg({
                    type: 'error',
                    msg: res.data.msg
                }))
            }
        }).catch((error: any) => {
            console.log(error);
            dispatch(showMsg({
                type: 'error',
                msg: error
            }))
        })
    }
}

// 手动调度的确认
export const submitManualSchedule = (history: any) => {
    return (dispatch: any, getState: any) => {
        axios.post('/api/schedule/manual',{
            minCostPlan: JSON.stringify(getState().currentManualSchedule)
        }).then((res: any) => {
            if(res.data.code === 0){
                dispatch(recordLog({
                    type: 'schedule',
                    content: '执行了一次手动调度'
                }))
                Modal.success({
                    title: '调度结果',
                    content: res.data.msg,
                    onOk: () => {history.push('/console/schedule/center')}
                })
            }else{
                dispatch(showMsg({
                    type: 'error',
                    msg: res.data.msg
                }));
            }
        }).catch((error: any) => {
            dispatch(showMsg({
                type: 'error',
                msg: error
            }));
        })
    }
}
