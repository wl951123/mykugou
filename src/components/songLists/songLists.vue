<template>
    <div>
        <rank-module :ranklists='ranklists'></rank-module>
    </div>
</template>

<script>
import rankModule from '@/components/Rank/rankmodule'
import Vue from "vue";
import { Cell } from "mint-ui";

Vue.component(Cell.name, Cell);
export default {
    data(){
        return {
            ranklists:[]
        }
    },
    async created() {
      let res = await this.$axios.get('plist/index&json=true')
      this.ranklists = res.data.plist.list.info
      console.log(this.ranklists)
    },
    components:{
        rankModule
    }
}
</script>

<style>

</style>