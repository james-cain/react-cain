import * as info from './action-type';

let defaultState = {
    userInfo: {}
};

export const user = (state = defaultState, action = {}) => {
    console.log(state);
    switch (action.type) {
        case info.SETUSERINFO:
            const statebak = {...state, ...action.user};
            console.log('=============');
            console.log(statebak);
            return statebak;
        case info.GETUSERINFO:
            console.log(state);
            return state;
        default:
            return state;
    }
}
