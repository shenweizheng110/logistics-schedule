import { connect } from 'react-redux';
import DriverAddModal from '../../components/driver/DriverAddModal';
import { showModal, setModalData, getAllVehicle } from '../../actions';
import { addAction } from '../../actions/commonAction';
import { addDriverApi, getDriverListApi } from '../../api';

const mapStateToProps = (state: any) => ({
    isShowModal: state.isShowModal,
    modalData: state.modalData,
    vehicles: state.vehicles
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
    },
    // 获取所有的车辆
    getAllVehicle: () => {
        dispatch(getAllVehicle());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    DriverAddModal
)