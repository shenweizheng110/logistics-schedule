import { combineReducers } from 'redux';
import vehicle from './vehicle';

const msgInfo = (state: any = {type: null, msg: null}, action: any) => {
    switch(action.type){
        case 'SHOW_MSG':
            return {
                ...state,
                type: action.msgInfo.type,
                msg: action.msgInfo.msg
            };
        default:
            return state;
    }
}

export default combineReducers({
    vehicle,
    msgInfo
})