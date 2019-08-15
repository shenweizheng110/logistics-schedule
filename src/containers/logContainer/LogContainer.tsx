import { connect } from 'react-redux';
import SystemLog from '../../components/systemLog/SystemLog';
import { changeDropDown, clearData } from '../../actions';

const mapStateToProps = (state: any) => ({
    isUnflod: state.isUnflod
})

const mapDispatchToProps = (dispatch: any) => ({
    // 展示筛选面板
    showFilterPanel: (isUnflod: boolean) => dispatch(changeDropDown(isUnflod)),
    // 清空页面数据
    handleClearPage: () => {
        dispatch(clearData());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SystemLog);