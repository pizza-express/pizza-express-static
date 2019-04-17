import querydishesList, { create, update } from '@/services/dishes';
import { message } from 'antd';

export default {
  namespace: 'dishes',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(querydishesList, payload);
      console.log(response);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *submit({ payload }, { call }) {
      yield call(create, payload);
      message.success('提交成功');
    },
    *update({ payload }, { call }) {
      yield call(update, payload.id, payload);
      message.success('修改成功');
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
