<template>
  <div class="search-container">
    <input type="text" v-model="searchInput" />
    <img v-bind:src="search" @click="onSearchRoom" />
  </div>
</template>

<script>
import { search } from "@/assets/img";
import { roomSearch } from "../../api/chat";
export default {
  data() {
    return {
      search,
      searchInput: "",
      searchData: [],
    };
  },
  methods: {
    onSearchRoom() {
      roomSearch(this.searchInput)
        .then((res) => {
          this.searchData = res.data.rooms;
          this.$emit("onSearchRoom", this.searchData);
        })
        .catch(() => {
          alert("방 검색 실패. 다시 시도하세요.");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-container {
  border: 1px solid #707070;
  border-radius: 3.125rem;
  width: 93%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.625rem 0 0.625rem;

  input {
    border: none;
    outline: none;
    width: 80%;
    height: 80%;
    font-size: 1.25rem;
    margin-right: 0.625rem;
  }

  img {
    width: 1.563rem;
    height: 1.563rem;
    cursor: pointer;
  }
}
</style>
