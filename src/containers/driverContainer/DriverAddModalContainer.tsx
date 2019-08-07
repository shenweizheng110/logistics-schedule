import { connect } from 'react-redux';
import DriverAddModal from '../../components/driver/DriverAddModal';
import { showModal, setModalData } from '../../actions';
import { addAction } from '../../actions/commonAction';
import { addDriverApi, getDriverListApi } from '../../api';

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
                dispatch(addAction(addDriverApi, values, getDriverListApi));
                form.resetFields();
            }
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    DriverAddModal
)