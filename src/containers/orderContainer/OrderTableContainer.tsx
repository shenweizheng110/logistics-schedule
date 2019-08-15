import { connect } from 'react-redux';
import OrderTable from '../../components/order/OrderTable';
import { getTableDataAction, deleteAction, openEditModalAction } from '../../actions/commonAction';
import { getOrderListApi, deleteOrderApi, getOrderApi } from '../../api';
import { showDetailModal, setModalData } from '../../actions';

const mapStatetoProps = (state: any) => {
    let tableData = state.tableData;
    let pagination = tableData.pagination;
    return {
        isLoading: tableData.isLoading,
        page: pagination.page,
        total: pagination.total,
        pageSize: pagination.pageSize,
        dataSource: pagination.dataSource,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    // 处理表格分页
    handleChange: (page: number, pageSize: number) => {
        dispatch(getTableDataAction(getOrderListApi,page,pageSize));
    },
    // 处理删除确认
    handleDelete: (id: number) => {
        dispatch(deleteAction(deleteOrderApi,id,getOrderListApi, 'order'));
    },
    // 处理获取当前行记录打开编辑弹窗
    openEditModal: (id: number) => {
        dispatch(openEditModalAction(getOrderApi,id));
    },
    // 展示订单详情弹窗
    openOrderDetailModal: (record: any) => {
        dispatch(setModalData(record));
        dispatch(showDetailModal(true));
    }
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)( OrderTable );