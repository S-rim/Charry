import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import io from "socket.io-client";
import "@/assets/style/global.scss";
Vue.config.productionTip = false;

export const socket = io(process.env.VUE_APP_BASE_URL);
Vue.prototype.$socket = socket;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
