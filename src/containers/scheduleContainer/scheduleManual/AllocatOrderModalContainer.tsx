import { connect } from 'react-redux';
import AllocatOrderModal from '../../../components/schedule/scheduleManual/AllocatOrderModal';
import {
    getUndisposedOrdes,
    showAllocatOrderModal,
    allocatOrderSubmit,
    currentTargetKeys
} from '../../../actions';

const filterOrder = (orderList: any, orderTargetKeys: any, currentAllocatVehicle: string) => {
    let targetkeysList: any = [];
    Object.keys(orderTargetKeys).forEach((item: any) => {
        if(item !== currentAllocatVehicle)
            targetkeysList = targetkeysList.concat(orderTargetKeys[item]);
    });
    let res: any = [];
    orderList.forEach((item: any) => {
        if(!targetkeysList.includes(item.number)){
            res.push(item);
        }
    });
    return res;
}

const mapStateToProps = (state: any) => {
    return {
        orderList: filterOrder(state.orderList, state.orderTargetKeys, state.currentAllocatVehicle),
        currentTargetKeys: state.currentTargetKeys,
        currentAllocatVehicle: state.currentAllocatVehicle,
        isShowAllocatOrderModal: state.isShowAllocatOrderModal
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    // 处理分配弹窗的确认
    handleAllocatSubmit: (nextTargetKeys: any) => {
        dispatch(allocatOrderSubmit(nextTargetKeys));
    },
    // 处理弹窗关闭
    handleCloseModal: () => {
        dispatch(showAllocatOrderModal(false));
    },
    // 处理穿梭框中订单的选择
    handleOrderChange: (nextTargetCitys: any) => {
        dispatch(currentTargetKeys(nextTargetCitys));
    },
    // 获取所有状态为为处理的订单
    getAllUndispoedOrders: () => {
        dispatch(getUndisposedOrdes());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllocatOrderModal)