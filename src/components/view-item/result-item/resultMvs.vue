<template>
  <div class="result-mv-wrap">
    <div class="result-mv-main">
      <div class="result-mv-content-item" v-for="item in mvs" :key="item.id">
        <div class="result-mv-image-compose">
          <Icon type="md-arrow-dropright-circle" class="result-mv-player-icon" size="40" color="#dc143c"/>
          <div class="result-mv-icon-compose">
            <Icon type="md-arrow-dropright" size="28" color="#fff"/>
            <span class="result-mv-play-count">{{item.playCount}}</span>
          </div>
          <img class="result-mv-image" :src="item.cover" alt="">
        </div>
        <div class="result-mv-text-compose">
          <p class="result-mv-song-name">{{item.name}}</p>
          <p class="result-mv-singer-name">{{item.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "resultMvs",
    props: {
      mvs: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .result-mv-wrap {
    width: 100%;
    height: auto;
  }

  .result-mv-main {
    width: 100%;
    padding: 20px 20px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .result-mv-image-compose,
  .result-mv-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .result-mv-image {
    border: 3px solid transparent;
  }

  .result-mv-image-compose {
    position: relative;
    overflow: hidden;
  }

  .result-mv-content-item {
    width: 12vw;
    height: auto;
    margin-bottom: 8px;
  }

  .result-mv-player-icon {
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

  .result-mv-icon-compose {
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

  .result-mv-content-item:hover .result-mv-icon-compose,
  .result-mv-content-item:hover .result-mv-player-icon {
    opacity: 1;
  }

  .result-mv-content-item:hover .result-mv-image {
    border: 3px solid black;
  }

  .result-mv-play-count {
    color: white;
    text-align: center;
  }

  .result-mv-song-name {
    line-height: 18px;
    width: 100%;
    height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;
    font-weight: bold;
  }

  .result-mv-singer-name {
    color: rgba(0, 0, 0, 0.5);
  }
</style>