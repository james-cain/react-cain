import * as home91 from './action-type';

let defaultState = {
    imgPath: 'home_bg@2x.png',
    sysName: '91卡哥',
    avatar: 'james.png'
}

export const basicData = (state = defaultState, action = {}) => {
    switch (action.type) {
        // 调服务端接口获取基本配置信息，背景图，系统名，用户照片
        case home91.GETBASICDATA:
            return state;
        default:
            return state;
    }
}