<template>
  <div class="chat-container">
    <section>
      <header>
        <img v-bind:src="logo" />
        <h1>CHARRY</h1>
      </header>
    </section>
  </div>
</template>

<script>
import { logo } from "@/assets/img";
export default {
  data() {
    return {
      logo,
    };
  },
  methods: {
    onAddRoom() {},
  },
};
</script>

<style lang="scss" scoped>
$color: #b378ed;
.chat-container {
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    h1 {
      color: $color;
      font-size: 5.688rem;
      margin: 0 0 0 0.625rem;
    }
  }
}
</style>
