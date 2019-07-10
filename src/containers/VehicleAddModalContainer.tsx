import { connect } from 'react-redux';
import VehicleAddModal from '../components/VehicleAddModal';
import { showModal, setModalData } from '../actions';
import { addVehicle } from '../actions/vehicleAction';

const mapStateToProps = (state: any) => {
    let { isShowModal, modalData } = state.vehicle;
    return {
        isShowModal,
        modalData
    }
}

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
                dispatch(addVehicle(values));
            }
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    VehicleAddModal
)