<template>
  <mt-navbar v-model="selected">
    <mt-tab-item v-for="item in nav" :key="item.name" :id="item.name">
      <router-link :to="item.path">{{item.meta.title}}</router-link>
    </mt-tab-item>
  </mt-navbar>
</template>

<script>
import nav from "@/router/nav";
import Vue from "vue";
import { Navbar, TabItem } from "mint-ui";

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
  data() {
    return {
      selected: "newSong",
      nav
    };
  },
  watch: {
    $route: {
      handler() {
        this.selected = this.$route.name;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {}
};
</script>

<style>
.mint-navbar {
  margin-top: 1.12rem;
  margin-bottom: .2rem;
  height: 1.05rem;
}
.mint-tab-item-label {
  font-size: 0.4rem;
}
</style>