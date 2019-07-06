import * as mutations from './types';
import actions from './actions';

export default {
  [mutations.LOGIN](state, user) {
    state.user = user;
  },

  [mutations.LOGOUT](state) {
    state.user = null;
  },

  [mutations.USER_LIST](state, users) {
    state.users = users;
  },

  [mutations.USER_CREATE](state, user) {
    state.users.push(user);
  },

  [mutations.USER_UPDATE](state, user) {
    let u = state.users.find(u => u.id === user.id);
    u = user;
  },

  [mutations.USER_REMOVE](state, user) {
    let index = state.users.findIndex(u => u.id === user.id);
    state.users.splice(index, 1);
  }
}