<template>
  <div class="form-container">
    <input
      class="message-input"
      placeholder="보낼 메세지를 입력하세요"
      v-model="inputMessage"
      @keyup.enter="onSubmitMessage"
    />
    <button class="submit-button" @click="onSubmitMessage">전송</button>
  </div>
</template>

<script>
import { userInfo } from "../../api/user";
export default {
  name: "MessageForm",
  data() {
    return {
      inputMessage: "",
      userId: "",
    };
  },
  created() {
    userInfo().then((res) => {
      this.userId = res.data.id;
    });
  },
  methods: {
    onSubmitMessage() {
      if (this.inputMessage.length == 0) alert("보낼 메세지를 입력하세요!");
      else {
        this.$emit("onSubmitMessage", this.inputMessage);
        this.$socket.emit("chat", {
          roomId: this.$route.params.roomid,
          userId: this.userId,
          content: this.inputMessage,
        });
        this.inputMessage = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 80%;
  position: absolute;
  bottom: 1%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
}

.message-input {
  width: 90%;
  height: 100%;
  margin-left: 25px;
}

.submit-button {
  background-color: #b378ed;
  border: none;
  color: white;
  height: 45px;
  border-radius: 50px;
  font-size: 19px;
  outline: none;
  cursor: pointer;
  width: 7%;
}
</style>
