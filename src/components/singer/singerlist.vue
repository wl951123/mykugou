<template>
  <div>
    <search-module :title="title"></search-module>
    <rank-module :ranklists='list'></rank-module>
  </div>
</template>

<script>
import Vue from "vue";
import searchModule from "@/components/search/searchModule";
import rankModule from '@/components/Rank/rankmodule'
import { Cell } from "mint-ui";

Vue.component(Cell.name, Cell);
export default {
  data() {
    return {
      list: [],
      title: ""
    };
  },
  components: {
    searchModule,
    rankModule
  },
  async created() {
    let res = await this.$axios.get(
      `singer/list/${this.$route.params.id}?json=true`
    );
    this.list = res.data.singers.list.info;
    this.title = res.data.classname;
    console.log(this.list)
  }
};
</script>

<style>
</style>