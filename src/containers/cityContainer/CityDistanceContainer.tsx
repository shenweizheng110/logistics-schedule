import { connect } from 'react-redux';
import CityDistance from '../../components/city/CityDistance';
import { getCityDistance } from '../../actions/index';

const mapStateToProps = (state: any) => ({
    citys: state.citys
})

const mapDispatchToProps = (dispatch: any) => ({
    // 获取全部城市点
    getAllCity: () => {
        dispatch(getCityDistance())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    CityDistance
)