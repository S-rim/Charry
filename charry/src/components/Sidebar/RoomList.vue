<template>
  <aside class="room-list-container">
    <div :key="data.id" v-for="data in roomdata">
      <ChatListItem v-bind:data="{ data }" @onSocketJoinRoom="onIsJoin"/>
    </div>
  </aside>
</template>

<script>
import ChatListItem from "./ChatListItem";
import { getRoom } from "../../api/chat";
export default {
  components: { ChatListItem },
  data() {
    return {
      roomdata: [],
      isShowList: false,
      title : ''
    };
  },
  created() {
    getRoom().then((res) => {
      console.log(res);
      this.roomdata = res.data.rooms;
      this.isShowList = true;
      this.$emit("created", this.isShowList);
    });
  },
  methods: {
      onIsJoin(data) {
          this.$emit("onIsJoin", false);
          this.title = data;
        //   this.$emit("onIsJoin", this.title)
      }
  },
};
</script>

<style lang="scss" scoped>
.room-list-container {
  float: right;
  width: 15%;
  position: absolute;
  top: 7%;
  right: 0;
  z-index: 0;
  height: 100vh;
  border-left: 1px solid #70707033;
}
</style>
