import { combineReducers } from 'redux';
import tableData from './tableReducer';
import {
    isUnflod,
    filterData,
    isShowModal,
    modalData,
    msgInfo,
    citys,
    cityList,
    isShowDetailModal,
    isCityUsing
} from './baseReducer';

export default combineReducers({
    isUnflod,
    filterData,
    isShowModal,
    modalData,
    tableData,
    msgInfo,
    citys,
    cityList,
    isShowDetailModal,
    isCityUsing
})