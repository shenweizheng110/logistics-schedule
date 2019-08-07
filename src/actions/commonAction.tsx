import axios from '../common/request';
import {
    changeTableLoading,
    changeOrFilter,
    showMsg,
    setModalData,
    showModal
} from './index';

// 添加 修改 关闭弹窗统一操作
export const closeModalCommonAction = (res: any, getDataListAction: any, getTableDataUrl: string) => {
    return (dispatch: any, getState: any) => {
        if(res.data.code === 0){
            dispatch(showMsg({
                type: 'success',
                msg: res.data.msg
            }));
            dispatch(setModalData({}));
            dispatch(showModal(false));
            dispatch(getDataListAction(getTableDataUrl,1,10));
        }else{
            dispatch(showMsg({
                type: 'error',
                msg: res.data.msg
            }));
        }
    }
}

// 获取表格数据
export const getTableDataAction = (url: string, page: number, pageSize: number) => {
    return (dispatch: any, getState: any) => {
        dispatch(changeTableLoading(true));
        axios.get(url,{
            params: {
                page,
                pageSize,
                filterData: getState().filterData
            }
        }).then(res => {
            if(res.data.code === 0){
                let { total, dataSource} = res.data.data;
                dispatch(changeOrFilter({
                    page,
                    pageSize,
                    total,
                    dataSource,
                }));
                dispatch(changeTableLoading(false));
            }else{
                dispatch(changeTableLoading(false));
                dispatch(showMsg({
                    type: 'error',
                    msg: res.data.msg
                }));
            }
        }).catch(error => {
            dispatch(showMsg({
                type: 'error',
                msg: error
            }));
        })
    }
}

// 添加数据
export const addAction = (url: string, info: any, getTableDataUrl: string) => {
    return (dispatch: any, getState: any) => {
        let modalData = getState().modalData;
        if(modalData.id){
            axios.put(url,{
                ...info,
                id: modalData.id
            }).then(res => {
                dispatch(closeModalCommonAction(res, getTableDataAction, getTableDataUrl));
            }).catch(error => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }));
            })
        }else{
            axios.post(url,{
                ...info
            }).then(res => {
                if(res.data.code === 0){
                    dispatch(closeModalCommonAction(res, getTableDataAction, getTableDataUrl));
                }else{
                    dispatch(showMsg({
                        type: 'error',
                        msg: res.data.msg
                    }));
                }
            }).catch(error => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }));
            })
        }
    }
}

// 删除数据
export const deleteAction = (url: string, id: number, getTableDataUrl: string) => {
    return(dispatch: any) => {
        axios.delete(url + id)
            .then(res => {
                if(res.data.code === 0){
                    dispatch(getTableDataAction(getTableDataUrl,1,10));
                    dispatch(showMsg({
                        type: 'success',
                        msg: res.data.msg
                    }));
                }else{
                    dispatch(showMsg({
                        type: 'error',
                        msg: res.data.msg
                    }));
                }
            })
            .catch(error => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }));
            })
    }
}

// 获取当前数据打开弹窗
export const openEditModalAction = (url: string, id: number) => {
    return (dispatch: any) => {
        axios.get(url + id)
            .then(res => {
                if(res.data.code === 0){
                    let modalData = res.data.data;
                    dispatch(setModalData(modalData));
                    dispatch(showModal(true));
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