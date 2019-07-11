import axios from '../common/request';
import {
    changeTableLoading,
    changeOrFilter,
    showMsg,
    closeModalCommonAction,
    setModalData,
    showModal
} from './index';

// 获取订单列表
export const getOrderList = (page: number, pageSize: number) => {
    return (dispatch: any, getState: any) => {

    }
}

// 获取单个订单
export const getOrder = (id: number) => {
    return (dispatch: any) => {

    }
}

// 更新 修改 订单
export const addOrder = (orderInfo: any) => {
    return (dispatch: any, getState: any) => {

    }
}

// 删除订单
export const deleteOrder = (id: number) => {
    return (dispatch: any) => {

    }
}

// 获取当前数据  打开编辑弹窗
export const openOrderEditModal = (id: number) => {

}