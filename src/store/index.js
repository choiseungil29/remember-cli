import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users
  },
  strict: debug
});