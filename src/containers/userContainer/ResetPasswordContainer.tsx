import { connect } from 'react-redux';
import ResetPassword from '../../components/user/ResetPassword';
import { getCode, updateUser } from '../../actions';

const mapStateToProps = (state: any) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch: any) => ({
    handleSubmit: (form: any) => {
        form.validateFieldsAndScroll((errs: any, values: any) => {
            if(!errs){
                form.resetFields();
                dispatch(updateUser(values,'password'));
            }
        })
    },
    // 获取验证码
    handleGetCode: () => {
        dispatch(getCode('password'));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPassword);