<template>
  <div class="container">
    <h1>로그인</h1>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">ID</span>
      </div>
      <input type="text" v-model="id" class="form-control">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">PW</span>
      </div>
      <input type="password" v-model="password" class="form-control">
    </div>
    <button class="btn btn-primary" @click="login">로그인</button>
  </div>
</template>

<script>
import userStore from '../store/modules/users'
import * as actions from '../store/modules/users/types'

export default {
  name: 'Login',

  methods: {
    ...userStore.mapActions([actions.LOGIN]),
    
    login(e) {
      let router = this.$router;
      this[actions.LOGIN]({ login_id: this.id, login_password: this.password })
        .then(() => {
          router.push({ path: '/' });
        });
     }
  },

  data() {
    return {
      id: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>


