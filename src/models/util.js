import {list} from '../services/services'
import {Toast} from "antd-mobile";

export default {

  namespace: 'util',

  state: {
    list:[],
    time_list:null
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(
        async (location) => {
          await dispatch({
            type:'dealWithRouter',
            history,location
          });
        })
    }
  },
  effects: {
    *dealWithRouter({history,location}, { call, put,select}) {
      console.log(location.pathname);
    },
    *getTaskList({history,location}, { call, put,select}) {
      const response=yield call(list);
      const {success}=response;
      if(success){
        yield put({
          type: 'setList',
          payload: response["data"],
        });
      }
      else{
        Toast.fail(response["msg"],3);
      }
    },
  },

  reducers: {
    setList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    }
  },

};
