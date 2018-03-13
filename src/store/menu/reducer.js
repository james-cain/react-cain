import * as Menu from './action-type';

let defaultState = {
    menuList: [{
        menuId: 'bxyk',
        menuName: '办信用卡',
        icon: 'card_check@2x.png',
        url: 'www.baidu.com'
    }, {
        menuId: 'dksq',
        menuName: '贷款申请',
        icon: 'loan@2x.png',
        url: 'www.baidu.com'
    }, {
        menuId: 'sjsk',
        menuName: '商家收款',
        icon: 'violation_payment@2x.png',
        url: 'www.baidu.com'
    }, {
        menuId: 'wzdj',
        menuName: '违章代缴',
        icon: 'parking_img@2x.png',
        url: 'www.baidu.com'
    }, {
        menuId: 'bkcx',
        menuName: '办卡查询',
        icon: 'card_search@2x.png',
        url: 'www.baidu.com'
    }, {
        menuId: 'xykhk',
        menuName: '信用卡还款',
        icon: 'card_repayment@2x.png',
        url: 'www.baidu.com'
    }, {
        menuId: 'hyzx',
        menuName: '会员中心',
        icon: 'member_center@2x.png',
        url: 'www.baidu.com'
    }, {
        menuId: 'hysj',
        menuName: '会员升级',
        icon: 'paperLevel@2x.png',
        url: 'www.baidu.com'
    }, {
        menuId: 'xtgg',
        menuName: '系统公告',
        icon: 'notice_img@2x.png',
        url: 'www.baidu.com'
    }, ]
}

export const menuData = (state = defaultState, action = {}) => {
    switch (action.type) {
        case Menu.GETMENUDATA:
            return state;
        default:
            return state;
    }
}