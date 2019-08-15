import { connect } from 'react-redux';
import OrderAddModal from '../../components/order/OrderAddModal';
import { showModal, setModalData, getCityList } from '../../actions';
import { addAction } from '../../actions/commonAction';
import { addOrderApi, getOrderListApi } from '../../api';

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
                values.orderStatus = 'undisposed';
                dispatch(addAction(addOrderApi,values,getOrderListApi, 'order'));
                form.resetFields();
            }
        })
    },
    // 获取所有的城市
    getCityList: () => {
        dispatch(getCityList());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    OrderAddModal
)