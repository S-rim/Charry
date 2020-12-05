<template>
  <div class="auth-container">
    <login />
    <side-view />
  </div>
</template>

<script>
import { Login, SideView } from "./index";
export default {
  name: "Login",
  data() {
    return {};
  },
  components: { login: Login, "side-view": SideView },
};
</script>

<style lang="scss">
.auth-container {
    display: flex;
}
</style>
