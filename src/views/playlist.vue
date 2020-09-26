<template>
  <div class="playlist-wrap">
    <div class="playlist-main">
      <playlistTitle :detailData="detailData" />
      <tagbar :labels="labels" @changeLabel="changeLabel" />
      <div class="playlist-content-container">
        <playlistSongsLIst :show-list="songsList" v-if="isChoose==='songsList'"/>
        <playlistComment
                :hot-comments="hotComments"
                :hot-comments-total="hotCommentsTotal"
                :new-comments="newComments"
                :new-comments-total="newCommentsTotal"
                :sub-new-params="subNewParams"
                @changePage="changePage"
                v-else/>
      </div>
    </div>
  </div>
</template>

<script>
  import {getPlaylistDetailData,getHotCommentsData,getNewCommentsData} from '../../network/request-item/request-base'
  import playlistTitle from '../components/view-item/playlist-item/playlistTitle'
  import tagbar from '../components/common/label/tagbar'
  import playlistSongsLIst from '../components/view-item/playlist-item/playlistSongsLIst'
  import playlistComment from '../components/view-item/playlist-item/playlistComment'
  export default {
  name: 'playlist',
  components:{
    playlistTitle,
    tagbar,
    playlistSongsLIst,
    playlistComment
  },
  data() {
    return {
      playlistID:0,
      detailData: {},
      isChoose:'songsList',
      songsList:[],
      hotComments:[],
      newComments:[],
      hotCommentsTotal:0,
      newCommentsTotal:0,
      /*subHotParams:{'id':this.playlistID,'page':1},*/
      subNewParams:{'id':this.playlistID,'page':1}
    }
  },
  methods: {
    //获取歌单信息
    getPlaylistDetailData(id){
      getPlaylistDetailData(id).then(res=>{
        console.log(res)
        this.detailData=res.data.playlist
        this.songsList=res.data.playlist.tracks
      })
    },
    //暂时只展示top10评论
    getHotCommentsData(id,type=2){
      getHotCommentsData(id,type).then(res=>{
        console.log(res)
        this.hotCommentsTotal=res.data.total
        this.hotComments=res.data.hotComments
      })
    },
    //获取最新评论
    getNewCommentsData(id,page){
      getNewCommentsData(id,page).then(res=>{
        console.log(res)
        this.newCommentsTotal=res.data.total
        this.newComments=res.data.comments
      })
    },
    changeLabel(newLabel){
      this.isChoose=newLabel==='歌曲列表'?'songsList':"comments"
    },
    changePage(obj){
      this.subNewParams.page=obj.page
    }


  },
  watch:{
    $route(){
      console.log(this.$route.query.id)
      this.playlistID=this.$route.query.id
      if (this.$route.path==='/playlist'){
        this.getPlaylistDetailData(this.playlistID)
        /*this.getHotCommentsData(this.subHotParams.id)*/
        this.getNewCommentsData(this.subNewParams.id,this.subNewParams.page)
      }
    },
    subNewParams:{
      handler(){
        this.getNewCommentsData(this.subNewParams.id,this.subNewParams.page)
      },
      deep:true
    }
  },
  created() {
    console.log(this.$route.query.id)
    //请求初始的歌单详细数据
    this.getPlaylistDetailData(this.$route.query.id)
    this.getHotCommentsData(this.$route.query.id)
    this.getNewCommentsData(this.$route.query.id,1)
  },
  computed:{
    commentsTotal(){
      return this.hotCommentsTotal+this.newCommentsTotal
    },
    labels(){
      return ['歌曲列表',`评论(${this.commentsTotal})`]
    }
  }
}
</script>

<style >
  .playlist-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
  }

  .playlist-main {
    width: 70%;
    height: auto;
    background-color: rgba(245, 247, 249, .75);
  }
  .playlist-content-container{
    width: 100%;
    height: calc(100vh - 390px);
    border-top: 2px solid #e8eaec;
    overflow:auto;
  }
</style>
