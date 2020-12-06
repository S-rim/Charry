<template>
  <div>
    <MessageList />
    <MessageForm />
  </div>
</template>

<script>
import MessageList from "../Main/MessageList";
import MessageForm from "../Main/MessageForm";

export default {
  name: "ChatRoom",
  components: { MessageList, MessageForm },
  data() {
    return {
      messageData: []
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
}
</style>
