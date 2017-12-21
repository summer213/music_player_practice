<template>
    <div>
        <div class="music-main-bg">

        </div>
        <div class="list-mask fixedbg">

        </div>
        <div class="music-content">
            <div class="p-tab-con">
                <div class="tab">
                    正在播放
                </div>
                <div class="tab">
                    收藏
                </div>
                <div class="tab">
                    排行榜
                </div>
                <div class="tab">
                    搜索
                </div>
            </div>
            <div class="music-list">
                <div class="music-title clear">
                    <div class="c-title col-10"></div>
                    <div class="c-title col-50">歌曲</div>
                    <div class="c-title col-20">歌手</div>
                    <div class="c-title col-20">时长</div>
                </div>
                <div class="c-list-con">
                    <div class="c-list">
                        <div class="music-row" v-for="(item,index) in musicList" @click="playIndex(index)">
                            <div class="c-title col-10" v-if="index!=CurrentIndex||!isPlay">{{index+1}}</div>
                            <div class="c-title col-10" v-if="index==CurrentIndex&&isPlay"><img src="http://www.daiwei.org/vue/bg/wave.gif"></div>
                            <div class="c-title col-50">{{item.name}}</div>
                            <div class="c-title col-20">{{item.singer}}</div>
                            <div class="c-title col-20"></div>
                        </div>
                    </div>
                </div>
            </div> 
            
            <div class="music-ctrl">
                <div class="music-detail-ctrl">
                    <i title="上一曲 ctrl + left" class="icon iconfont icon-shangyishou"></i> 
                    <i title="播放/暂停 ctrl + space" class="icon iconfont icon-bofang" v-if="!isPlay" @click="togglePlay()"></i> 
                    <i title="播放/暂停 ctrl + space" class="icon iconfont icon-zanting" v-if="isPlay" @click="togglePlay()"></i> 
                    <i title="下一曲 ctrl + right" class="icon iconfont icon-xiayishou"></i>
                </div>
                <div class="r-music">
                    <div class="name">
                        追光者
                    </div>
                    <div class="p-pro-con">
                      <range></range>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import range from "./range";
import store from "./../store";
export default {
  name: "list",
  data() {
    return {
      musicList: [],
      isPlay:false,
      CurrentIndex:store.getters.getCurrentIndex
    };
  },
  components: {
    range: range
  },
  create() {},
  methods: {
    togglePlay() {
      // 控制音乐播放暂停
      store.commit("togglePlay");
      this.isPlay = store.getters.getIsPlaying;
    },
    playIndex(index) {
      if (
        index === store.getters.getCurrentIndex &&
        store.getters.getMusicSheetList.type === store.getters.getMusiSheetType
      ) {
        return;
      }
      store.commit({
        type: "setMusiSheetType",
        sheettype: store.getters.getMusicSheetList.type
      });
      store.commit({
        type: "setMusicList",
        list: store.getters.getMusicList
      });
      store.commit({
        type: "playIndex",
        index: index
      });
      this.isPlay = store.getters.getIsPlaying;
      this.CurrentIndex = store.getters.getCurrentIndex;
    }
  },
  computed: {
  },
  mounted() {
    this.musicList = store.getters.getMusicAllList.all;
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../css/music_list.scss";
</style>
