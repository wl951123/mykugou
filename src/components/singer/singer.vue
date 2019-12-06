<template>
  <div class="singer">
    <mt-cell
      v-for="item in list"
      :key="item.id"
      :title="item.classname"
      :to="{name:'singerlist',params:{id:item.classid}}"
      is-link
      class="list"
    ></mt-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell } from "mint-ui";

Vue.component(Cell.name, Cell);
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    let res = await this.$axios.get("singer/class&json=true");
    console.log(res);
    this.list = res.data.list;
  }
};
</script>

<style lang='less'>
.singer {
    padding: 0 0.125rem;
    background-color: white;
    overflow: hidden;
    .mint-cell{
        min-height: .975rem;
        background-color: #f3f3f3;
        border:1px solid #ccc;
        border-radius: .125rem;
        height: .975rem;
        &:nth-of-type(1){
            margin-top:.5rem
        };
        &:nth-of-type(3n+2){
            margin-top: .5rem
        }
    }
    .mint-cell-title{
        font-size:.35rem;
        color:#333
    }
}
</style>