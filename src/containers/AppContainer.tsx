import { connect } from 'react-redux';
import App from './App';
import { logout, checkLogin } from '../actions';

const mapStateToProps = (state: any) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
    handleLogout: () => {
        dispatch(logout());
    },
    initUser: () => {
        dispatch(checkLogin())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);