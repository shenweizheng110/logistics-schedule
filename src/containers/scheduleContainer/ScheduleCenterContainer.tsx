import { connect } from 'react-redux';
import ScheduleCenter from '../../components/schedule/ScheduleCenter';
import {
    autoSchedule,
    getScheduleIntro
} from '../../actions';

const mapStateToProps = (state: any) => ({
    pageLoading: state.pageLoading,
    scheduleIntro: state.scheduleIntro
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // 跳转手动调度页面
    toScheduleManual: () => {
        let { history } = ownProps;
        history.push('/console/schedule/manual');
    },

    // 一键调度
    autoSchedule: () => {
        dispatch(autoSchedule());
    },

    // 获取调度概览
    getScheduleIntro: () => {
        dispatch(getScheduleIntro());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleCenter);