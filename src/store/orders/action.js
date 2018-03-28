import * as Orders from './action-type';
import API from '@/api/api';
import DateUtil from '@/utils/dateUtil';

// 获取信用卡订单信息
export const getCreditcardorders = () => {
    return async dispatch => {
        try {
            let creditcardorders = await API.getCreditcardorders();
            let orders = {};
            creditcardorders = creditcardorders.map((item) => {
                item.ApplyTimeFormat = DateUtil.formatFunc(new Date(item.ApplyTime * 1000), 'yyyy-MM-dd HH:mm');
                return item;
            });
            orders.creditcardorders = creditcardorders;
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