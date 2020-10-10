<template>
  <div class="result-wrap">
    <div class="result-main">
      <div class="result-title-container">
        <div class="result-title-wrap">
          <h2 class="result-title">{{keyword}}</h2>
          <span class="result-counts">找到{{count}}个结果</span>
        </div>
        <tagbar :labels="labels" @changeLabel="changeLabel" class="result-label" :key="'result'" />
      </div>
      <div class="result-content-wrap">
        <div class="result-content-songs" v-if="isChoose==='歌曲'">
          <resultSongs :songs="showList" class="result-songs"/>
        </div>
        <div class="result-content-song-list" v-else-if="isChoose==='歌单'">
          <resultSongList :show-list="showList"/>
        </div>
        <div class="result-content-mvs" v-else-if="isChoose==='MV'">
          <resultMvs :mvs="showList"/>
        </div>
      </div>
      <div class="result-page-wrap">
        <resultPage :obj="searchParams" :total="count" @changeShowList="changePage"/>
      </div>

    </div>
  </div>
</template>

<script>
  import {getSearchData} from '../../network/request-item/request-base'
  import tagbar from '../components/common/label/tagbar'
  import resultSongs from '../components/view-item/result-item/resultSongs'
  import resultPage from '../components/view-item/result-item/resultPage'
  import resultSongList from '../components/view-item/result-item/resultSongList'
  import resultMvs from '../components/view-item/result-item/resultMvs'

  export default {
    name: 'result',
    components:{
      tagbar,
      resultSongs,
      resultPage,
      resultSongList,
      resultMvs
    },
    data() {
      return {
        isChoose:'歌曲',
        labels:['歌曲','歌单','MV'],
        songs:[],
        songCount:0,
        songList:[],
        playlistCount:0,
        mvs:[],
        mvCount:0,
        searchParams:{'keywords':"",'type':1,'page':1},
      }
    },
    methods: {
      getSearchData(keyword,type,page){
        getSearchData(keyword,type,page).then(res=>{
          let type=this.searchParams.type
          switch (type) {
            case 1:
              this.songs=res.data.result.songs
              this.songCount=res.data.result.songCount
              break
            case 1000:
              this.songList=res.data.result.playlists
              this.playlistCount=res.data.result.playlistCount
              break
            case 1004:
              this.mvs=res.data.result.mvs;
              this.mvCount=res.data.result.mvCount;
              break
          }
        })
      },
      changeLabel(label){
        this.isChoose=label
        this.searchParams.type=label==='歌曲'?1:label==='歌单'?1000:1004
      },
      changePage(obj){
        this.searchParams.page=obj.page
      }
    },
    watch:{
      $route(){
        this.searchParams.keywords=this.$route.query.keyword
      },
      searchParams:{
        handler(){
          let params=this.searchParams
          this.getSearchData(params.keywords,params.type,params.page)
        },
        deep:true
      }
    },
    computed:{
      keyword(){
        return this.$route.query.keyword
      },
      count(){
        let type=this.searchParams.type
        return type===1?this.songCount:type===1000?this.playlistCount:this.mvCount
      },
      showList(){
        let type=this.searchParams.type
        return type===1?this.songs:type===1000?this.songList:this.mvs
      }
    },
    created() {
      this.getSearchData(this.keyword,1,1)
      this.searchParams.keywords=this.keyword
    },
  }
</script>

<style>
  .result-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
  }

  .result-main {
    width: 70%;
    height: auto;
    background-color: rgba(245, 247, 249, .75);
  }
  .result-title-container{
    width: 100%;
    height: auto;
    box-sizing: border-box;
    border:2px solid #e8eaec;
  }
  .result-title-wrap{
    width: 100%;
    height: 100px;
    padding: 0 50px;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .result-title{
    font-size: 48px;
    font-weight: bold;
  }
  .result-counts{
    margin-left: 20px;
    font-size: 16px;
  }
  .result-content-wrap{
    width: 100%;
    height: auto;
    padding:0 50px;
    border:2px solid #e8eaec;
  }
  .result-songs{
    width: 100%;
    height: auto;
  }
  .result-page-wrap{
    width: 100%;
    height: 50px;
    border:2px solid #e8eaec;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .result-content-song-list{
    width: 100%;
    height: auto;
  }
</style>
