<template>
  <div class="discovery-wrap">
    <div class="discovery-mian">
      <carousel :banners="banners"/>
      <recommend :songs="songs"/>
      <newsong :songs="newMusic"/>
      <mvs :mvs="mvs"/>
    </div>
  </div>
</template>

<script>
  import {getBannerData,getPersonalizedData,getnewSongData,getnewMvData} from '../../network/request-item/request-base.js'
  import carousel from '../components/common/carousel/carousel'
  import recommend from '../components/view-item/discovery-item/recommend'
  import newsong from '../components/view-item/discovery-item/newsong'
  import mvs from '../components/view-item/discovery-item/mvs'
  export default {
  name: 'discovery',
    components:{
      carousel,
      recommend,
      newsong,
      mvs
    },
  data(){
    return{
      banners:[],
      songs:[],
      newMusic:[],
      mvs:[],
      newMusicId:""
    }
  },
  created() {
    //获取轮播图数据
    this.getBannerData()
    //获取推荐歌单
    this.getPersonalizedData()
    //获取最新音乐
    this.getnewSongData()
    //获取最新MV
    this.getnewMvData()

  },
  methods:{
    getBannerData(){
      getBannerData().then(res=>{
        this.banners=res.data.banners
      })
    },
    getPersonalizedData(){
      getPersonalizedData().then(res=>{
        this.songs=res.data.result
      })
    },
    getnewSongData(){
      getnewSongData().then(res=>{
        this.newMusic=res.data.result
      })
    },
    getnewMvData(){
      getnewMvData().then(res=>{
        this.mvs=res.data.result
      })
    }
  }
};
</script>

<style >
  .discovery-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
  }
  .discovery-mian{
    width: 70%;
    height: auto;
    background-color: rgba(245,247,249,.75);
  }
</style>
