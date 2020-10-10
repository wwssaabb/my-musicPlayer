<template>
  <div class="mv-recommend-wrap">
    <div
      class="mv-image-show-item"
      @click="playMv(item.id,item.artistId)"
      v-for="item in showList"
      :key="item.id"
    >
      <div class="mv-image-group">
        <span class="mv-image-show-commentCount"
          >播放量:{{ item.playCount | count }}</span
        >
        <img class="mv-image-show-img" :src="item.cover" alt="" />
        <Icon
          class="mv-image-show-icon"
          type="md-arrow-dropright-circle"
          size="30"
          @click="playMv(item.id,item.artistId)"
          color="#c22727"
        />
      </div>
      <div class="mv-image-content">
        <p class="mv-image-show-name">{{ item.name }}</p>
        <p>{{ item.artistName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mvRecommend",
  props: {
    showList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    count: function (num) {
      return num > 10000 ? parseInt(num / 10000) + "万" : num;
    },
  },
  methods: {
    playMv(id,artId) {
      this.$bus.$emit("playMv", id,artId);
    }
  },
};
</script>

<style scoped>
.mv-recommend-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
}
.mv-image-show-item {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  transition: 0.5s;
}
.mv-image-group {
  width: 50%;
  height: 100%;
  position: relative;
  margin-right: 10px;
}
.mv-image-show-img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.mv-image-show-commentCount {
  position: absolute;
  right: 0;
  width: auto;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 5px;
  padding: 2px;
  opacity: 0;
  transition: 0.5s;
}
.mv-image-show-icon {
  width: auto;
  height: auto;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.5s;
}
.mv-image-content {
  width: 50%;
  height: auto;
}
.mv-image-show-name {
  width: 100%;
  height: 18px;
  line-height: 18px;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mv-image-show-item:hover .mv-image-show-commentCount,
.mv-image-show-item:hover .mv-image-show-icon {
  z-index: 2;
  opacity: 1;
}
.mv-image-show-item:hover .mv-image-show-img {
  overflow: hidden;
  filter: blur(1px);
}
.mv-image-show-item:hover {
  border-radius: 5px;
  background-color: rgba(245, 245, 245, 0.8);
}
</style>

