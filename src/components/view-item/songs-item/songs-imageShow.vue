<template>
  <div class="songs-image-show-wrap">
    <table class="songs-table-main">
      <tr class="songs-table-top">
        <th></th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
      <tr class="songs-table-tr" v-for="(item,index) in showList" :key="item.id">
        <td class="songs-table-td1">
          <p class="songs-item-index">{{index+1}}</p>
          <div class="songs-image-compose">
            <img class="songs-image" v-lazy="item.album.picUrl" alt="">
            <Icon class="songs-play-icon" type="md-arrow-dropright-circle" size="30" color="#c22727"
                  @click="playMusic(item.id)"/>
          </div>
        </td>
        <td class="songs-table-td2">
          <span class="songs-song-name">{{item.name}}</span>
          <Icon class="songs-mv-icon" v-if="item.mvid!==0" type="logo-youtube" size="20" color="#c22727" @click="playMv(item.mvid,item.artists[0].id)"/>
        </td>
        <td class="songs-table-td3">
          <span class="songs-singer-name">{{item.artists[0].name}}</span>
        </td>
        <td class="songs-table-td4">
          <span class="songs-album-name">{{item.album.name}}</span>
        </td>
        <td class="songs-table-td5" v-if='item.bMusic'>
          <span class="songs-time-long">{{item.bMusic.playTime| timeLong}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "songs-imageShow",
    props: {
      showList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      timeLong: function (time) {
        let m = parseInt(time / 1000 / 60)
        let s = ((parseInt(time) - m * 1000 * 60) / 1000 % 60).toFixed(0)
        return m >= 10 ? s > 10 ? m + ':' + s : m + ':0' + s : s >= 10 ? '0' + m + ':' + s : '0' + m + ':0' + s
      }
    },
    methods: {
      playMusic(id) {
        this.$bus.$emit('playMusic', id)
      },
      playMv(id,artId){
        this.$bus.$emit('playMv', id,artId)
      }
    }
  }
</script>

<style scoped>
  .songs-image-show-wrap {
    width: 100%;
    height: calc(100vh - 160px);
    padding: 2px;
    border: 2px solid #e8eaec;
  }

  .songs-table-main {
    width: 100%;
    height: 100%;
    padding: 5px;
  }

  .songs-table-top {
    font-weight: bold;
    font-size: 16px;
    color: black;
    text-align: center;
  }

  .songs-table-tr {
    width: 100%;
    height: auto;
    border-radius: 20px;
    border: 2px solid #e8eaec;
    /*box-shadow: 0 0 4px #e8eaec;*/
  }

  .songs-table-td1 {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2px;
  }

  .songs-item-index {
    font-weight: bold;
    font-size: 14px;
    color: black;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .songs-image-compose,
  .songs-image {
    width: 5vw;
    height: 5vw;
  }

  .songs-image-compose {
    position: relative;
  }

  .songs-image {
    border-radius: 10px;
    border:2px solid transparent;
    transition: .5s;
  }

  .songs-play-icon {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: .3s;
  }

  .songs-mv-icon {
    width: auto;
    height: auto;
    margin-left: 10px;
  }

  .songs-table-tr:hover .songs-play-icon {
    opacity: 1;
  }

  .songs-table-td2,
  .songs-table-td3,
  .songs-table-td4,
  .songs-table-td5 {
    border-radius: 10px;
    border: 2px solid transparent;
    transition: .4s;
  }

  .songs-table-tr:hover .songs-table-td2,
  .songs-table-tr:hover .songs-table-td3,
  .songs-table-tr:hover .songs-table-td4,
  .songs-table-tr:hover .songs-table-td5,
  .songs-table-tr:hover .songs-image{
    border-radius: 20px;
    border: 2px solid rgba(0, 0, 0, .8);
  }

  .songs-table-td2,
  .songs-table-td3,
  .songs-table-td4,
  .songs-table-td5 {
    font-weight: bold;
    text-align: center;
    color: black;
  }

  .songs-table-td5 {
    padding: 0;
    text-align: center;
  }
  .songs-song-name{
    transition: .5s;
  }
  .songs-table-tr:hover .songs-song-name{
    color: crimson;
  }
</style>