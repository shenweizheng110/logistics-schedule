import * as types from '../constants/ActionTypes';

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
    dataSource: [],
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

// 添加 修改 关闭弹窗统一操作
export const closeModalCommonAction = (res: any, getDataListAction: any) => {
    return (dispatch: any, getState: any) => {
        if(res.data.code === 0){
            dispatch(showMsg({
                type: 'success',
                msg: res.data.msg
            }));
            dispatch(setModalData({}));
            dispatch(showModal(false));
            dispatch(getDataListAction(1,10));
        }else{
            dispatch(showMsg({
                type: 'error',
                msg: res.data.msg
            }));
        }
    }
}