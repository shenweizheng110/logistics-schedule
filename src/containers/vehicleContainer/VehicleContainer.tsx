import { connect } from 'react-redux';
import { changeDropDown, showModal, clearData } from '../../actions';
import Vehicle from '../../components/vehicle/Vehicle';

const mapStatetoProps = (state: any) => ({
    isUnflod: state.isUnflod
})

const mapDispatchToProps = (dispatch: any) => ({
    // 展示筛选面板
    showFilterPanel: (isUnflod: boolean) => dispatch(changeDropDown(isUnflod)),
    // 展示弹窗
    handleShowModal: (isShowModal: boolean) => {
        dispatch(showModal(isShowModal));
    },
    // 清空页面数据
    handleClearPage: () => {
        dispatch(clearData());
    },
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(Vehicle);