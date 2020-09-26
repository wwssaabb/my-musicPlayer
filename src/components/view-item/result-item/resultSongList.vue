<template>
  <div class="result-image-show-wrap">
    <div class="result-image-show-item" v-for="item in showList" :key="item.id">
      <span class="result-image-show-commentCount">播放量:{{item.playCount}}</span>
      <img class="result-image-show-img" :src="item.coverImgUrl" alt="">
      <Icon class="result-image-show-icon" type="md-arrow-dropright-circle" size="40" color="#c22727" @click="goPlaylistDetail(item.id)"/>
      <span class="result-image-show-name">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "resultSongList",
    props:{
      showList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      goPlaylistDetail(id){
        this.$bus.$emit('goPlaylistDetail',id)
      }
    }
  }
</script>

<style scoped>
  .result-image-show-wrap{
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding:20px 20px ;
  }
  .result-image-show-item,
  .result-image-show-img{
    width: calc((100vw - 200px) * 0.7 * 0.12 );
    height: calc((100vw - 200px) * 0.7 * 0.12 + 18px);
  }
  .result-image-show-item{
    position:relative;
    margin-bottom:11.7px;
    overflow:hidden;
  }
  .result-image-show-img{
    border-radius:10px;
    height: calc((100vw - 200px) * 0.7 * 0.12 )
  }
  .result-image-show-commentCount{
    position: absolute;
    left: 50%;
    width: 100%;
    transform:translateX(-50%);
    background-color: rgba(0,0,0,.7);
    color: #fff;
    border-radius:10px;
    padding:5px;
    transition: .5s;

  }
  .result-image-show-icon{
    width:auto;
    height:auto;
    border-radius:50%;
    background-color: #fff;
    position:absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
    opacity: 0;
    transition:.5s;
  }
  .result-image-show-name{
    position:absolute;
    left: 0;
    bottom:0;
    width: 100%;
    height: 18px;
    line-height: 18px;
    color: black;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .result-image-show-item:hover  .result-image-show-icon{
    opacity: 1;
  }
</style>