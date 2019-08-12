import { connect } from 'react-redux';
import AllocatRouteModal from '../../../components/schedule/scheduleManual/AllocatRouteModal';
import {
    showAllocatRouteModal,
    getCityList,
    setCurrentVehicleRoute,
    handleAllocatRouteModalSubmit
} from '../../../actions';

const getCurrentCity = (selectedRows: any, currentVehicleLicense: string) => {
    let currentCity: any = {};
    selectedRows.some((item: any) => {
        if(item.vehicleLicense === currentVehicleLicense){
            currentCity.currentCityName = item.currentCityName;
            currentCity.currentCityId = item.currentCityId;
            return true;
        }
    });
    return currentCity;
}

const mapStateToProps = (state: any) => ({
    isShowAllocatRouteModal: state.isShowAllocatRouteModal,
    currentCity: getCurrentCity(state.vehicleSelected.selectedRows, state.currentAllocatVehicle),
    cityList: state.cityList,
    currentVehicleRoute: state.currentVehicleRoute
})

const mapDispatchToProps = (dispatch: any) => ({
    // 处理弹窗关闭
    handleCloseModal: () => {
        dispatch(showAllocatRouteModal(false));
    },
    // 获取城市列表
    getCityList: () => {
        dispatch(getCityList());
    },
    // 处理选择框的选择
    changeCurrentVehicleRoute: (currentVehicleRoute: any, value: any, selectIndex: number) => {
        currentVehicleRoute[selectIndex] = value;
        dispatch(setCurrentVehicleRoute(currentVehicleRoute));
    },
    // 添加新的下拉框
    addNewSelect: (currentVehicleRoute: any) => {
        dispatch(setCurrentVehicleRoute([...currentVehicleRoute, null]));
    },
    // 处理弹窗确认
    handleModalSubmit: (currentVehicleRoute: any) => {
        dispatch(handleAllocatRouteModalSubmit(currentVehicleRoute));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllocatRouteModal);