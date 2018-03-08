import * as home from './action-type';

let defualtState = {
  orderSum: '',
  name: '',
  phoneNo: '',
  imgpath: ''
}

export const formData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case home.SAVEFORMDATA:
      return {...state, ...{[action.dataType]: action.value}};
    case home.SAVEIMG:
      return {...state, ...{imgpath: action.path}};
    case home.CLEARDATA:
      return {...state, ...defaultState};
    default:
      return state;
  }
}