import * as Notice from './action-type';

let defaultData = {
    noticeList : []
}

export const notice = (data = defaultData, action = {}) => {
    switch (action.type) {
        case Notice.GETNOTICE:
            return data.noticeList;
        case Notice.SETNOTICE:
            console.log('set notice .....')
            console.log(action.data)
            console.log('.....');
            const dataStore = {...data, ...{noticeList: action.data}};
            return dataStore;
        default:
            return data;
    }
}
