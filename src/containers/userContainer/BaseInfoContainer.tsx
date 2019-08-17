import { connect } from 'react-redux';
import BaseInfo from '../../components/user/BaseInfo';
import { updateUser } from '../../actions';

const mapStateToProps = (state: any) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch: any) => ({
    handleSubmit: (form: any) => {
        form.validateFieldsAndScroll((errs: any, values: any) => {
            if(!errs){
                dispatch(updateUser(values,'base'))
            }
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseInfo);