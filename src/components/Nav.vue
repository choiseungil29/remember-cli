<template>
  <div id="header" class="navbar">
    <router-link to='/' class="navbar-brand"><span class="title">Remember</span></router-link>
    <router-link to='/users' class="nav-item"><span>유저 목록</span></router-link>
    <a href="#" @click="logout" class="nav-item"><span>로그아웃</span></a>
  </div>
</template>

<script>
import userStore from '../store/modules/users';
import * as actions from '../store/modules/users/types';

export default {
  name: 'Nav',

  methods: {
    ...userStore.mapActions([actions.LOGOUT]),

    logout() {
      let router = this.$router;
      this[actions.LOGOUT]()
        .then(() => {
          router.push({ path: '/login' });
        });
    }
  }
}
</script>

<style scoped>
div#header {
  display: inline-block;
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
}

.nav-item {
  margin-left: 10px;
}
</style>