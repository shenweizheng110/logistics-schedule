type initialStateType = {
    isUnflod: boolean,
    filterData: any,
    isShowModal: boolean,
    modalData: any
}

const initialState: initialStateType = {
    isUnflod: false,
    filterData: {},
    isShowModal: false,
    modalData: {}
}
export const isUnflod = (state = initialState.isUnflod, action: any) => {
    switch(action.type){
        case 'CHANGE_DROP_DOWN':
            return action.isUnflod;
        default:
            return state;
    }
}

//筛选数据
export const filterData = (state = initialState.filterData, action: any) => {
    switch(action.type){
        case 'SAVE_FILTER':
            return action.filterData;
        default:
            return state;
    }
}

// 展示弹窗
export const isShowModal = (state = initialState.isShowModal, action: any) => {
    switch(action.type){
        case 'SHOW_MODAL':
            return action.isShowModal;
        default:
            return state;
    }
}

// 弹窗数据初始化
export const modalData = (state = initialState.modalData, action: any) => {
    switch(action.type){
        case 'SET_MODAL_DATA':
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