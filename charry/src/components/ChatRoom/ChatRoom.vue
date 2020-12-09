<template>
  <div>
    <message-list :msgs="msgDatas" />
    <message-form @onSubmitMessage="sendMessage" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { MessageForm, MessageList } from "../Main";
import Constant from "../../constant/index";

export default {
  name: "ChatRoom",
  data() {
    return {
      datas: [],
    };
  },
  components: {
    "message-list": MessageList,
    "message-form": MessageForm,
  },
  computed: {
    ...mapState({
      msgDatas: (state) => state.msgDatas,
    }),
  },
  methods: {
    ...mapMutations({
      pushMsgData: Constant.PUSH_MSG_DATA,
    }),
    sendMessage(msg) {
      this.pushMsgData({
        from: {
          name: this.$route.params.username,
        },
        msg,
      });
      this.$sendMessage({
        name: this.$route.params.username,
        msg,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  z-index: 1;
}
</style>
