import { connect } from 'react-redux';
import VehicleAddModal from '../../components/vehicle/VehicleAddModal';
import { showModal, setModalData } from '../../actions';
import { addAction } from '../../actions/commonAction';
import { addVehicleApi, getVehicleListApi } from '../../api';

const mapStateToProps = (state: any) => ({
    isShowModal: state.isShowModal,
    modalData: state.modalData,
    cityList: state.cityList
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
                dispatch(addAction(addVehicleApi,values,getVehicleListApi, 'vehicle'));
                form.resetFields();
            }
        })
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    VehicleAddModal
)