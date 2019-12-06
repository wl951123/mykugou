<template>
  <div class="singerInfo">
    <div class="singerImg" :style="{'background':'url(' +info.imgurl.replace(/{size}/,'400')+')  center no-repeat'}">
        <div class="top">

        </div>
    </div>
    <mt-cell
      v-for="item in list"
      :key="item.hash"
      :title="item.filename.split('- ')[1]"
      :label="item.filename.split('- ')[0]"
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
      list: [],
      info: null
    };
  },
  async created() {
    let res = await this.$axios.get(
      `singer/info/${this.$route.params.id}?json=true`
    );
    this.list = res.data.songs.list;
    this.info = res.data.info;
  }
};
</script>

<style lang='less'>
.singerInfo {
  margin-top: 1.125rem;
  .singerImg {
    width: 100%;
    height: 4.65rem;
    .top{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25)
    }
  }
  .mint-cell-text {
    font-size: 0.3rem;
    color: #333;
  }
  .mint-cell-wrapper {
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>