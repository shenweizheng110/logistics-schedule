import { connect } from 'react-redux';
import { saveFilter, changeDropDown } from '../../actions';
import { getTableDataAction } from '../../actions/commonAction';
import { getCityListApi } from '../../api';
import CityFilterPanel from '../../components/city/CityFilterPanel';

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: any) => ({
    // 处理筛选表单提交
    handleFilterSubmit: (form: any) => {
        form.validateFieldsAndScroll((err: any, value: any) => {
            if(!err){
                dispatch(saveFilter(value));
                dispatch(getTableDataAction(getCityListApi,1,10));
            }
        })
    },
    // 处理表单重置
    handleResetFilter: (form: any) =>{
        form.resetFields();
        dispatch(saveFilter(null));
        dispatch(getTableDataAction(getCityListApi,1,10));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityFilterPanel);