import * as pro from './action-type';
import API from '@/api/api';

// 初始化获取商品数据，保存至redux
export const getProData = () => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try {
            let result = await API.getProduction();
            result.map(item => {
                item.selectStatus = false;
                item.selectNum = 0;
                return item;
            });
            dispatch({
                type: pro.GETPEODUCTION,
                dataList: result
            });
        } catch(err) {
            console.error(err);
        }
    }
}

// 清空选择
export const clearSelected = () => {
    return {
        type: pro.CLEARSELECTED
    }
}