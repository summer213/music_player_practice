<template>
  <div id="app">
    <audio id="myaudio" ref="audio" src="http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0,%E8%94%A1%E5%8D%93%E5%A6%8D%20-%20%E5%B0%8F%E9%85%92%E7%AA%9D.mp3"></audio>
     <!-- @timeupdate="musicTimeUpdate" @canplay="musicCanPlay" @playing="musicOnPlaying" @ended="musicEnded" @waiting="musicOnWaiting" @pause="musicOnPause" @loadstart="loadStart" -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import store from './store';
import musicList from "./json/musiclist";
export default {
  name: 'app',
  created(){
      store.dispatch('set_MusicAllList', musicList.music);
  },
  mounted(){
      // 给audio元素存在vuex 的state里面  方便日后调用
      store.dispatch('set_AudioElement', this.$refs.audio);
  }
}
</script>

<style>
body{
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
