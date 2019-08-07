import { connect } from 'react-redux';
import OrderDetailModal from '../../components/order/OrderDetailModal';
import { setModalData, showDetailModal } from '../../actions';

const mapStateToProps = (state: any) => ({
    isShowDetailModal: state.isShowDetailModal,
    modalData: state.modalData
})

const mapDispatchToProps = (dispatch: any) => ({
    // 处理弹窗关闭
    handleCloseModal: () => {
        dispatch(showDetailModal(false));
        dispatch(setModalData({}));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDetailModal)