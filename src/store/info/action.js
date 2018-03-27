import * as info from './action-type';
import API from '@/api/api';

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

// 设置上级用户信息
export const setGrandUserInfo = grandUser => {
    return {
        type: info.SETGRANDUSERINFO,
        grandUser,
    }
}

// 返回上级用户信息
export const getGrandUserInfo = () => {
    // 返回异步数据
    return async dispatch => {
        try {
            let result = await API.getGrandUserInfo();
            dispatch({
                type: info.SETGRANDUSERINFO,
                data: result
            });
        } catch(err) {
            console.error(err);
        }
    }
}