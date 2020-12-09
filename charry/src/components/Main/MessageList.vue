<template>
  <div>
      <div v-for="(msg,index) in msgs" v-bind:key="index">
            <span>{{msg.from.name}}</span>
            <p>{{msg.msg}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "MessageList",
  props: ["msgs"],
  data() {
    return {
      msgData: [],
    };
  },
};
</script>
