<template>
  <div>
    <div :key="data.id" v-for="data in searchdata[0]">
      <ChatLogItem v-bind:data="{ data }" />
    </div>
  </div>
</template>

<script>
import ChatLogItem from "./ChatLogItem";
export default {
  components: { ChatLogItem },
  props: ["searchdata"],
};
</script>
