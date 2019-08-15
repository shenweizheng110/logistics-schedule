import { connect } from 'react-redux';
import CityAddModal from '../../components/city/CityAddModal';
import { showModal, setModalData, getCityDistance } from '../../actions';
import { addAction } from '../../actions/commonAction';
import { addCityApi, getCityListApi } from '../../api';

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
    handleModalSubmit: (form: any, type: string) => {
        form.validateFieldsAndScroll((errs: any,values: any) => {
            if(!errs){
                dispatch(addAction(addCityApi, values, getCityListApi, 'city'));
                // dispatch(getCityDistance());
                form.resetFields();
            }
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    CityAddModal
)