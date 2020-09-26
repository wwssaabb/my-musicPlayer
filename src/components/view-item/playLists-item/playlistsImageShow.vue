<template>
  <div class="image-show-wrap">
    <div class="image-show-item" @click="goPlaylistDetail(item.id)" v-for="item in showList" :key="item.id">
      <span class="image-show-commentCount">播放量:{{item.playCount | count}}</span>
      <img class="image-show-img" :src="item.coverImgUrl" alt="">
      <Icon class="image-show-icon" type="md-arrow-dropright-circle" size="40" color="#c22727"/>
      <span class="image-show-name">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "imageShow",
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
    },
    filters:{
      count:function(num){
        return num>10000?parseInt(num/10000)+'万':num
  }
    }
  }
</script>

<style scoped>
  .image-show-wrap{
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding:30px 20px ;
    border:2px solid #e8eaec;
  }
  .image-show-item,
  .image-show-img{
    width: calc((100vw - 200px) * 0.7 * 0.11 );
    height: calc((100vw - 200px) * 0.7 * 0.11 + 18px);
  }
  .image-show-item{
    position:relative;
    margin-bottom:20px;
    overflow:hidden;
  }
  .image-show-img{
    border-radius:10px;
    height: calc((100vw - 200px) * 0.7 * 0.11 )
  }
  .image-show-commentCount{
    position: absolute;
    left: 50%;
    width: 100%;
    transform:translateX(-50%);
    background-color: rgba(0,0,0,.7);
    color: #fff;
    border-radius:10px;
    padding:5px;
    opacity:0;
    transition: .5s;

  }
  .image-show-icon{
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
  .image-show-name{
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
  .image-show-item:hover  .image-show-commentCount,
  .image-show-item:hover  .image-show-icon{

    z-index: 2;
    opacity: 1;
  }
  .image-show-item:hover  .image-show-img{
    overflow: hidden;
    filter: blur(1px);
  }
</style>