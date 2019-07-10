import { connect } from 'react-redux';
import VehicleTable from '../components/VehicleTable';
import { getVehicleList, deleteVehicle, openVehicleEditModal } from '../actions/vehicleAction';

const mapStatetoProps = (state: any) => ({
    isLoading: state.vehicle.isLoading,
    page: state.vehicle.pagination.page,
    total: state.vehicle.pagination.total,
    pageSize: state.vehicle.pagination.pageSize,
    dataSource: state.vehicle.pagination.dataSource,
})

const mapDispatchToProps = (dispatch: any) => ({
    // 处理表格分页
    handleChange: (page: number, pageSize: number) => {
        dispatch(getVehicleList(page,pageSize));
    },
    // 处理删除确认
    handleDelete: (id: number) => {
        dispatch(deleteVehicle(id));
    },
    // 处理获取当前行记录打开编辑弹窗
    openEditModal: (id: number) => {
        dispatch(openVehicleEditModal(id));
    }
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)( VehicleTable );