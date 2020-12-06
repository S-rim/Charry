<template>
  <div>
    <chat-room />
  </div>
</template>

<script>
import { ChatRoomView } from "./index";
export default {
  components: { "chat-room": ChatRoomView },
};
</script>

<style lang="scss" scoped></style>
