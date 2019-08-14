import { connect } from 'react-redux';
import AllocatOrderRoute from '../../../components/schedule/scheduleManual/AllocatOrderRoute';
import {
    changeCurrentStep,
    showAllocatModal,
    setVehicleRoute,
    getManualScheduleCost
} from '../../../actions';

const filterVehcileSelected = (selectedRows: any, currentStep: any) => {
    if(currentStep === 2){
        let res: any = [];
        selectedRows.forEach((item: any) => {
            if(item.currentLoad !== 0 || item.currentVolume !== 0)
                res.push(item);
        });
        return res;
    }
    return selectedRows;
}

const mapStateToProps = (state: any) => ({
    vehicleSelectedRows: filterVehcileSelected(state.vehicleSelected.selectedRows, state.currentStep),
    currentStep: state.currentStep,
    vehicleRoute: state.vehicleRoute
})

const mapDispatchToPtops = (dispatch: any) => ({
    // 下一步 上一步
    toNextStep: (current: number, vehicleSelectedRows: any, vehicleRoute: any) => {
        if(current === 2){
            vehicleSelectedRows.forEach((vehicleItem: any) => {
                if(vehicleItem.midwayCitys.length > 0){
                    if(!vehicleRoute[vehicleItem.vehicleLicense]){
                        vehicleRoute[vehicleItem.vehicleLicense] = vehicleItem.midwayCitys
                    }
                }
            });
            dispatch(setVehicleRoute(vehicleRoute));
        }
        if(current === 3){
            dispatch(getManualScheduleCost());
        }
        dispatch(changeCurrentStep(current));

    },
    // 打开分配弹窗
    openAllocatModal: (type: string, vehicleLicense: string) => {
        dispatch(showAllocatModal(type, vehicleLicense));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToPtops
)(AllocatOrderRoute);