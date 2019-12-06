<template>
  <div id="app">
    <div class="header">
      <mt-header fixed>
        <router-link to="/" slot="left">
          <a class="logo" href="http://m.kugou.com" title="酷狗音乐"></a>
          <span class="download">下载酷狗</span>
        </router-link>
        <mt-button icon="search" slot="right" @click.native="gotoSearch"></mt-button>
      </mt-header>
      <router-view name="navBar"></router-view>
      <router-view name="search"></router-view>
      <router-view></router-view>
      <player></player>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Header } from "mint-ui";
import player from "@/components/player/player";
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.filter("imgFileter", function(a) {
  return a.replace(/{size}/, "400");
});
export default {
  name: "App",
  methods: {
    gotoSearch() {
      window.location.hash = "/search";
    }
  },
  components: {
    player
  }
};
</script>

<style>
.logo {
  display: inline-block;
  width: 2.6rem;
  height: 0.55rem;
  background: url(./assets/logo.png) no-repeat;
  background-size: 100% 100%;
}
.download {
  display: inline-block;
  text-align: center;
  color: white;
  border: 0.025rem solid white;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0px 0.25rem;
  border-radius: 0.125rem;
  position: relative;
  top: -0.125rem;
  margin-left: 0.5rem;
}
.mint-header {
  height: 1.125rem;
}
</style>
