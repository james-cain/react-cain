import * as teamInfo from './action-type';
import API from '../../api/api';

export const getTeam = () => {
  return async dispatch => {
      try {
          let team = await API.getTeam();
          console.log('============');
          console.log(team);

          dispatch({
              type: teamInfo.SETTEAMINFO,
              team
          });
      } catch(err) {
          console.error(err);
      }
  }
}