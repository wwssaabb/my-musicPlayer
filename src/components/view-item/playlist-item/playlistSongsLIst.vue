<template>
  <div class="playlist-image-show-wrap">
    <table class="playlist-table-main">
      <tr class="playlist-table-top">
        <th></th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
      <tr class="playlist-table-tr" v-for="(item,index) in showList" :key="item.id">
        <td class="playlist-table-td1">
          <p class="playlist-item-index">{{index+1}}</p>
          <div class="playlist-image-compose">
            <img class="playlist-image" :src="item.al.picUrl" alt="">
            <Icon class="playlist-play-icon" type="md-arrow-dropright-circle" size="30" color="#c22727"
                  @click="playMusic(item.id)"/>
          </div>
        </td>
        <td class="playlist-table-td2">
          <span class="playlist-song-name">{{item.name}}</span>
          <Icon class="playlist-mv-icon" v-if="item.mv!==0" type="logo-youtube" size="20" color="#c22727" @click="playMv(item.mv,item.ar[0].id)"/>
        </td>
        <td class="playlist-table-td3">
          <span class="playlist-singer-name">{{item.ar[0].name}}</span>
        </td>
        <td class="playlist-table-td4">
          <span class="playlist-album-name">{{item.al.name}}</span>
        </td>
        <td class="playlist-table-td5">
          <span class="playlist-time-long">{{item.dt| timeLong}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "playlistSongsLIst",
    props: {
      showList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
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
  .playlist-image-show-wrap {
    padding: 2px;
  }

  .playlist-image-show-wrap,
  .playlist-table-main {
    width: 100%;
    height: 100%;
    padding: 5px;
  }

  .playlist-table-top {
    font-weight: bold;
    font-size: 16px;
    color: black;
    text-align: center;
  }

  .playlist-table-tr {
    width: 100%;
    height: auto;
    border-radius: 20px;
    border: 2px solid #e8eaec;
    /*box-shadow: 0 0 4px #e8eaec;*/
  }

  .playlist-table-td1 {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2px;
  }

  .playlist-item-index {
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

  .playlist-image-compose,
  .playlist-image {
    width: 5vw;
    height: 5vw;
  }

  .playlist-image-compose {
    position: relative;
  }

  .playlist-image {
    border-radius: 10px;
    border:2px solid transparent;
    transition: .5s;
  }

  .playlist-play-icon {
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

  .playlist-mv-icon {
    width: auto;
    height: auto;
    margin-left: 10px;
  }

  .playlist-table-tr:hover .playlist-play-icon {
    opacity: 1;
  }

  .playlist-table-td2,
  .playlist-table-td3,
  .playlist-table-td4,
  .playlist-table-td5 {
    border-radius: 10px;
    border: 2px solid transparent;
    transition: .4s;
  }

  .playlist-table-tr:hover .playlist-table-td2,
  .playlist-table-tr:hover .playlist-table-td3,
  .playlist-table-tr:hover .playlist-table-td4,
  .playlist-table-tr:hover .playlist-table-td5,
  .playlist-table-tr:hover .playlist-image{
    border-radius: 20px;
    border: 2px solid rgba(0, 0, 0, .8);
  }

  .playlist-table-td2,
  .playlist-table-td3,
  .playlist-table-td4,
  .playlist-table-td5 {
    font-weight: bold;
    text-align: center;
    color: black;
  }

  .playlist-table-td5 {
    padding: 0;
    text-align: center;
  }
  .playlist-table-tr:hover .playlist-song-name{
    color: crimson;
  }
</style>