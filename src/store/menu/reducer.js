import * as Menu from './action-type';

let defaultState = {
    menuList: [{
        menuId: 'bxyk',
        menuName: '办信用卡',
        icon: 'icon-xinyongqia',
        url: 'www.baidu.com'
    }]
}

export const menuData = (state = defaultState, action = {}) => {
    switch (action.type) {
        case Menu.GETMENUDATA:
            return state;
        default:
            return state;
    }
}