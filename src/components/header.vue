<template>
    <div>
        <section class="div_content">
            <ul class="ul-header border-1px clear">
                <div class="left-menu">
                    <a href="#/" class="router-link-exact-active router-link-active">
                    <li>首页</li>
                    </a>
                    <a href="#/pic" class="">
                    <li>状态</li>
                    </a>
                    <a href="#/list" class="">
                    <li>音乐</li>
                    </a>
                    <a href="" target="_black">
                    <li>博客</li>
                    </a>
                    <a href="#/about" class="">
                    <li>关于</li>
                    </a>
                    </div>
                </ul>
        </section>
        <div class="fixedbg main-bg music-bg-blur">
            
        </div>
        <router-view/>
    </div>
</template>
<script>
export default {
  name: "headers",
  data() {
    return {};
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
@import url("../css/common.scss");
.ul-header {
//   background: rgba($color: #000000, $alpha: 0.3);
  padding: 0;
  margin: 0px;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  a {
    color: #fff;
  }
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    margin-right: 20px;
    float: left;
    margin-right: 20px;
  }
}
.main-bg {
  background: url("http://p1.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg");
  background-size: cover;
  background-position: center center;
}
.music-bg-blur{
  -webkit-filter: blur(16px); /* Chrome, Opera */
  -moz-filter: blur(16px);
  -ms-filter: blur(16px);
  filter: blur(16px);
  transition: all 0.8s;
}
</style>
