import * as Orders from './action-type';

let defaultData = {
    // 信用卡订单列表
    creditcardorders: []
}

export const orders = (state = defaultData, action = {}) => {
    switch (action.type) {
        case Orders.SETCREDITCARDORDERS:
            const stateChangeCreditcardorders = {...state, ...action.creditcardorders};
            console.log('reducer...setcreditcardorders');
            console.log(stateChangeCreditcardorders);
            return stateChangeCreditcardorders;
        default:
            return state;
    }
}