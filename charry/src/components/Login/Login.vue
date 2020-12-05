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
              <input type="text" id="email" v-model="email"/>
            </div>
            <div class="input-box">
              <label for="password">비밀번호</label>
              <input type="password" id="password" v-model="password" />
            </div>
            <router-link to="/sign-up" class="link">아직 계정이 없으신가요?</router-link>
          </form>
          <button class="button" @click="onLogin">로그인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { logo } from "@/assets/img";
import "../../assets/style/authGlobal.scss";
export default {
  name: "Login",
  data () {
      return {
          logo,
          email : '',
          password : ''
      }
  },
  methods: {
    onLogin() {

    },
  },
};
</script>
