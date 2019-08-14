import { connect } from 'react-redux';
import ScheduleManualDetail from '../../../components/schedule/scheduleManual/ScheduleManualDetail';
import {
    changeCurrentStep,
    submitManualSchedule
} from '../../../actions';

const getUsedVehicle = (selectedRows: any) => {
    let res: any = [];
    selectedRows.forEach((item: any) => {
        if(item.currentLoad !== 0 || item.currentVolume !== 0)
            res.push(item);
    });
    return res;
}

const getHandleOrder = (orderTargetKeys: any, orderJson: any) => {
    let res: any = [];
    Object.keys(orderTargetKeys).forEach((item: any) => {
        let targetKeys = orderTargetKeys[item];
        targetKeys.forEach((targetKey: string) => {
            let orderItem = orderJson[targetKey];
            orderItem.vehicleLicense = item;
            res.push(orderJson[targetKey]);
        })
    });
    return res;
}

const mapStateToProps = (state: any) => ({
    usedVehicles: getUsedVehicle(state.vehicleSelected.selectedRows),
    handleOrders: getHandleOrder(state.orderTargetKeys, state.orderListJson),
    currentStep: state.currentStep,
    currentManualSchedule: state.currentManualSchedule
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // 返回上一步
    toPreStep: (currentStep: number) => {
        dispatch(changeCurrentStep(currentStep));
    },
    // 处理手动调度的确认
    submitManualSchedule: (history: any) => {
        dispatch(submitManualSchedule(history));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleManualDetail);