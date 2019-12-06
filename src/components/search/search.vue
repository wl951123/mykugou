<template>
  <div>
    <search-module :title='title'></search-module>
  </div>
</template>

<script>
import searchModule from '@/components/search/searchModule'

export default {
  data(){
    return {
      title:"搜索"
    }
  },
  components:{
    searchModule
  }
};
</script>

<style>

</style>