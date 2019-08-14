import { connect } from 'react-redux';
import VehicleChoose from '../../../components/schedule/scheduleManual/VehicleChoose';
import { getTableDataAction } from '../../../actions/commonAction';
import { getVehicleListApi } from '../../../api';
import {
    changeCurrentStep,
    changeVehicleSelected,
} from '../../../actions';

const mapStateToProps = (state: any) => {
    let tableData = state.tableData;
    let pagination = tableData.pagination;
    return {
        isLoading: tableData.isLoading,
        page: pagination.page,
        total: pagination.total,
        pageSize: pagination.pageSize,
        dataSource: pagination.dataSource,
        vehicleSelectedRowKeys: state.vehicleSelected.selectedRowKeys,
        currentStep: state.currentStep,
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // 处理表格分页
    handleChange: (page: number, pageSize: number) => {
        dispatch(getTableDataAction(getVehicleListApi, page, pageSize))
        // dispatch(getCanScheduleVehicle(page, pageSize));
    },
    // 处理下一步
    toNextStep: (current: number) => {
        dispatch(changeCurrentStep(current));
    },
    // 处理表格多选框的选择
    handleRowSelect: (selectedRowKeys: string[], selectedRows: any) => {
        dispatch(changeVehicleSelected({
            selectedRowKeys,
            selectedRows
        }));
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VehicleChoose);