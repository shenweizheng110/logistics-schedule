import { connect } from 'react-redux';
import SystemTable from '../../components/systemLog/SystemLogTable';
import { getTableDataAction } from '../../actions/commonAction';

const mapStateToProps = (state: any) => {
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
        dispatch(getTableDataAction('/api/log/list',page,pageSize));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SystemTable)