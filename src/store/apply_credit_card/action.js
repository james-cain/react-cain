import * as ApplyCreditCard from './action-type';
import API from '@/api/api';

export const getCardData = () => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try {
            let result = await API.getApplyBanks();
            dispatch({
                type: ApplyCreditCard.SETAPPLYCREDITCARDDATA,
                data: result
            });
        } catch(err) {
            console.error(err);
        }
    }
}

export const getApplyCreditCardData = () => {
    return {
        type: ApplyCreditCard.GETAPPLYCREDITCARDDATA,
    }
}

export const setApplyCreditCardData = data => {
    return {
        type: ApplyCreditCard.SETAPPLYCREDITCARDDATA,
        data,
    }
}
