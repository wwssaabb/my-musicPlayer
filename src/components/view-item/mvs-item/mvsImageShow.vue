<template>
  <div class="mvs-wrap">
    <div class="mvs-main">
      <div class="mvs-content-item" v-for="item in mvs" :key="item.id">
        <div class="mvs-image-compose">
          <Icon type="md-arrow-dropright-circle" class="mvs-player-icon" size="40" color="#dc143c" @click="playMv(item.id,item.artistId)"/>
          <div class="mvs-icon-compose">
            <Icon type="md-arrow-dropright" size="28" color="#fff"/>
            <span class="mvs-play-count">{{item.playCount}}</span>
          </div>
          <img class="mvs-image" :src="item.cover" alt="">
        </div>
        <div class="mvs-text-compose">
          <p class="mvs-song-name">{{item.name}}</p>
          <p class="mvs-singer-name">{{item.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mvsImageShow",
    props: {
      mvs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      playMv(id,artId){
        console.log(artId)
        this.$bus.$emit('playMv', id,artId)
      }
    }
  }
</script>

<style scoped>
  .mvs-wrap {
    width: 100%;
    height: calc(100vh - 314px);
    overflow: auto;
    border: 2px solid #e8eaec;
  }

  .mvs-main {
    width: 100%;
    padding: 20px 20px;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .mvs-image-compose,
  .mvs-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .mvs-image {
    border: 3px solid transparent;
  }

  .mvs-image-compose {
    position: relative;
    overflow: hidden;
  }

  .mvs-content-item {
    width: 14vw;
    height: auto;
    margin-bottom: 5px;
  }

  .mvs-player-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(244, 234, 222, 0.7);
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: .5s;
  }

  .mvs-icon-compose {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    padding: 5px 10px;
    text-align: center;
    line-height: 28px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 3px;
    right: 3px;
    opacity: 0;
    transition: .5s;
  }

  .mvs-content-item:hover .mvs-icon-compose,
  .mvs-content-item:hover .mvs-player-icon {
    opacity: 1;
  }

  .mvs-content-item:hover .mvs-image {
    border: 3px solid black;
  }

  .mvs-play-count {
    color: white;
    text-align: center;
  }

  .mvs-song-name {
    line-height: 18px;
    width: 100%;
    height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;
    font-weight: bold;
  }

  .mvs-singer-name {
    color: rgba(0, 0, 0, 0.5);
  }
</style>