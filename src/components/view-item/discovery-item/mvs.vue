<template>
  <div class="discovery-mvs-wrap">
    <p class="discovery-mvs-title">
      推荐MV
    </p>
    <div class="discovery-mvs-content">
      <div class="discovery-mvs-content-item" v-for="item in mvs" :key="item.id">
        <div class="discovery-image-compose">
          <Icon type="md-arrow-dropright-circle" class="discovery-player-icon" size="40" color="#dc143c" @click="playMv(item.id,item.artistId)"/>
          <div class="discovery-icon-compose">
            <Icon type="md-arrow-dropright" size="28" color="#fff" />
            <span class="discovery-play-count">{{item.playCount}}</span>
          </div>
          <img class="discovery-mvs-image" :src="item.picUrl" alt="">
        </div>
        <div class="discovery-text-compose">
          <p class="discovery-song-name">{{item.name}}</p>
          <p class="discovery-singer-name">{{item.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mvs",
    props:{
      mvs:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      playMv(id,artId){
        this.$bus.$emit('playMv', id,artId)
      }
    }
  }
</script>

<style scoped>
  .discovery-mvs-wrap{
    width: 100%;
    height: auto;
    border: 2px solid #e8eaec;
  }
  .discovery-mvs-title {
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    padding-left: 20px;
    background-color: #e8eaec;
  }
  .discovery-mvs-content{
    width: 100%;
    padding:10px 0;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .discovery-image-compose,
   .discovery-mvs-image{
     width: 100%;
     height: auto;
    border-radius:5px
   }

  .discovery-image-compose{
    position: relative;
    overflow: hidden;
  }
  .discovery-mvs-content-item {
    width: 20%;
    height: auto;
  }
  .discovery-player-icon{
    position: absolute;
    top: 50%;
    left: 50%;
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: rgba(244, 234, 222, 0.7);
    transform: translate(-50%,-50%);
    opacity:0;
    transition: .5s;
  }
  .discovery-icon-compose{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    padding: 5px 10px;
    text-align: center;
    line-height: 28px;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    right: 0;
    opacity:0;
    transition: .5s;
  }
  .discovery-mvs-content-item:hover .discovery-icon-compose,
  .discovery-mvs-content-item:hover .discovery-player-icon {
    opacity: 1;
  }
  .discovery-play-count{
    color: white;
    text-align: center;
  }
  .discovery-song-name{
    line-height: 18px;
    width: 100%;
    height: 18px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;
    font-weight: bold;
  }
  .discovery-singer-name{
    color: rgba(0,0,0,0.5);
  }
</style>