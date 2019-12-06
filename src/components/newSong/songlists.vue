<template>
  <div class="songlists">
    <mt-cell
      :title="item.filename"
      v-for="item in data"
      :key="item.hash"
      @touchstart.native="playSong(item)"
    >
      <img slot="icon" src="@/assets/download_icon_2.png" class="icon-img" />
    </mt-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell } from "mint-ui";
Vue.component(Cell.name, Cell);
export default {
  props: {
    data: Array
  },
  methods: {
    playSong(item) {
      this.$store.commit("playSong", { hash: item.hash });
    }
  },
  watch: {
    data(){
      this.$store.commit("getSong", { list: this.data });
    }
  }
};
</script>

<style>
.songlists .icon-img {
  width: 0.4rem;
  height: 0.4rem;
  float: right;
}
.songlists .mint-cell-text {
  font-size: 0.35rem;
  display: inline-block;
  width: 250px;
  /* background-color: blue; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.songlists .mint-cell-wrapper {
  border-bottom: 1px solid #eeeeee;
}
</style>