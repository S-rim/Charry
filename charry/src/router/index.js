import Vue from "vue";
import Router from "vue-router";
import { Login, SignUp, ChatRoom, AddRoom } from "../components/index";

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
        path: "/chat-room/:roomid/:username/",
        name: "ChatRoom",
        component: ChatRoom,
      },
    {
        path : "/add-room",
        name : "AddRoom",
        component : AddRoom
    }
  ],
});
