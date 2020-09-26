<template>
  <div class="playlist-title-wrap">
    <div class="playlist-title-main" v-if="detailData.creator">
      <img class="playlist-title-image" :src="detailData.coverImgUrl" alt="">
      <div class="playlist-title-content">
        <p class="playlist-title-name">{{detailData.name}}</p>
        <div class="playlist-title-user">
          <img class="playlist-title-user-avatar" :src="detailData.creator.avatarUrl"/>
          <span class="playlist-title-user-nickname">{{detailData.creator.nickname}}</span>
          <span class="playlist-title-user-created">{{createTime}}创建</span>
        </div>
        <p class="playlist-title-tag">标签:{{detailData.tags|tagFormat}}</p>
        <p class="playlist-title-introduce">简介:{{detailData.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "playlistTitle",
    props:{
      detailData:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      tagFormat(arr){
        return arr.length===0?'无':arr.reduce((s,a,i)=>{
          if (i===arr.length-1){
            return s+a
          }else{
            return s+' '+a+' '+'|'+' '
          }
        },'')
      }
    },
    computed:{
      createTime(){
        let time=this.detailData.updateTime
        return this.$moment(time).format('YYYY-MM-DD')
      }
    }
  }
</script>

<style scoped>
  .playlist-title-wrap{
    width: 100%;
    height: 230px;
    overflow: hidden;
    border: 2px solid #e8eaec;
  }
  .playlist-title-main{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;

  }
  .playlist-title-image{
    width: auto;
    height: 100%;
    border-radius: 15px;
    margin-right: 20px;
  }
  .playlist-title-content{
    flex:1;
    height: 100%;
    color: black;
  }
  .playlist-title-name{
    font-weight: bold;
    font-size: 18px;
  }
  .playlist-title-user{
    width: 100%;
    height: auto;
    display: flex;
    margin: 10px 0;
    justify-content: flex-start;
    align-items: center;
  }
  .playlist-title-user-avatar{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .playlist-title-user-nickname{
    margin:0 10px;
    font-size: 16px;
  }
  .playlist-title-user-created{
    margin-left:15px ;
    color: #1b2947;
  }
  .playlist-title-tag{
    margin: 10px 0;
  }
  .playlist-title-introduce{
    display: -webkit-box;
    margin:5px 0 ;
    line-height: 16px;
    height: 6rem;
    overflow:hidden;
    white-space: normal;
    -webkit-line-clamp:6;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
</style>