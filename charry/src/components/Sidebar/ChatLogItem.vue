<template>
  <div class="chat-log-item-box">
    <h3 class="chat-room-title">{{ data.data.title }}</h3>
    <button @click="onJoinRoom">참가</button>
  </div>
</template>

<script>
import { joinRoom } from "../../api/chat";
export default {
  props: ["data"],
  methods: {
    onJoinRoom() {
      joinRoom(this.data.data.id)
        .then(() => {
          alert("참가가 완료되었습니다. 방 목록에서 확인하세요.")
        })
        .catch(() => {
          alert("방 참가 실패. 다시 시도하세요.");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-log-item-box {
  margin-top: 20px;
}
</style>
