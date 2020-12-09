<template>
  <aside class="sideContainer">
    <Search @onSearchRoom="onRoomView" />
    <ChatLogView v-bind:searchdata="searchData" />
  </aside>
</template>

<script>
import Search from "../Search/Search";
import ChatLogView from "./ChatLogView";
export default {
  components: { Search, ChatLogView },
  data() {
    return {
      searchData: [],
    };
  },
  methods: {
    onRoomView(data) {
      this.searchData.push(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.sideContainer {
  width: 22%;
  border-right: 1px solid #70707033;
  padding-top: 20px;
  height: 100vh;
  display: inline-block;
}
</style>
