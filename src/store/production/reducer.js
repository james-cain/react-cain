import * as pro from './action-type';
import Immutable from 'immutable';

let defaultState = {
  dataList: [],
}

export const proData = (state = defaultState, action) => {
  let imDataList;
  let imItem;
  switch (action.type) {
    case pro.GETPRODUCTION:
      return {...state, ...action};
    case pro.TOGGLESELECT:
      imDataList = Immutable.List(state.dataList);
      imItem = Immutable.Map(state.dataList[action.index]);
      imItem = imItem.set('selectStatus', !imItem.get('selectStatus'));
      imDataList = imDataList.set(action.index, imItem);
      // redux必须返回一个全新的state
      return {...state, ...{dataList: imDataList.toJS()}};
    default:
      return state;
  }
}