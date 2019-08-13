import { connect } from 'react-redux';
import currentSchedule from '../../../components/schedule/scheduleCenter/CurrentSchedule';
import {
    getCurrentScheduleAsync,
    getVehicleSchedule,
} from '../../../actions';

const mapStateToProps = (state: any) => ({
    currentSchedule: state.currentSchedule
})

const mapDispatchToProps = (dispatch: any) => ({
    // 获取当前调度
    getCurrentSchedule: () => {
        dispatch(getCurrentScheduleAsync());
    },
    // 获取车辆的详情，打开弹窗
    openVehicleScheduleModal: (vehicleId: number) => {
        dispatch(getVehicleSchedule(vehicleId));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(currentSchedule);