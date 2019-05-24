import { queryPrivateCourse } from '@/services/demo';
// import { setAuthority } from '@/utils/authority';
// import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'course',

  state: {
    status: undefined,
  },

  effects: {
    *fetchPrivateCourse({ payload }, { call, put }) {
      const response = yield call(queryPrivateCourse, payload);
      yield put({
        type: 'courseHandle',
        payload: response,
      });
    },
  },

  reducers: {
    courseHandle(state, { payload }) {
      // setAuthority('user');
      // reloadAuthorized();
      return {
        ...state,
        privateCourse: payload,
      };
    },
  },
};
