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