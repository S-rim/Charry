<template>
  <header class="header-container">
    <h1>{{ title }}</h1>
    <div class="icon-container">
      <div class="inner-container">
        <img class="icon" v-bind:src="exit" />
        <p class="icon-description" @click="onSocketLeaveRoom">방 나가기</p>
      </div>
      <div class="inner-container">
        <img class="icon" v-bind:src="plus" />
        <p class="icon-description">방 만들기</p>
      </div>
      <div class="inner-container" @click="onLogout">
        <img class="icon" v-bind:src="logout" />
        <p class="icon-description">로그아웃</p>
      </div>
      <div class="inner-container" @click="onGetRoom">
        <img class="icon" v-bind:src="list" />
        <p class="icon-description">방 목록</p>
      </div>
    </div>
  </header>
</template>

<script>
import { plus, exit, logout, list } from "@/assets/img";
import { userInfo } from "../../api/user";
export default {
  data() {
    return {
      plus,
      exit,
      logout,
      list,
      roomdata: [],
      isShowList: false,
      title: "",
      userId: "",
    };
  },
  created() {
    userInfo().then((res) => {
      this.userId = res.data.id;
    });
  },
  methods: {
    onLogout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      this.$router.push({ path: "/" });
    },
    onGetRoom() {
      this.isShowList = !this.isShowList;
      this.$emit("onGetRoom", this.isShowList);
    },
    onSocketLeaveRoom() {
      this.$socket.emit("leave", {
        userId: this.userId,
        roomId: this.$route.params.roomid,
      });
      this.$emit("onSocketLeaveRoom", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  padding: 0.625rem 1.25rem 0px 1.25rem;
  border-bottom: 1px solid #70707033;
}

.header-container,
.icon-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.inner-container {
  margin-left: 1.25rem;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    transition: 0.4s;
  }
}

.icon {
  width: 35px;
  height: 35px;
}

.icon-description {
  font-size: 0.5rem;
  color: #707070;
}
</style>
