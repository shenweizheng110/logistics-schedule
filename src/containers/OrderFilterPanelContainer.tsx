import { connect } from 'react-redux';
import { saveFilter, changeDropDown } from '../actions';
import { getOrderList } from '../actions/orderAction';
import OrderFilterPanel from '../components/OrderFilterPanel';

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: any) => ({
    // 处理筛选表单提交
    handleFilterSubmit: (form: any) => {
        form.validateFieldsAndScroll((err: any, value: any) => {
            if(!err){
                dispatch(saveFilter(value));
                dispatch(getOrderList(1,10));
            }
        })
    },
    // 处理表单重置
    handleResetFilter: (form: any) =>{
        form.resetFields();
        dispatch(changeDropDown(false));
        dispatch(saveFilter(null));
        dispatch(getOrderList(1,10));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderFilterPanel);