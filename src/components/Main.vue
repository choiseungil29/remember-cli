<template>
  <div class="container">
    <p><span>UID : </span>{{ user.id }}</p>
    <p><span>NAME : </span>{{ user.name }}</p>
    <p><span>LOGIN_ID : </span>{{ user.login_id }}</p>
    <p><span>CREATED_AT : </span>{{ new Date(user.created_at) }}</p>
  </div>
</template>

<script>

export default {
  name: 'Main',

  created() {

  },

  mounted() {
  },

  computed: {
    user() {
      return this.$store.state.users.user;
    }
  },

  methods: {
    
  }

}
</script>

<style scoped>

</style>
