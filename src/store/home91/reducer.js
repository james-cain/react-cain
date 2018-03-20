import * as home91 from './action-type';

let defaultState = {
    imgPath: 'header.png',
    titlePath: 'app_title.png',
    // sysName: '91卡哥',
    userPosterUrl: ''
}

export const basicData = (state = defaultState, action = {}) => {
    switch (action.type) {
        // 调服务端接口获取基本配置信息，背景图，系统名，用户照片
        case home91.GETBASICDATA:
            return state;
        case home91.GETAVATAR:
            return {...state, ...{[action.dataType]: action.userPosterUrl}};
        default:
            return state;
    }
}