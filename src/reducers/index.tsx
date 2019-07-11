import { combineReducers } from 'redux';
import tableData from './tableReducer';
import { isUnflod, filterData, isShowModal, modalData, msgInfo } from './baseReducer';

export default combineReducers({
    isUnflod,
    filterData,
    isShowModal,
    modalData,
    tableData,
    msgInfo
})