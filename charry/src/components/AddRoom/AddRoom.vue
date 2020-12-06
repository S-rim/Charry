<template>
  <div class="chat-container">
    <section>
      <header>
        <img v-bind:src="logo" />
        <h1>새로운 채팅방</h1>
      </header>
      <div class="input-container">
        <div>
          <div>
            <label for="roomName">채팅방 이름</label
            ><input type="text" v-model="room" />
          </div>
          <div class="button-container">
            <button @click="onAddRoom">생성</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { logo } from "@/assets/img";
import { createRoom } from '../../api/chat';
export default {
  data() {
    return {
      logo,
      room : ''
    };
  },
  methods: {
    onAddRoom() {
        createRoom(this.room)
        .then(() => {
            this.$router.push("/chat-room");
        })
    },
  },
};
</script>

<style lang="scss">
$color: #b378ed;
.chat-container {
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    h1 {
      color: $color;
      font-size: 2.688rem;
      margin: 0 0 0 0.625rem;
    }
  }

  .button-container {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  button {
    width: 7rem;
    margin-top: 1.5rem;
  }
}
</style>
