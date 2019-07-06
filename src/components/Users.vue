<template>
<div class="container">
  <button class="btn btn-primary" @click="() => this.$router.push('/users/create')">유저 생성</button>
  <table class="table table-hover">
    <thead>
      <tr>
        <td>ID</td>
        <td>이름</td>
        <td>LOGIN_ID</td>
        <td>PW</td>
        <td>PRIORITY(등급)</td>
        <td>생성일</td>
        <td>수정</td>
        <td>삭제</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="u in users" :key="u.id">
        <td>{{ u.id }}</td>
        <td>{{ u.name }}</td>
        <td>{{ u.login_id }}</td>
        <td>{{ u.login_password }}</td>
        <td>{{ u.level }}</td>
        <td>{{ new Date(u.created_at) }}</td>
        <td><router-link :to="'/users/' + u.id"><button class="btn btn-primary">수정</button></router-link></td>
        <td><button class="btn btn-primary" @click="remove(u)">삭제</button></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import userStore from '../store/modules/users';
import * as actions from '../store/modules/users/types';
import * as getters from '../store/modules/users/getters';

export default {
  name: 'users',

  created() {
    this[actions.USER_LIST]();
  },

  computed: {
    ...userStore.mapGetters([getters.USERS]),

    users() {
      return this[getters.USERS];
    }
  },

  methods: {
    ...userStore.mapActions([actions.USER_LIST, actions.USER_REMOVE]),

    async remove(user) {
      let res = await this[actions.USER_REMOVE]({ user });
    }
  }
}
</script>

<style scoped>

</style>
