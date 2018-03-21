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
            let banksGridData = action.data.map(function(bank) {
                return {
                    icon: bank.BankIconUrl,
                    text: bank.BankName,
                    bankApplyUrl: bank.BankApplyUrl,
                    bankDesc: bank.BankDesc,
                    bankDetailImageUrl: bank.BankDetailImageUrl,
                    bankNo: bank.BankNo,
                    bankFlag: bank.BankLabel
                }
            });
            const dataStore = {...data, ...{bankList: banksGridData}};
            console.log('异步获取到的stroe');
            console.log(dataStore);
            return dataStore;
        default:
            return data;
    }
}
