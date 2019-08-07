import * as types from '../constants/ActionTypes';
import axios from '../common/request';
import { deleteAction, openEditModalAction } from './commonAction';
import { getCityListApi, deleteCityApi, getCityApi } from '../api';

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
                        dispatch(deleteAction(deleteCityApi ,cityId, getCityListApi));
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