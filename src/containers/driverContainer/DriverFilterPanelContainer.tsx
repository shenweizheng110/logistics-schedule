import { connect } from 'react-redux';
import { saveFilter, changeDropDown } from '../../actions';
import { getTableDataAction } from '../../actions/commonAction';
import DriverFilterPanel from '../../components/driver/DriverFilterPanel';
import { getDriverListApi } from '../../api';

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: any) => ({
    // 处理筛选表单提交
    handleFilterSubmit: (form: any) => {
        form.validateFieldsAndScroll((err: any, value: any) => {
            if(!err){
                dispatch(saveFilter(value));
                dispatch(getTableDataAction(getDriverListApi,1,10));
            }
        })
    },
    // 处理表单重置
    handleResetFilter: (form: any) =>{
        form.resetFields();
        dispatch(saveFilter(null));
        dispatch(getTableDataAction(getDriverListApi,1,10));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DriverFilterPanel);