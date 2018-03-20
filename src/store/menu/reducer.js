import * as Menu from './action-type';

let defaultState = {
    menuList: [{
        menuId: 'bxyk',
        menuName: '办信用卡',
        icon: 'card_check.png',
        url: '/applyCreditCard'
    }, {
        menuId: 'dksq',
        menuName: '办卡查询',
        icon: 'card_query.png',
        url: '/'
    }, {
        menuId: 'sjsk',
        menuName: '贷款申请',
        icon: 'violation_payment.png',
        url: '/'
    }, {
        menuId: 'wzdj',
        menuName: '信用卡还款',
        icon: 'card_payment.png',
        url: '/'
    }, {
        menuId: 'bkcx',
        menuName: '商家收款',
        icon: 'get_money.png',
        url: '/'
    }, {
        menuId: 'xykhk',
        menuName: '违章代缴',
        icon: 'car_payment.png',
        url: '/'
    }, {
        menuId: 'hyzx',
        menuName: '会员中心',
        icon: 'member_center.png',
        url: '/center'
    }, {
        menuId: 'hysj',
        menuName: '会员升级',
        icon: 'paperLevel.png',
        url: '/'
    } ]
}

export const menuData = (state = defaultState, action = {}) => {
    switch (action.type) {
        case Menu.GETMENUDATA:
            return state;
        default:
            return state;
    }
}