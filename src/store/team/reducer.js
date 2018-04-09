import * as teamInfo from './action-type';
import DateUtil from '@/utils/dateUtil';

let defaultState = {
  childTeam: [],
  grandChildTeam: [],
}
const level = [
  {
      id: 1000,
      name: '普卡'
  },
  {
      id: 3,
      name: '金卡'
  },
  {
      id: 2,
      name: '白金卡'
  },
  {
      id: 1,
      name: '钻石卡'
  },
  {
      id: 0,
      name: '黑金卡'
  }
];

export const team = (state = defaultState, action = {}) => {
  switch (action.type) {
    case teamInfo.SETTEAMINFO:
      let teamBak = {};
      if (action.team) {
        teamBak.childTeam = action.team.child;
        teamBak.childTeam.forEach((item) => {
          level.forEach((val) => {
            if (val.id === item.UserLevel) {
              item.levelName = val.name;
              item.UserAddTimeFormat = DateUtil.formatFunc(new Date(item.UserAddTime * 1000), 'yyyy-MM-dd');
            }
          });
        });
        teamBak.grandChildTeam = action.team.grandChild;
        teamBak.grandChildTeam.forEach((item) => {
          level.forEach((val) => {
            if (val.id === item.UserLevel) {
              item.levelName = val.name;
              item.UserAddTimeFormat = DateUtil.formatFunc(new Date(item.UserAddTime * 1000), 'yyyy-MM-dd');
            }
          });
        });
      }
      console.log(Object.assign({}, state, teamBak));
      return Object.assign({}, state, teamBak);
    default:
      return state;
  }
}