import { connect } from 'react-redux';
import City from '../../components/city/City';
import { changeDropDown, showModal, clearData } from '../../actions';

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
    }
})

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(City);