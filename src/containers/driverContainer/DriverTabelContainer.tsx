import { connect } from 'react-redux';
import DriverTable from '../../components/driver/DriverTable';
import { getTableDataAction, deleteAction, openEditModalAction } from '../../actions/commonAction';
import { getDriverListApi, deleteDriverApi, getDriverApi } from '../../api';

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
        dispatch(getTableDataAction(getDriverListApi,page,pageSize));
    },
    // 处理删除确认
    handleDelete: (id: number) => {
        dispatch(deleteAction(deleteDriverApi,id,getDriverListApi, 'driber'));
    },
    // 处理获取当前行记录打开编辑弹窗
    openEditModal: (id: number) => {
        dispatch(openEditModalAction(getDriverApi,id));
    }
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)( DriverTable );