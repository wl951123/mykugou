import Vue from 'vue'
import Router from 'vue-router'
import search from '../components/search/search'
import searchLists from '../components/search/searchLists'
import singerList from '../components/singer/singerlist'
import rankInfo from '../components/Rank/rankInfo'
import plistList from '../components/songLists/plistList'
import singerInfo from '../components/singer/singerInfo'
Vue.use(Router)

import nav from '@/router/nav'
export default new Router({
  routes: [
    ...nav,
    {
      path: '/search',
      name: 'search',
      components: {
        search,
        default: searchLists
      }
    },
    {
      path: '/singer/list/:id',
      name: 'singerlist',
      component: singerList
    }, {
      path: '/rank/info/:id',
      name: "rankInfo",
      component: rankInfo
    }, {
      path: '/plist/list/:id',
      name: "plistList",
      component: plistList
    },{
      path: '/singer/info/:id',
      name: "singerInfo",
      component: singerInfo
    }
  ]
})
