<template>
  <div>
    <p>This is the Login component</p>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$store.commit("login");
      this.$router.replace({
        name: "dashboard",
      });
    },
  },
};
</script>