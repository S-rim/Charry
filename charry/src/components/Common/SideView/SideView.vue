<template>
  <div class="container">
    <img v-bind:src="mock" alt="Charry-로고" />
  </div>
</template>

<script>
import { mock } from "@/assets/img";
export default {
  data() {
    return {
      mock,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(197, 139, 255, 0.63);
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
  }
}
</style>
