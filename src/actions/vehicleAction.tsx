import axios from '../common/request';
import {
    changeTableLoading,
    changeOrFilter,
    showMsg,
    closeModalCommonAction,
    setModalData,
    showModal
} from './index';

// 获取车辆列表
export const getVehicleList = (page: number, pageSize: number) => {
    return (dispatch: any, getState: any) => {
        dispatch(changeTableLoading(true));
        axios.get('/api/vehicle/list',{
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

// 添加车辆
export const addVehicle = (vehicleInfo: any) => {
    return (dispatch: any, getState: any) => {
        let modalData = getState().modalData;
        if(modalData.id){
            axios.put('/api/vehicle/info',{
                ...vehicleInfo,
                id: modalData.id
            }).then(res => {
                dispatch(closeModalCommonAction(res, getVehicleList));
            }).catch(error => {
                dispatch(showMsg({
                    type: 'error',
                    msg: error
                }));
            })
        }else{
            axios.post('/api/vehicle/info',{
                ...vehicleInfo
            }).then(res => {
                if(res.data.code === 0){
                    dispatch(closeModalCommonAction(res, getVehicleList));
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

// 删除车辆
export const deleteVehicle = (id: number) => {
    return(dispatch: any) => {
        axios.get('/api/vehicle/delete/' + id)
            .then(res => {
                if(res.data.code === 0){
                    dispatch(getVehicleList(1,10));
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

// 获取当前记录 打开编辑弹窗 填充数据
export const openVehicleEditModal = (id: number) => {
    return (dispatch: any) => {
        axios.get('/api/vehicle/info/' + id)
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