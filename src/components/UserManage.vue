<template>
<div class="container">
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">ID</span>
    </div>
    <input type="text" v-model="login_id" class="form-control">
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">PW</span>
    </div>
    <input type="password" v-model="login_password" class="form-control">
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">NAME</span>
    </div>
    <input type="text" v-model="name" class="form-control">
  </div>

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">LEVEL</span>
    </div>
    <button class="btn dropdown-toggle btn-light" type="button" id="selectLevel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ selected_level }}
    </button>
    <div class="dropdown-menu" aria-labelledby="selectLevel">
      <a class="dropdown-item" href="#" v-for="k in levels" :key="k" @click="() => selected_level=k">{{ k }}</a>
    </div>
  </div>

  <button class="btn btn-primary" @click="submit">적용하기</button>
</div>
</template>

<script>
import userStore from '../store/modules/users';
import * as actions from '../store/modules/users/types';
import * as getters from '../store/modules/users/getters';

import constants from '../constants';

export default {

  created() {
    
  },

  mounted() {
    if (this.user) {
      this.login_id = this.user.login_id
      this.login_password = this.user.login_password
      this.name = this.user.name
      this.selected_level = this.user.level;
    }
  },

  data() {
    return {
      id: parseInt(this.$route.params.id),
      login_id: '',
      login_password: '',
      name: '',
      priority: '',
      selected_level: 'bronze',
      levels: constants.LEVELS
    }
  },

  computed: {
    ...userStore.mapGetters([getters.USER_BY_ID, getters.USERS]),

    user() {
      let data = this[getters.USER_BY_ID](this.id);
      return data;
    }
  },

  methods: {
    ...userStore.mapActions([actions.USER_CREATE, actions.USER_UPDATE]),

    async submit() {
      let user = {};

      if (this.user) {
        user.id = this.user.id;
      }
      user.login_id = this.login_id;
      user.login_password = this.login_password;
      user.name = this.name;
      user.priority = constants.LEVELS.findIndex(x => x == this.selected_level);
      if (!user.id) {
        let res = await this[actions.USER_CREATE]({ user: user });
        alert('유저가 생성되었습니다.');
      } else {
        let res = await this[actions.USER_UPDATE]({ user: user });
        alert('업데이트가 완료되었습니다.');
      }
      this.$router.push('/users');
    }
  }
}
</script>

<style scoped>

</style>
