import * as info from './action-type';
// import Immutable from 'immutable';

let defaultState = {
    userInfo: {},
    grandUserInfo: {}
};

export const user = (state = defaultState, action = {}) => {
    switch (action.type) {
        case info.SETUSERINFO:
            const stateChangeUser = {...state, ...action.user};
            return stateChangeUser;
        case info.GETUSERINFO:
            return state;
        case info.SETGRANDUSERINFO:
            const stateChangeGrandUser = {...state, ...action.grandUser};
            return stateChangeGrandUser;
        default:
            return state;
    }
}
