import * as Notice from './action-type';

let defaultData = {
    noticeList : []
}

export const notice = (data = defaultData, action = {}) => {
    switch (action.type) {
        case Notice.GETNOTICE:
            return data.noticeList;
        case Notice.SETNOTICE:
            const dataStore = {...data, ...{noticeList: action.data}};
            return dataStore;
        default:
            return data;
    }
}
