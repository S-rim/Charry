<template>
  <div class="auth-container">
    <sign-up />
    <side-view />
  </div>
</template>

<script>
import { SignUp, SideView } from "./index";
export default {
  components: { "sign-up": SignUp, "side-view" : SideView },
};
</script>
