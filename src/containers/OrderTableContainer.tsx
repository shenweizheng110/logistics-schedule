import { connect } from 'react-redux';
import OrderTable from '../components/OrderTable';
import { getOrderList, deleteOrder, openOrderEditModal } from '../actions/orderAction';

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
        dispatch(getOrderList(page,pageSize));
    },
    // 处理删除确认
    handleDelete: (id: number) => {
        dispatch(deleteOrder(id));
    },
    // 处理获取当前行记录打开编辑弹窗
    openEditModal: (id: number) => {
        dispatch(openOrderEditModal(id));
    }
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)( OrderTable );