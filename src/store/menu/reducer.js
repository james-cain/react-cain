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
        url: '/soon'
    }, {
        menuId: 'sjsk',
        menuName: '增值服务',
        icon: 'violation_payment.png',
        url: '/soon'
    }, {
        menuId: 'wzdj',
        menuName: '网乐购物',
        icon: 'shopping.png',
        url: '/soon'
    }, {
        menuId: 'bkcx',
        menuName: '银行便民',
        icon: 'get_money.png',
        url: '/soon'
    }, {
        menuId: 'xykhk',
        menuName: '银行服务',
        // menuName: '用卡指南',
        icon: 'card_guide.png',
        url: '/soon'
    }, {
        menuId: 'hyzx',
        // menuName: '会员中心',
        menuName: '银行热线',
        icon: 'member_center.png',
        url: '/center'
    }, {
        menuId: 'hysj',
        // menuName: '会员升级',
        menuName: '使用帮助',
        icon: 'paperLevel.png',
        url: '/upgrade'
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