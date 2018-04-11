import * as rankInfo from './action-type';
import API from '../../api/api';

export const getRank = () => {
  return async dispatch => {
      try {
          let rank = await API.getRank();
          console.log('============');
          console.log(rank);

          dispatch({
              type: rankInfo.SETRANKINFO,
              rank
          });
      } catch(err) {
          console.error(err);
      }
  }
}