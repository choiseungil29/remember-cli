import * as actions from './types';
import axios from 'axios';

export default {
  [actions.LOGIN]({ commit }, { login_id, login_password }) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/login`, { login_id, login_password }, { withCredentials: true })
        .then(res => {
          commit(actions.LOGIN, res.data);
          resolve();
        }).catch(err => {
          reject(err);
        })
    })
  },

  [actions.LOGOUT]({ commit }) {
    return new Promise((resolve, reject) => {
      axios.post('/api/logout', {}, { withCredentials: true })
        .then(res => {
          commit(actions.LOGOUT);
          resolve();
        }).catch(err => {
          reject(err);
        })
    });
  },

  [actions.USER_LIST]({ commit }) {
    axios.get('/api/users', { withCredentials: true })
      .then(res => {
        commit(actions.USER_LIST, res.data);
      })
  },

  [actions.USER_CREATE]({ commit }, { user }) {
    return new Promise((resolve, reject) => {
      axios.post('/api/users/create', 
        { login_id: user.login_id, login_password: user.login_password, name: user.name, priority: user.priority }, 
        { withCredentials: true })
        .then(res => {
          commit(actions.USER_CREATE, res.data);
          resolve(res.data);
        }).catch(err => {
          alert(err);
          reject(err);
        })
      })
  },

  [actions.USER_UPDATE]({ commit }, { user }) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/users/${user.id}/update`,
        { login_id: user.login_id, login_password: user.login_password, name: user.name, priority: user.priority }, 
        { withCredentials: true })
        .then(res => {
          commit(actions.USER_UPDATE, res.data);
          resolve(res.data);
        }).catch(err => {
          alert(err);
          reject(err);
        })
      })
  },

  [actions.USER_REMOVE]({ commit }, { user }) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/users/${user.id}/remove`, {}, { withCredentials: true })
        .then(res => {
          commit(actions.USER_REMOVE, user)
          resolve(res.data);
        }).catch(err => {
          alert(err);
          reject(err);
        })
    })
  }
}