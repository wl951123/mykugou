<template>
  <div>
    <div v-if="isReady" style="height:60px"></div>
    <div class="player" :style="{bottom:bottom}">
      <a href="javascript:;" class="singer-link">
        <img :src="imgUrl" alt />
      </a>
      <div class="text">
        <p>{{songInfo.fileName.split(' - ')[1]}}</p>
        <p>{{songInfo.fileName.split(' - ')[0]}}</p>
      </div>
      <div class="right">
        <i class="iconfont icon-back1" @touchstart="back"></i>
        <i v-if="!isPlay" class="iconfont icon-stop1" @touchstart="pauseOrPlay"></i>
        <i v-else class="iconfont icon-play1" @touchstart="pauseOrPlay"></i>
        <i class="iconfont icon-next1" @touchstart="next"></i>
      </div>
      <audio ref="audio" :src="songInfo.url"></audio>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      isPlay: false,
      songInfo: { url: "", imgUrl: "", fileName: "" },
      bottom: "-1.75rem",
      isReady: false
    };
  },
  computed: {
    ...mapState(["hash"]),
    ...mapGetters(["info"]),
    imgUrl() {
      return this.songInfo.imgUrl.replace(/{size}/, "400");
    }
  },
  watch: {
    hash() {
      this.$axios
        .get("/api/v1/song/get_song_info?cmd=playInfo&hash=" + this.hash)
        .then(res => {
          this.songInfo = res.data;
        });
      let that = this;
      this.$refs.audio.addEventListener("loadeddata", function() {
        that.isReady = true;
        that.bottom = "0";
        this.play();
        that.isPlay = true;
      });
    }
  },
  methods: {
    ...mapMutations(["back", "next"]),
    pauseOrPlay() {
      if (this.isPlay) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
      this.isPlay = !this.isPlay;
    }
  }
};
</script>

<style lang='less'>
.player {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.075rem;
  overflow: hidden;
  width: 100%;
  height: 1.45rem;
  transition: 0.4s;
  .text {
    color: white;
    font-size: 0.3rem;
    padding: 10px;
    float: left;
    p:nth-child(2) {
      color: #777;
    }
  }
  .singer-link {
    display: block;
    float: left;
    img {
      width: 1.3rem;
      height: 1.25rem;
      display: block;
      border-radius: 0.125rem;
      overflow: hidden;
    }
  }
  .right {
    float: right;
    padding: 0.4rem 0;
    color: white;
    i {
      font-size: 0.45rem;
      margin-right: 0.375rem;
    }
  }
}
</style>