import { connect } from 'react-redux';
import CityDistanceFilterPanel from '../../components/city/CityDistanceFilterPanel';
import { handleCityDistanceFilter, getCityDistance, getAllCity } from '../../actions';

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: any) => ({
    // 处理筛选表单提交
    handleFilterSubmit: (form: any) => {
        form.validateFieldsAndScroll((err: any, value: any) => {
            if(!err){
                dispatch(handleCityDistanceFilter(value.startCityName,value.targetCityName));
            }
        })
    },
    // 处理表单重置
    handleResetFilter: (form: any,originData: any) =>{
        form.resetFields();
        dispatch(getCityDistance());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityDistanceFilterPanel);