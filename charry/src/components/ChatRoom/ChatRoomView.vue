<template>
  <div class="chatViewContainer">
    <Sidebar @inGetRoom="onGetChatRoom" />
    <div class="rightContainer">
      <div>
        <Header @onGetRoom="onShowRoomList" />
      </div>
      <div class="mainContainer">
        <AddRoom v-if="isJoin" />
        <ChatRoom v-else />

        <RoomList v-if="isShowList" @onIsJoin="onShowRoom" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import AddRoom from "./AddRoom";
import RoomList from "../Sidebar/RoomList";
import ChatRoom from "../ChatRoom/ChatRoom";

export default {
  components: { Header, Sidebar, AddRoom, RoomList, ChatRoom },
  data() {
    return {
      isJoin: true,
      isShowList: false,
      userId: "",
      content: "",
      nickname: "",
    };
  },
  created() {
    this.$socket.on("connect");
    this.$socket.on("receive", (nickname, content) => {
      this.nickname = nickname;
      this.content = content;
      console.log(this.nickname, this.content);
    });
  },
  methods: {
    onGetChatRoom(data) {
      this.isJoin = data;
      console.log(data);
    },
    onShowRoom(data) {
      this.isJoin = data;
      console.log(data);
    },
    onShowRoomList(data) {
      this.isShowList = data;
      console.log(this.isShowList);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}

.chatViewContainer {
  display: flex;
}

.rightContainer {
  width: 100%;
}
x .mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
