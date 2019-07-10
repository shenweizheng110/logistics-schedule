type initialStateType = {
    isUnflod: boolean,
    isLoading: boolean,
    pagination: {
        page: number,
        total: number,
        dataSource: any,
        pageSize: number
    },
    filterData: any,
    isShowModal: boolean,
    modalData: any
}

const initialState: initialStateType = {
    isUnflod: false,
    isLoading: false,
    pagination: {
        page: 1,
        total: 0,
        dataSource: [],
        pageSize: 10,
    },
    filterData: {},
    isShowModal: false,
    modalData: {}
}

// 是否展示筛选面板
const isUnflod = (state = initialState.isUnflod, action: any) => {
    switch(action.type){
        case 'CHANGE_DROP_DOWN':
            return action.isUnflod;
        default:
            return state;
    }
}

// 表格loading
const isLoading = (state = initialState.isLoading, action: any) => {
    switch(action.type){
        case 'CHANGE_TABLE_LAODING':
            return action.isLoading;
        default:
            return state;
    }
}

// 表格数据
const pagination = (state = initialState.pagination, action: any) => {
    switch(action.type){
        case 'CHANGE_OR_FILTER':
            return {
                total: action.total,
                page: action.page,
                dataSource: action.dataSource,
                pageSize: action.pageSize
            };
        default:
            return state;
    }
}

//筛选数据
const filterData = (state = initialState.filterData, action: any) => {
    switch(action.type){
        case 'SAVE_FILTER':
            return action.filterData;
        default:
            return state;
    }
}

// 展示弹窗
const isShowModal = (state = initialState.isShowModal, action: any) => {
    switch(action.type){
        case 'SHOW_MODAL':
            return action.isShowModal;
        default:
            return state;
    }
}

// 弹窗数据初始化
const modalData = (state = initialState.modalData, action: any) => {
    switch(action.type){
        case 'SET_MODAL_DATA':
            return action.modalData;
        default:
            return state;
    }
}

export default (state = initialState, action: any) => {
    return {
        isUnflod: isUnflod(state.isUnflod, action),
        isLoading: isLoading(state.isLoading, action),
        pagination: pagination(state.pagination, action),
        filterData: filterData(state.filterData, action),
        isShowModal: isShowModal(state.isShowModal, action),
        modalData: modalData(state.modalData, action)
    }
}