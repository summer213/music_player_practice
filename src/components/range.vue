<template>
  <div class="range" @mouseleave.stop="mouseUp()" @mouseup.stop="mouseUp()" @mousemove.stop="mouseMove($event)">
        <span class="time-left">0:00</span>

        <div class="process" ref="all_pro" @mouseup.stop="mouseUp()" @click="setPro($event)">
            <div class="current" ref="current_pro">
                
            </div>
            <div class="ball" ref="ball" @mousedown="mouseDown()"></div>
        </div>
        
        <span class="time-left">3:00</span>
  </div>
</template>
<script>
let canDrag = false;
let persentWidth = 0;
export default {
  data() {
    return {};
  },
  methods: {
    mouseDown() {
      canDrag = true;
    },
    mouseUp() {
      canDrag = false;
    },
    mouseMove(event) {
      if (canDrag) {
        let e = event || window.event;
        let mouseX = e.pageX;
        let offsetLeft = this.$refs.all_pro.offsetLeft
        persentWidth = Math.floor((mouseX - offsetLeft) / this.$refs.all_pro.offsetWidth * 100)
        persentWidth = persentWidth > 100 ? 100 : persentWidth
        persentWidth = persentWidth < 0 ? 0 : persentWidth
        this.$refs.current_pro.style.width = `${persentWidth}%`;
        this.$refs.ball.style.left = `${persentWidth}%`;
      }
    },
    setPro(event){
        let e = event || window.event;
        let mouseX = e.pageX;
        let offsetLeft = this.$refs.all_pro.offsetLeft
        persentWidth = Math.floor((mouseX - offsetLeft) / this.$refs.all_pro.offsetWidth * 100)
        persentWidth = persentWidth > 100 ? 100 : persentWidth
        persentWidth = persentWidth < 0 ? 0 : persentWidth
        this.$refs.current_pro.style.width = `${persentWidth}%`;
        this.$refs.ball.style.left = `${persentWidth}%`;
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../css/common.scss";
.range {
  width: 100%;
  height: 50px;
  padding-top: 10px;
  .time-left {
    color: $greyColor;
  }
  .time-left {
    float: left;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }
  .process {
    width: 82%;
    float: left;
    margin: 8px 10px 0 10px;
    background: rgba(224, 224, 224, 0.8);
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 2px;
    border-radius: 1px;
    background: rgba(244, 244, 244, 0.3);
    font-size: 0;
    cursor: pointer;
    position: relative;
    .current {
      height: 2px;
      border-radius: 1px;
      background: $red;
      width: 0%;
    }
    .ball {
      position: absolute;
      left: 0%;
      width: 12px;
      height: 12px;
      background: $greyColor;
      top: -5px;
      border-radius: 100px;
    }
  }
  .time-right {
    float: left;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }
}
</style>


