import * as info from './action-type';

// 设置基本信息
export const setUserInfo = user => {
    return {
        type: info.SETUSERINFO,
        user,
    }
}

// 获取基本信息
export const getUserInfo = () => {
    return {
        type: info.GETUSERINFO
    }
}