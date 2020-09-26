<template>
  <div class="sidebar-wrap">
    <div class="discovery" :class="{'choose':isChooseType==='/discovery'}"
         @click="[nowType='discovery',to('discovery')]">
      <Icon class="sidebar-wrap-icon" type="ios-radio" size="30" color="#515a6e"></Icon>
      <p class="sidebar-wrap-text">发现音乐</p>
    </div>
    <div class="playlists" :class="{'choose':isChooseType==='/playlists'}"
         @click="[nowType='playlists',to('/playlists')]">
      <Icon class="sidebar-wrap-icon" type="md-flame" size="30" color="#515a6e"></Icon>
      <p class="sidebar-wrap-text">推荐歌单</p>
    </div>
    <div class="songs" :class="{'choose':isChooseType==='/songs'}" @click="[nowType='songs',to('/songs')]">
      <Icon class="sidebar-wrap-icon" type="ios-musical-notes " size="30" color="#515a6e"></Icon>
      <p class="sidebar-wrap-text">最新音乐</p>
    </div>
    <div class="mvs" :class="{'choose':isChooseType==='/mvs'}" @click="[nowType='mvs',to('/mvs')]">
      <Icon class="sidebar-wrap-icon" type="logo-youtube" size="30" color="#515a6e"></Icon>
      <p class="sidebar-wrap-text">最新MV</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'sidebar',
    data() {
      return {
        nowType: "discovery"
      }
    },
    methods: {
      to(path) {
        this.$router.push(path)
      }
    },
    computed: {
      isChooseType() {
        return this.$route.path
      }
    }
  }
</script>

<style>
  .sidebar-wrap {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ededed;
  }

  .discovery,
  .playlists,
  .songs,
  .mvs {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .discovery:hover,
  .playlists:hover,
  .songs:hover,
  .mvs:hover {
    user-select: none;
    color: #d0fcff;
    background-color: #cecece;
    box-shadow: 3px 0 10px #dcd7d7, -3px 0 10px #dcd7d7, 0 3px 10px #dcd7d7, 0 -3px 10px #dcd7d7;
    transition: .5s;
  }

  .sidebar-wrap-text {
    font-size: 20px;
    font-weight: bold;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .sidebar-wrap-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .choose {
    color: #d0fcff;
    background-color: #cecece;
    text-shadow: 0 0 20px crimson;
    box-shadow: 3px 0 10px #dcd7d7, -3px 0 10px #dcd7d7, 0 3px 10px #dcd7d7, 0 -3px 10px #dcd7d7;
  }

</style>
