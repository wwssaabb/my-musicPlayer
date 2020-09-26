<template>
  <div class="newsongs-wrap">
    <p class="newsongs-title">
      最新音乐
    </p>
    <div class="newsongs-content">
      <div class="newsongs-content-item" v-for="item in songs" :key="item.id">
        <div class="image-compose">
          <img class="newsongs-image" :src="item.picUrl" alt="">
          <Icon type="md-arrow-dropright-circle" class="content-icon" size="40" color="#c22727" @click="playMusic(item.id)"/>
        </div>
        <div class="item-compose">
          <div class="content-title">{{item.song.name}}</div>
          <span class="content-name">{{item.song.artists[0].name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newsong",
    props: {
      songs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      playMusic(id){
        this.$bus.$emit('playMusic',id)
      }
    }

  }
</script>

<style scoped>
  .newsongs-wrap {
    width: 100%;
    height: auto;
    border: 2px solid #e8eaec;

  }

  .newsongs-title {
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    padding-left: 20px;
    background-color: #e8eaec;
  }

  .newsongs-content {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .newsongs-content-item {
    position: relative;
    width: 50%;
    height: 150px;
    padding: 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 0 solid #dffff1;
    transition: .5s;
  }

  .newsongs-image,
  .image-compose {
    width: 120px;
    height: 120px;
    border-radius: 5px;
  }

  .image-compose {
    position: relative;
  }

  .content-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(244, 234, 222, 0.7);
    opacity: 0;
    transition: .5s;
  }

  .newsongs-content-item:hover {
    border-width: 5px 20px 5px 20px;
    border-style: solid;
    border-color: #dffff1;
  }

  .newsongs-content-item:hover .content-icon {
    opacity: 1;
  }

  .item-compose {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .content-title {
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .content-name {
    font-weight: bold;
    font-size: 14px;
  }
</style>