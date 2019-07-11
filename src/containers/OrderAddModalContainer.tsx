import { connect } from 'react-redux';
import OrderAddModal from '../components/OrderAddModal';
import { showModal, setModalData } from '../actions';
import { addOrder } from '../actions/orderAction';

const mapStateToProps = (state: any) => ({
    isShowModal: state.isShowModal,
    modalData: state.modalData
})

const mapDispatchToProps = (dispatch: any) => ({
    // 关闭弹窗
    handleCloseModal: (form: any) => {
        form.resetFields();
        dispatch(showModal(false));
        dispatch(setModalData({}));
    },
    // 弹窗表单提交
    handleModalSubmit: (form: any) => {
        form.validateFieldsAndScroll((errs: any,values: any) => {
            if(!errs){
                dispatch(addOrder(values));
                form.resetFields();
            }
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    OrderAddModal
)