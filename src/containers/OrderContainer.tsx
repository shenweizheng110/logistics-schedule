import { connect } from 'react-redux';
import Order from '../components/Order';
import { changeDropDown, showModal } from '../actions';

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
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(Order);