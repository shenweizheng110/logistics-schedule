import { connect } from 'react-redux';
import Login from '../../components/login/login';
import { login } from '../../actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch: any) => ({
    handleLogin: (form: any) => {
        form.validateFieldsAndScroll((errs: any, values: any) => {
            if(!errs){
                dispatch(login(values.phone,values.password));
            }
        })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);