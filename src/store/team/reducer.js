import * as teamInfo from './action-type';

let defaultState = {
  childTeam: [],
  grandChildTeam: [],
}

export const team = (state = defaultState, action = {}) => {
  switch (action.type) {
    case teamInfo.SETTEAMINFO:
      let teamBak = {};
      if (action.team) {
        teamBak.childTeam = action.team.child;
        teamBak.grandChildTeam = action.team.grandChild;
      }
      return Object.assign({}, state, teamBak);
    default:
      return state;
  }
}