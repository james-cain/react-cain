import * as ApplyCreditCard from './action-type';

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
