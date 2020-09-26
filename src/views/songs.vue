<template>
  <div class="songs-wrap">
    <div class="songs-main">
      <songsLabel :labels="labels" @changeLabel="changeLabel" class="songs-label" :key="'songs'"/>
      <imageShow :show-list="showList" class="songs-show"/>
    </div>
  </div>
</template>

<script>
  import {getNewSongsData} from '../../network/request-item/request-base.js'
  import imageShow from '../components/view-item/songs-item/songs-imageShow'
  import songsLabel from '../components/view-item/songs-item/songsLabel'

  export default {
  name: 'songs',
    components:{
      songsLabel,
      imageShow
    },
  data() {
    return {
      labels:[
        {type:0,area:"全部"},
        {type:7,area:"华语"},
        {type:96,area:"欧美"},
        {type:8,area:"日本"},
        {type:16,area:"韩国"}
      ],
      nowLabel:{type:0,area:"全部"},
      showList:[]

    }
  },
  created(){
    //请求初始数据，默认type=0
    this.getNewSongsData()
  },
  methods:{
    getNewSongsData(type){
      getNewSongsData(type).then(res=>{
        this.showList=res.data.data
        console.log(this.showList)
      })
    },
    changeLabel(newObj){
      this.nowLabel=newObj
    }
  },
    watch:{
      nowLabel(){
        this.getNewSongsData(this.nowLabel.type)
      }
    }

}
</script>

<style >
  .songs-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .songs-main{
    width: 70%;
    height: 100%;
    background-color: rgba(245, 247, 249, .75);
  }
  .songs-show{
    width: 100%;
    height: auto;
    overflow: auto;
    z-index: 10;
  }

</style>
