<template>
  <div class='search'>
    <mt-header :title="title">
      <span slot="left" @click='goback'>
        <mt-button icon="back" class="aa"></mt-button>
      </span>
    </mt-header>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Button,
  Header
} from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button)

export default {
  methods:{
    goback(){
      this.$router.go(-1)
    }
  },
  props:{
    title:String
  }
};
</script>

<style>
.search .mint-header {
  margin-top: 1.125rem;
  height: 1.05rem;
  font-size: .35rem;
  background-color: white;
  color: #333
}
.search .aa {
    color: #999
}
</style>