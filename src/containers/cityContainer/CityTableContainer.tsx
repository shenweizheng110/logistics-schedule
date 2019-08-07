import { connect } from 'react-redux';
import CityTable from '../../components/city/CityTable';
import { getTableDataAction } from '../../actions/commonAction';
import { getCityListApi } from '../../api';
import { checkCityStatus } from '../../actions'

const mapStatetoProps = (state: any) => {
    let tableData = state.tableData;
    let pagination = tableData.pagination;
    return {
        isLoading: tableData.isLoading,
        page: pagination.page,
        total: pagination.total,
        pageSize: pagination.pageSize,
        dataSource: pagination.dataSource,
        isCityUsing: state.isCityUsing
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // 处理表格分页
    handleChange: (page: number, pageSize: number) => {
        dispatch(getTableDataAction(getCityListApi,page,pageSize));
    },
    // 表格操作前的检查函数 检查通过根据 type 进行下一步操作 编辑或删除
    checkCityStatus: (id: number, type: string) => {
        dispatch(checkCityStatus(id, type));
    }
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)( CityTable );