<template>
  <div class="recommend-wrap">
    <p class="recommend-title">
      推荐歌单
    </p>
    <div class="recommend-content">
      <div class="recommend-content-item" v-for="item in songs" :key="item.picUrl">
        <div class="item-compose" @click="goPlaylistDetail(item.id)">
          <div class="image-title">{{item.copywriter}}</div>
          <img class="recommend-image" :src="item.picUrl" alt="" >
          <Icon type="md-arrow-dropright-circle" class="image-icon"  size="40" color="#c22727"/>
        </div>
        <span class="image-name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommend",
    props:{
      songs:{
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
  .recommend-wrap{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border:2px solid #e8eaec;
  }
  .recommend-title{
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    padding-left:20px;
    background-color: #e8eaec;
  }
  .recommend-content{
    width: 100%;
    padding: 0 50px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .item-compose,
  .recommend-content-item,
  .recommend-image{
    width:calc((100vw - 200px) * 0.8 * .12);
    height:calc((100vw - 200px) * 0.8 * .12 + 18px);
  }
  .item-compose{
    position: relative;
    overflow: hidden;
  }
  .recommend-content-item{
    position: relative;
    border-radius: 5px;
    margin: 20px 20px;
  }
  .image-title{
    position: absolute;
    color: white;
    top: -50px;
    width: 100%;
    height: auto;
    transition: .3s;
    background-color: rgba(10, 10, 10, 0.8);
  }
  .recommend-image{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    height:  calc((100vw - 200px) * 0.8 * .12);
  }

  .image-icon{
    position: absolute;
    right:10px;
    bottom:28px;
    width: 40px;
    height: 40px;
    background-color: rgba(244, 234, 222, 0.7);
    border-radius: 50%;
    opacity: 0;
    transition: .5s;
  }

  .image-name{
    color: black;
    height: 18px;
    line-height: 18px;
    width: 100%;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recommend-content-item:hover .image-icon{
    opacity:1;
  }
  .recommend-content-item:hover .image-title{
    top: 0;
    z-index: 10;
  }

</style>