import { connect } from 'react-redux';
import { saveFilter, changeDropDown } from '../actions';
import { getVehicleList } from '../actions/vehicleAction';
import VehicleFilterPanel from '../components/VehicleFilterPanel';

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: any) => ({
    // 处理筛选表单提交
    handleFilterSubmit: (form: any) => {
        form.validateFieldsAndScroll((err: any, value: any) => {
            if(!err){
                dispatch(saveFilter(value));
                dispatch(getVehicleList(1,10));
            }
        })
    },
    // 处理表单重置
    handleResetFilter: (form: any) =>{
        form.resetFields();
        dispatch(changeDropDown(false));
        dispatch(saveFilter(null));
        dispatch(getVehicleList(1,10));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VehicleFilterPanel);