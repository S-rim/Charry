import Vue from "vue";
import Router from "vue-router";
import { Login, SignUp, ChatRoom } from "../components/index";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/chat-room",
      name: "ChatRoom",
      component: ChatRoom,
    },
  ],
});
