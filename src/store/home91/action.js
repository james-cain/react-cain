import * as home91 from './action-type';

// 获取基本信息
export const getBasicInfo = () => {
    return {
        type: home91.GETBASICDATA,
    }
}

// 保存图片地址
export const getAvatar = userPosterUrl => {
    return {
        type: home91.GETAVATAR,
        dataType: 'userPosterUrl',
        userPosterUrl,
    }
}