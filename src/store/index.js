import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    songlist: [],
    hash: ''
  },
  mutations: {
    playSong(state, {
      hash
    }) {
      state.hash = hash
    },
    getSong(state, {
      list
    }) {
      state.songlist = list
    },
    back(state) {
      let aa = store.state.songlist.findIndex(item => item.hash === store.state.hash)
      if (aa > 0) {
        state.hash = state.songlist[aa - 1].hash
      }
    },
    next(state) {
      let aa = store.state.songlist.findIndex(item => item.hash === store.state.hash)
      if (aa < state.songlist.length - 1) {
        state.hash = state.songlist[aa + 1].hash
      }
    }
  },
  getters: {
    info(store) {
      let idx = store.state.songlist.findIndex(item => item.hash === store.state.hash);
      return store.state.songlist[idx]
    }
  }
})

export default store
