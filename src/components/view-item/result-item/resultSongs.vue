<template>
  <div class="result-songs-wrap">
    <table class="result-songs-table-main" >
      <tr class="result-songs-table-top">
        <th></th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
      <template class="result-songs-scroll">
        <tr class="result-songs-table-tr" v-for="(item,index) in songs" :key="item.id">
          <td class="result-songs-table-td1">
            <p class="result-songs-item-index">{{index+1}}</p>
          </td>
          <td class="result-songs-table-td2">
            <span class="result-songs-song-name" @click="playMusic(item.id)">{{item.name}}</span>
            <Icon class="result-songs-mv-icon" type="logo-youtube" size="20" color="#c22727" v-if="item.mvid!==0" @click="playMv(item.mvid)"/>
          </td>
          <td class="result-songs-table-td3">
            <span class="result-songs-singer-name">{{item.artists[0].name}}</span>
          </td>
          <td class="result-songs-table-td4">
            <span class="result-songs-album-name">{{item.album.name}}</span>
          </td>
          <td class="result-songs-table-td5">
            <span class="result-songs-time-long">{{item.duration| timeLong}}</span>
          </td>
        </tr>
      </template>

    </table>
  </div>
</template>

<script>
  export default {
    name: "resultSongs",
    props:{
      songs:{
        type:Array,
        default(){
          return []
        }
      },
    },
    methods:{
      playMusic(id){
        this.$bus.$emit('playMusic',id)
      },
      playMv(id){
        this.$bus.$emit('playMv', id)
      }
    },
    filters: {
      timeLong: function (time) {
        let m = parseInt(time / 1000 / 60)
        let s = ((parseInt(time) - m * 1000 * 60) / 1000 % 60).toFixed(0)
        return m >= 10 ? s > 10 ? m + ':' + s : m + ':0' + s : s >= 10 ? '0' + m + ':' + s : '0' + m + ':0' + s
      }
    },
  }
</script>

<style scoped>
  .result-songs-wrap,
  .result-songs-table-main{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .result-songs-table-top {
    font-weight: bold;
    font-size: 16px;
    color: black;
    text-align: center;
    /*box-shadow: 0 0 4px #e8eaec;*/
  }

  .result-songs-table-tr {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #e8eaec;
    padding: 5px 0;
    margin: 5px 0;
    /*box-shadow: 0 0 4px #e8eaec;*/
  }
  .result-songs-table-tr:nth-child(2n+1){
    background-color: rgba(111,111,111,0.05);
  }

  .result-songs-table-td1 {
    position:relative;
    width: 35px;
    height: 35px;
    margin: 0 auto;
  }

  .result-songs-item-index {
    font-weight: bold;
    font-size: 14px;
    color: black;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255,255,255,0.5);
    background-color: rgba(255, 255, 255, 0.2);
  }

  .result-songs-mv-icon {
    width: auto;
    height: auto;
    margin-left: 10px;
  }

  .result-songs-table-td1,
  .result-songs-table-td2,
  .result-songs-table-td3,
  .result-songs-table-td4,
  .result-songs-table-td5 {
    border-radius: 5px;
    border: 2px solid transparent;
    transition: .4s;
  }

  .result-songs-table-tr:hover .result-songs-table-td2,
  .result-songs-table-tr:hover .result-songs-table-td3,
  .result-songs-table-tr:hover .result-songs-table-td4,
  .result-songs-table-tr:hover .result-songs-table-td5{
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, .8);
  }

  .result-songs-table-td1,
  .result-songs-table-td2,
  .result-songs-table-td3,
  .result-songs-table-td4,
  .result-songs-table-td5 {
    font-weight: bold;
    text-align: center;
    color: black;
  }

  .result-songs-table-td5 {
    padding: 0;
    text-align: center;
  }
  .result-songs-song-name{
    transition:.5s;
  }
  .result-songs-table-tr:hover .result-songs-song-name{
    color: crimson;
  }

</style>