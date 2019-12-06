import newSong from '@/components/newSong/newSong'
import rank from '@/components/Rank/rank'
import songLists from '@/components/songLists/songLists'
import singer from '@/components/singer/singer'
import navBar from '@/components/top/navBar'
const nav = [{
  path: '/',
  name: 'newSong',
  meta: {
    title: "新歌",
    id: 1
  },
  components:{
    default:newSong,
    navBar
  }
}, {
  path: '/rank',
  name:'rank',
  meta: {
    title: "排行",
    id: 2
  },
  components:{
    default:rank,
    navBar
  }
}, {
  path: '/songlists',
  name:'songLists',
  meta: {
    title: "歌单",
    id: 3
  },
  components:{
    default:songLists,
    navBar
  }
}, {
  path: '/singer',
  name:'singer',
  meta: {
    title: "歌手",
    id: 4
  },
  components:{
    default:singer,
    navBar
  }
}]

export default nav