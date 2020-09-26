<template>
  <div class="mv-detail-wrap">
    <div class="mv-detail-main">

    </div>
  </div>
</template>

<script>
  import {playMv,playSimilarMv,playMvDetailData,playArtistDetailData,playMvCommentData} from '../../network/request-item/request-base'
  export default {
    name: 'mv',
    data() {
      return {

      };
    },
    watch:{
      $route(){
        this.playlistID=this.$route.query.id
        if (this.$route.path==='/mv'){
          this.playMv(this.$route.query.id)
          this.playSimilarMv(this.$route.query.id)
          this.playMvDetailData(this.$route.query.id)
          this.playMvCommentData(this.$route.query.id,1)
        }
      },
    },
    methods: {
      playMv(id){
        playMv(id).then(res=>{
          console.log(res)
        })
      },
      playSimilarMv(id){
        playSimilarMv(id).then(res=>{
          //console.log(res)
        })
      },
      playMvDetailData(id){
        playMvDetailData(id).then(res=>{
          //console.log(res)
        })
      },
      playArtistDetailData(id){
        playArtistDetailData(id).then(res=>{
          //console.log(res)
        })
      },
      playMvCommentData(id,page){
        playMvCommentData(id,page).then(res=>{
          //console.log(res)
        })
      },
    },
    created() {
      //mv数据初次获取
      console.log(this.$route.query.id)
      this.playMv(this.$route.query.id)
      this.playSimilarMv(this.$route.query.id)
      this.playMvDetailData(this.$route.query.id)
      this.playMvCommentData(this.$route.query.id,1)

    }
  }
</script>

<style>
  .mv-detail-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
  }
  .mv-detail-main{
    width: 100%;
    height: calc(100vh - 390px);
    border-top: 2px solid #e8eaec;
    overflow:auto;
  }
</style>
