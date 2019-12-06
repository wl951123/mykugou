<template>
  <div class="ranklist">
    <mt-cell
      v-for="item in ranklists"
      :key="item.id"
      :title="item.rankname || item.specialname || item.singername"
      is-link
      :to="goto(item)"
      class="list"
    >
      <img class="img" slot="icon" :src="item.imgurl | imgFileter" />
    </mt-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell } from "mint-ui";

Vue.component(Cell.name, Cell);
export default {
  props: {
    ranklists: Array
  },
  methods: {
    goto(item) {
      if (item.rankid) {
        return { name: "rankInfo", params: { id: item.rankid } };
      } else if (item.specialid) {
        return { name: "plistList", params: { id: item.specialid } };
      } else {
        return { name: "singerInfo", params: { id: item.singerid } };
      }
    }
  }
};
</script>

<style>
.ranklist {
  margin-top: 0.125rem;
}
.ranklist .list {
  padding: 10px;
  margin-top: 1px;
}
.ranklist .img {
  width: 1.875rem;
  height: 1.875rem;
}
.ranklist .mint-cell-mask::after {
  border-bottom: 1px solid #eee;
}
.ranklist .mint-cell-text {
  overflow: hidden;
  width: 4.3rem;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
  font-size: 0.35rem;
}
</style>