<template>
  <div class="user-container">
    <div class="user-inner">
      <header class="auth-header">
        <img v-bind:src="logo" />
        <h1>CHARRY</h1>
      </header>
      <p>다양한 사람들과 소통해보세요!</p>
      <div class="input-container">
        <div>
          <form>
            <div class="input-box">
              <label for="email">이메일</label>
              <input type="text" v-model="email" />
            </div>
            <div class="input-box">
              <label for="email">닉네임</label>
              <input type="text" v-model="nickname" />
            </div>
            <div class="input-box">
              <label for="password">비밀번호</label>
              <input type="password" v-model="password" />
            </div>
            <router-link to="/" class="link"
              >이미 계정이 있으신가요?</router-link
            >
          </form>
          <button class="button" @click="onSignUp">회원가입</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "../../api/user";
import { logo } from "@/assets/img";
import "../../assets/style/authGlobal.scss";
export default {
  name: "SignUp",
  data() {
    return {
      logo,
      email: "",
      nickname: "",
      password: "",
    };
  },
  methods: {
    onSignUp() {
      register(this.email, this.password, this.nickname)
        .then((res) => {
          this.$router.push("/")
        })
        .catch((err) => {
          alert("회원가입에 실패했습니다. 다시 시도하세요.");
        });
    },
  },
};
</script>
