<template>
  <div class="chat-log-item-box">
    <h3 class="chat-room-title">{{ data.data.title }}</h3>
    <div>
      <button @click="onSocketJoinRoom">대화하기</button>
      <button
        class="delete-button"
        @click="onDestoryRoom"
        v-if="this.data.data.isHost"
      >
        삭제
      </button>
    </div>
  </div>
</template>

<script>
import { destoryRoom, getRoomTitle } from "../../api/chat";
export default {
  props: ["data"],
  data() {
    return {
      isJoin: false,
      roomdata: [],
    };
  },
  methods: {
    onDestoryRoom() {
      destoryRoom(this.data.data.id)
        .then(() => {
          alert("방 삭제가 완료되었습니다.");
        })
        .catch(() => {
           alert("방 삭제에 실패했습니다. 다시 시도하세요.");
        });
    },
    onSocketJoinRoom() {
      this.$socket.emit("join", this.data.data.id);
      this.isJoin = true;
      this.$emit("onSocketJoinRoom", this.isJoin);

      getRoomTitle(this.data.data.id)
      .then((res) => {
          this.$emit("onSocketJoinRoom", res.data.title);
      })
    },
  },
};
</script>

<style lang="scss">
.chat-log-item-box {
  border-top: 1px solid #70707033;
  padding: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.chat-room-title {
  font-weight: 500;
}

.delete-button {
  margin-left: 1rem;
  border: 1px solid #b378ed;
  color: #b378ed;
  background-color: white;
}
</style>
