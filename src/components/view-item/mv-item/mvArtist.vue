<template>
  <div class="mv-artist-wrap">
    <div class="mv-artist">
      <div class="mv-artist-avatar-wrap">
        <img class="mv-artist-avatar" :src="artist.picUrl" alt="">
        <p class="mv-artist-songer-name">
          {{artist.name}}
        </p>
      </div>
      <div class="mv-artist-content">
        <p class="mv-song-name">
          {{mvDetailData.name}}
        </p>
        <div class="mv-song-created-wrap">
          <span class="mv-artist-create">
          发布:{{mvDetailData.publishTime}}
        </span>
        <span class="mv-artist-play-count">
          播放:{{mvDetailData.playCount | count}}
        </span>
        </div>      
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name:"mvArtist",
  props:{
    artist:{
      type:Object,
      default(){
        return {}
      }
    },
    mvDetailData:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      
    }
  },
  filters:{
      count:function(num){
        return num>10000?(num/10000).toFixed(2)+'万次':num
      }
    }
}
</script>

<style scope>
  .mv-artist-wrap{
    width:100% ;
    height: auto;
  }
  .mv-artist{
    width: 100%;
    height: auto;
    border-radius:5px;
    background-color: rgba(240,240,240,0.6);
  }
  .mv-artist-avatar-wrap{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    color: black;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .mv-artist-avatar{
    width: 70px;
    height: 70px;
    border-radius:50%;
    margin:10px 20px 0 20px;
  }
  .mv-artist-content{
    width: 100%;
    height: auto;
  }
  .mv-song-name{
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    min-width: 80%;
    height: auto;
    font-weight: bold;
    color: black;
    text-align: center;
    font-size:2.5rem ;
    line-height: 2.5rem;
    flex-wrap: wrap;
    letter-spacing: 1px;
    background-color: rgba(245, 247, 249, .80);
    padding:10px 0;
    border-radius:5px;
  }
  .mv-song-created-wrap{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mv-artist-create,
  .mv-artist-play-count{
    font-size: 1rem;
    color:rgba(81, 90, 110,0.9);
    margin:10px 20px; 
  }
</style>