import * as Orders from './action-type';
import API from '@/api/api';

// 获取信用卡订单信息
export const getCreditcardorders = () => {
    return async dispatch => {
        try {
            let orders = await API.getCreditcardorders();
            console.log(orders);
            dispatch({
                type: Orders.SETCREDITCARDORDERS,
                creditcardorders: orders,
            })
        } catch(err) {
            console.error(err);
        }
    }
}