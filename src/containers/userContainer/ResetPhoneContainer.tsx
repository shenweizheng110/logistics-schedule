import { connect } from 'react-redux';
import ResetPhone from '../../components/user/ResetPhone';
import { getCode, updateUser } from '../../actions';

const mapStateToProps = (state: any) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch: any) => ({
    handleSubmit: (form: any) => {
        form.validateFieldsAndScroll((errs: any, values: any) => {
            if(!errs){
                form.resetFields();
                dispatch(updateUser(values,'phone'));
            }
        })
    },
    // 获取验证码
    handleGetCode: () => {
        dispatch(getCode('phone'));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPhone);