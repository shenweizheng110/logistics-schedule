import { connect } from 'react-redux';
import ScheduleManual from '../../components/schedule/ScheduleManual';
import { changeCurrentStep } from '../../actions';

const mapStatetoProps = (state: any) => ({
    currentStep: state.currentStep
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // 修改当前步骤
    changeCurrentStep: (current: number) => {
        dispatch(changeCurrentStep(current));
    }
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(ScheduleManual);