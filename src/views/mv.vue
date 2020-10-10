<template>
  <div class="mv-detail-wrap">
    <div class="mv-detail-main">
      <div class="mv-video-content">
        <p class="mv-video-title">
          Mv详情
        </p>
        <video :src="mvUrl" class="mv-video" controls></video>
        <mvArtist :artist="artist" :mv-detail-data="mvDetailData" />
        <mvComment :comments="comments" :subNew-params="subNewParams" @changePage="changePage" class="mv-comment-comtent" />
      </div>
      <div class="mv-recommend">
        <p class="mv-recommed-title">
          相关推荐
        </p>
        <mvRecommend :showList="recommendShowList" class="mv-recommed-comtent" />  
      </div>
    </div>
  </div>
</template>

<script>
  import {playMv,playSimilarMv,playMvDetailData,playArtistDetailData,playMvCommentData} from '../../network/request-item/request-base'
  import mvRecommend from '../components/view-item/mv-item/mvRecommend'
  import mvArtist from '../components/view-item/mv-item/mvArtist'
  import mvComment from '../components/view-item/mv-item/mvComment'
  export default {
    name: 'mv',
    components:{
      mvRecommend,
      mvArtist,
      mvComment
    },
    data() {
      return {
        mvUrl:'',
        recommendShowList:[],
        artist:{},
        mvDetailData:{},
        comments:{},
        subNewParams:{'id':'','page':1}
      };
    },
    watch:{
      $route(){
        const artId=this.$route.query.artId
        if (this.$route.path==='/mv'){
          this.playMv(this.$route.query.id)
          this.playSimilarMv(this.$route.query.id)
          this.playMvDetailData(this.$route.query.id)
          this.playArtistDetailData(artId)
          this.playMvCommentData(this.$route.query.id,1)
        }
      },
      subNewParams:{
        handler(){
          this.playMvCommentData(this.subNewParams.id,this.subNewParams.page)
        },
        deep:true
      }
    },
    methods: {
      playMv(id){
        playMv(id).then(res=>{
          this.mvUrl=res.data.data.url
        })
      },
      playSimilarMv(id){
        playSimilarMv(id).then(res=>{
          this.recommendShowList=res.data.mvs
        })
      },
      playMvDetailData(id){
        playMvDetailData(id).then(res=>{
          this.mvDetailData=res.data.data
        })
      },
      playArtistDetailData(id){
        playArtistDetailData(id).then(res=>{
          this.artist=res.data.artist
        })
      },
      playMvCommentData(id,page){
        playMvCommentData(id,page).then(res=>{
          this.comments=res.data
        })
      },
      changePage(page){
        this.subNewParams.page=page
    }
    },
    created() {
      //mv数据初次获取
      this.playMv(this.$route.query.id)
      this.playSimilarMv(this.$route.query.id)
      this.playMvDetailData(this.$route.query.id)
      this.playMvCommentData(this.$route.query.id,1)
      this.subNewParams.id=this.$route.query.id
      this.subNewParams.page=1
      this.playArtistDetailData(this.$route.query.artId)
    }
  }
</script>

<style>
  .mv-detail-wrap{
    width: 100%;
    height: calc(100vh - 110px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
  }
  .mv-detail-main{
    width: 60%;
    height: calc(100vh - 110px);
    border-top: 2px solid #e8eaec;
    background-color: rgba(245, 247, 249, .75);
    overflow:auto;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    padding:0 10px;
  }
  .mv-video-content{
    width: 70%;
    padding: 10px;
    height: auto;
    padding:10px 30px;
  }
  .mv-video-title,
  .mv-recommed-title{
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
    padding: 0;
  }
  .mv-recommed-title{
    margin-top:10px ;
  }
  .mv-video{
    width: 100%;
    height: auto;
  }
  .mv-recommend{
    width: 25%;
    height: auto;
  }
  .mv-recommed-comtent{
    width: 100%;
    height: auto;
  }
  .mv-comment-comtent{
    width: 100%;
    height: 100%;
    border-radius:5px;
    overflow: auto;
    background-color: rgba(245, 247, 249, .40);
    margin-top:5px;
  }
</style>
