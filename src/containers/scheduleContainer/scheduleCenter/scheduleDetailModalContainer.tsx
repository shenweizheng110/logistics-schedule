import { connect } from 'react-redux';
import ScheduleDetailModal from '../../../components/schedule/scheduleCenter/ScheduleDetailModal';
import {
    showScheduleDetailModal,
} from '../../../actions';

const mapStateToProps = (state: any) => ({
    isShowScheduleDetailModal: state.isShowScheduleDetailModal,
    scheduleDetail: state.scheduleDetail
})

const mapDispatchToProps = (dispatch: any) => ({
    // 关闭弹窗
    closeModal: () => {
        dispatch(showScheduleDetailModal(false));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleDetailModal);