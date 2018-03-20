import * as ApplyCreditCardData from './action-type';

let defaultData = {
    headerImageUrl: "/static/images/creditcard/header.png",
    leftRecommendImageUrl: "/static/images/creditcard/left.png",
    rightTopRecommendImageUrl: "/static/images/creditcard/righttop.png",
    rightBottomRecommendImageUrl: "/static/images/creditcard/rightbottom.png",
    bankList : []
}

export const applyCreditCardData = (data = defaultData, action = {}) => {
    console.log(data);
    switch (action.type) {
        case ApplyCreditCardData.GETAPPLYCREDITCARDDATA:
            console.log(data);
            return data;
        case ApplyCreditCardData.SETAPPLYCREDITCARDDATA:
            const dataStore = {...data, ...action.data}
            return dataStore;
        default:
            return data;
    }
}
