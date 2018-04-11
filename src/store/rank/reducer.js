import * as rankInfo from './action-type';

let defaultState = {
    userrank: [],
    cardrank: [],
    loanrank: []
}

function compare(property) {
    return (a, b) => {
        let value1 = a[property];
        let value2 = b[property];
        return value2 - value1;
    }
}

export const rank = (state = defaultState, action = {}) => {
  switch (action.type) {
    case rankInfo.SETRANKINFO:
      let rankBak = {};
      if (action.rank) {
        rankBak.userrank = action.rank.userrank;
        rankBak.cardrank = action.rank.cardrank;
        rankBak.loanrank = action.rank.loanrank;
      }
      console.log(Object.assign({}, state, rankBak));
      return Object.assign({}, state, rankBak);
    default:
      return state;
  }
}