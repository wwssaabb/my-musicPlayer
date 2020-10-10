<template>
  <div class="carousel-wrap">
    <el-carousel :interval="3000" type="card" autoplay loop height="254px">
      <el-carousel-item v-for="item in banners" :key="item.acm">
        <img class="image" :src="item.imageUrl" alt="item.typeTitle">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "carousel",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },

  }

</script>

<style scoped>
  .carousel-wrap{
    width: 100%;
    height: auto;
    border:2px solid #e8eaec;
  }
  .image{
    width: 100%;
    height: auto;
    border-radius:20px ;
  }
</style>