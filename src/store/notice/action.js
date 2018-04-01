import * as Notice from './action-type';
import API from '@/api/api';

export const initNotice = () => {
    console.log('get notice list .....');
    // 返回函数，异步dispatch
    return async dispatch => {
        try {
            let result = await API.getNotice();
            dispatch({
                type: Notice.SETNOTICE,
                data: result
            });
        } catch(err) {
            console.error(err);
        }
    }
}

export const getNotice = () => {
    console.log('get notice ....')
    return {
        type: Notice.GETNOTICE,
    }
}

export const setNotice = data => {
    return {
        type: Notice.SETNOTICE,
        data,
    }
}
