import { connect } from 'react-redux';
import VehicleTable from '../../components/vehicle/VehicleTable';
import { getTableDataAction, deleteAction, openEditModalAction } from '../../actions/commonAction';
import { getVehicleListApi, deleteVehicleApi, getVehicleApi, } from '../../api';
import { getCityList } from '../../actions';

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
        dispatch(getTableDataAction(getVehicleListApi,page,pageSize));
    },
    // 处理删除确认
    handleDelete: (id: number) => {
        dispatch(deleteAction(deleteVehicleApi,id,getVehicleListApi, 'vehicle'));
    },
    // 处理获取当前行记录打开编辑弹窗
    openEditModal: (id: number) => {
        dispatch(getCityList());
        dispatch(openEditModalAction(getVehicleApi,id));
    },
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)( VehicleTable );