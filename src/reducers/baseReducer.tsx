type initialStateType = {
    isUnflod: boolean,
    filterData: any,
    isShowModal: boolean,
    isShowDetailModal: boolean,
    modalData: any
}

const initialState: initialStateType = {
    isUnflod: false,
    filterData: {},
    isShowModal: false,
    isShowDetailModal: false,
    modalData: {}
}

// 筛选面板状态
export const isUnflod = (state = initialState.isUnflod, action: any) => {
    switch(action.type){
        case 'CHANGE_DROP_DOWN':
        case 'CLEAR_DATA':
            return action.isUnflod;
        default:
            return state;
    }
}

//筛选数据
export const filterData = (state = initialState.filterData, action: any) => {
    switch(action.type){
        case 'SAVE_FILTER':
        case 'CLEAR_DATA':
            return action.filterData;
        default:
            return state;
    }
}

// 展示弹窗
export const isShowModal = (state = initialState.isShowModal, action: any) => {
    switch(action.type){
        case 'SHOW_MODAL':
        case 'CLEAR_DATA':
            return action.isShowModal;
        default:
            return state;
    }
}

// 弹窗数据初始化
export const modalData = (state = initialState.modalData, action: any) => {
    switch(action.type){
        case 'SET_MODAL_DATA':
        case 'CLEAR_DATA':
            return action.modalData;
        default:
            return state;
    }
}

// 提示信息
export const msgInfo = (state: any = {type: null, msg: null}, action: any) => {
    switch(action.type){
        case 'SHOW_MSG':
            return {
                ...state,
                type: action.msgInfo.type,
                msg: action.msgInfo.msg
            };
        default:
            return state;
    }
}

// 城市距离
export const citys = (state: any = {nodes: [], links: []}, action: any) => {
    switch(action.type){
        case 'GET_ALL_CITY':
            return {
                ...state,
                ...action.citys
            }
        default:
            return state;
    }
}

// 城市列表
export const cityList = (state: any = [], action: any) => {
    switch(action.type){
        case 'GET_CITY_LIST':
            return action.cityList
        default:
            return state;
    }
}

// 打开详情弹窗
export const isShowDetailModal = (state = initialState.isShowDetailModal, action: any) => {
    switch(action.type){
        case 'SHOW_DETAIL_MODAL':
            return action.isShowDetailModal;
        default:
            return state;
    }
}

// 城市点是否在使用中
export const isCityUsing = (state: boolean = false, action: any) => {
    switch(action.type){
        case 'IS_CITY_USING':
            return action.isCityUsing;
        default:
            return state;
    }
}

// 手动调度中步骤条的当前步骤
export const currentStep = (state: number = 0, action: any) => {
    switch(action.type){
        case 'CHANGE_CURRENT_STEP':
            return action.current;
        default:
            return state;
    }
}

// 车辆表格的 selectedRowKeys
export const vehicleSelected = (state: any = {
    selectedRowKeys: [],
    selectedRows: []
}, action: any) => {
    switch(action.type){
        case 'CHANGE_VEHICLE_SELECTED':
            return {
                selectedRowKeys: [...(action.vehicleSelected.selectedRowKeys)],
                selectedRows: [...(action.vehicleSelected.selectedRows)]
            }
        default:
            return state;
    }
}

// 展示分配订单弹窗
export const isShowAllocatOrderModal = (state: boolean = false, action: any) => {
    switch(action.type){
        case 'SHOW_ALLOCAT_ORDER_MODAL':
            return action.isShowAllocatOrderModal;
        default:
            return state
    }
}

// 展示分配路线弹窗
export const isShowAllocatRouteModal = (state: boolean = false, action: any) => {
    switch(action.type){
        case 'SHOW_ALLOCAT_ROUTE_MODAL':
            return action.isShowAllocatRouteModal;
        default:
            return state
    }
}

// 订单穿梭框的 targetKeys
export const orderTargetKeys = (state: any = {}, action: any) => {
    switch(action.type){
        case 'SET_ORDER_TARGET_KEYS':
            let orderTargetkeys = action.orderTargetKeys;
            Object.keys(orderTargetkeys).forEach((keyItem: any) => {
                state[keyItem] = orderTargetkeys[keyItem];
            })
            return state;
        default:
            return state;
    }
}

// 当前执行分配的车辆
export const currentAllocatVehicle = (state: string = null, action: any) => {
    switch(action.type){
        case 'CURRENT_ALLOCAT_VEHICLE':
            return action.vehicleLicense;
        default:
            return state;
    }
}

// 未处理订单列表
export const orderList = (state: any = [], action: any) => {
    switch(action.type){
        case 'SET_ORDERS':
            return action.orders;
        default:
            return state;
    }
}

// 为处理订单 json 格式
export const orderListJson = (state: any = {}, action: any) => {
    switch(action.type){
        case 'SET_ORDERS':
            let res: any = {};
            action.orders.forEach((item: any) => {
                res[item.number] = item;
            })
            return res;
        default:
            return state;
    }
}

// 当前选中的项
export const currentTargetKeys = (state: any = {}, action: any) => {
    switch(action.type){
        case 'CURRENT_TARGET_KEYS':
            return action.currentTargetKeys;
        default:
            return state;
    }
}

// 车辆路径
export const vehicleRoute = (state: any = {}, action: any) => {
    switch(action.type){
        case 'SET_VEHICLE_ROUTE':
            return action.vehicleRoute;
        default:
            return state;
    }
}

// 当前处理的路径
export const currentVehicleRoute = (state: any = [], action: any) => {
    switch(action.type){
        case 'CURRENT_VEHICLE_ROUTE':
            return action.currentVehicleRoute;
        default:
            return state;
    }
}

// 页面loading
export const pageLoading = (state: {
    isShowPageLoading: boolean,
    loadingTip: string
} = {
    isShowPageLoading: false,
    loadingTip: 'loading'
}, action: any) => {
    switch(action.type){
        case 'SHOW_PAGE_LOADING':
            return {
                ...state,
                ...(action.pageLoading)
            };
        default:
            return state;
    }
}

// 调度概览 图标数据
export const scheduleIntro = (state: any = {
    vehicleUsedRate: 0,
    notLoadRate: 0,
    costRate: {
        oilCost: 0,
        punishCost: 0,
        peopleCost: 0
    },
    undisposedOrderCount: 0
}, action: any) => {
    switch(action.type){
        case 'SET_SCHEDULE_INTRO':
            return action.scheduleIntro;
        default:
            return state;
    }
}

// 当前调度
export const currentSchedule = (state: any = [], action: any) => {
    switch(action.type){
        case 'GET_CURRENT_SCHEDULE':
            return action.currentSchedule;
        default:
            return state
    }
}

// 所有的车辆
export const vehicles = (state: any = [], action: any) => {
    switch(action.type){
        case 'SET_ALL_VEHICLE':
            return action.vehicleList;
        default:
            return state
    }
}

// 展示调度详情弹窗
export const isShowScheduleDetailModal = (state: boolean = false, action: any) => {
    switch(action.type){
        case 'SHOW_SCHEDULE_DETAIL_MODAL':
            return action.isShowScheduleDetailModal;
        default:
            return state;
    }
}

// 调度详细信息
export const scheduleDetail = (state: any = {
    drivers: [],
    routes: [],
    orders: []
}, action: any) => {
    switch(action.type){
        case 'SCHEDULE_DETAIL':
            return action.scheduleDetail;
        default:
            return state;
    }
}