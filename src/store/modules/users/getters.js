export const USERS = 'USERS';
export const USER_BY_ID = 'USER_BY_ID';

export default {
  [USERS]: state => state.users,
  [USER_BY_ID]: state => id => state.users.find(u => u.id === id)
};