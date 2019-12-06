<template>
  <div>
    <mt-swipe :auto="4000" class="bb">
      <mt-swipe-item v-for="item in data.banner" :key="item.id">
        <img :src="item.imgurl" :alt="item.title" />
      </mt-swipe-item>
    </mt-swipe>
    <song-lists :data="data.data"></song-lists>
  </div>
</template>

<script>
import songLists from "@/components/newSong/songlists";
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  data() {
    return {
      data: []
    };
  },
  async created() {
    let res = await this.$axios.get("?json=true");
    this.data = res.data;
    console.log(this.data)
  },
  components: {
    songLists
  }
};
</script>

<style lang='less'>
.bb {
  height: 3rem;
  img {
    width: 100%;
  }
}
</style>