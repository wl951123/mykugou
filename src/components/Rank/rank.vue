<template>
  <div>
    <rank-module :ranklists='rankLists'></rank-module>
  </div>
</template>

<script>
import rankModule from '@/components/Rank/rankmodule'
import Vue from "vue";
import { Cell } from "mint-ui";

Vue.component(Cell.name, Cell);
export default {
  data() {
    return {
      rankLists: []
    };
  },
  async created() {
    let res = await this.$axios.get("rank/list&json=true");
    this.rankLists = res.data.rank.list;
    console.log(this.rankLists);
  },
  components:{
    rankModule
  }
};
</script>

<style>

</style>