<template>
  <div class="boutique-wrap">
    <div class="boutique-item" v-for="item in boutique" :key="item.id">
      <div class="boutique-image-compose" @click="goPlaylistDetail(item.id)">
        <img class="boutique-image" :src="item.coverImgUrl" alt="">
        <Icon class="boutique-image-show-icon" type="md-arrow-dropright-circle" size="40" color="#c22727"/>
      </div>
      <div class="boutique-container">
      <span class="boutique-title">
        精品歌单
      </span>
        <p class="boutique-nane">
          {{item.name}}
        </p>
        <p class="boutique-content">
          {{item.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "boutique",
    props: {
      boutique: {
        type: Array,
        default() {
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
  .boutique-wrap {
    width: 100%;
    height: 250px;
    overflow: hidden;
    border: 2px solid #e8eaec;
  }

  .boutique-item {
    width: 100%;
    padding: 20px 15px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .boutique-image-compose{
    width: 13%;
    height: auto;
    position: relative;
    margin-left: 20px;
  }
  .boutique-image{
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  .boutique-image-show-icon{
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius:50%;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    transition:.5s;
    opacity: 0;
  }

  .boutique-item:hover .boutique-image-show-icon{
    opacity:1;
  }
  .boutique-container {
    width: 80%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .boutique-title {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 5px;
    padding: 5px 10px;
    border-radius: 8px;
    background-color: #dc143c;
    color: #ffd700;
    margin-bottom: 5px;
    border: 2px solid black;
  }

  .boutique-nane {
    color: black;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .boutique-content {
    display: -webkit-box;
    color: white;
    background-color: rgba(0, 0, 0, .9);
    border-radius: 10px;
    padding: 5px 10px 0 10px;
    line-height: 16px;
    font-size: 14px;
    width: 100%;
    height: calc(16px * 7 + 5px);
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }


</style>