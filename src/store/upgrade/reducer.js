import * as upgradeInfo from './action-type';

let defaultState = {
    stepsList: [
        {
            id: 0,
            selected: true,
            name: '普卡'
        },
        {
            id: 1,
            selected: false,
            name: '金卡'
        },
        {
            id: 2,
            selected: false,
            name: '白金卡'
        },
        {
            id: 3,
            selected: false,
            name: '钻石卡'
        },
        {
            id: 4,
            selected: false,
            name: '黑金卡'
        }
    ],
    rules: [{
        id: 'rules1',
        avatar: '/static/images/upgrade/gold.png',
        name: '金卡',
        desc: '有效期永久，赠送50积分',
        price: '198元',
        selected: false,
        limitation: '升级金卡会员,享受精养卡收益、贷款收益、网乐收益、办卡收益、招商收益',
    }, {
        id: 'rules2',
        avatar: '/static/images/upgrade/white_gold.png',
        name: '白金卡',
        desc: '有效期永久，赠送200积分',
        price: '298元',
        selected: false,
        limitation: '升级白金卡会员,享受精养卡收益、贷款收益、网乐收益、办卡收益、招商收益',
    }, {
        id: 'rules3',
        avatar: '/static/images/upgrade/diamond.png',
        name: '钻石卡',
        desc: '有效期永久，赠送500积分',
        price: '398元',
        selected: false,
        limitation: '升级钻石卡会员,享受精养卡收益、贷款收益、网乐收益、办卡收益、招商收益',
    }]
}

export const steps = (state = defaultState, action = {}) => {
    switch (action.type) {
        case upgradeInfo.SETSTEPS:
            state.stepsList.forEach((item) => {
                if (item.id === action.stepsId) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
            });
            return state;
        case upgradeInfo.SETRULES:
            const stateBak = state.rules.forEach((item) => {
                if (item.id === action.rulesId) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
            });
            return Object.assign({}, state, stateBak);
        case upgradeInfo.DELETESELECTEDRULES:
            const  stateBak2 = state.rules.forEach((item) => {
                item.selected = false;
            });
            return Object.assign({}, state, stateBak2);
        default:
            return state;
    }
}