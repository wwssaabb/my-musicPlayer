<template>
  <div class="topbar-wrap">
    <div class="topbar-left">
      <span class="icon-home"></span>
      <span class="icon-narrow"></span>
      <span class="icon-zoom"></span>
    </div>
    <div class="topbar-center">
      <i-input
              class="topbar-input"
              v-model="keyword"
              placeholder="请输入..."
              icon="ios-search"
              @on-enter="searchKeyword"
              @on-click="searchKeyword"
      ></i-input>
    </div>
    <div class="topbar-right">

    </div>
  </div>
</template>

<script>

  export default {
    name: 'topbar',
    components:{

    },
    data() {
      return {
        keyword:"",
      }
    },
    methods:{
      searchKeyword(){
        this.$router.push({
          path:'/result',
          query:{'keyword':this.keyword}
        })
      },

    },
    watch: {

    }

  }
</script>

<style scoped>
  .topbar-wrap{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url('../../../assets/img/bg.jpg');
  }
  .topbar-left{
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .icon-home,
  .icon-narrow,
  .icon-zoom{
    box-sizing: content-box;
    position: relative;
    width: 25px;
    height: 25px;
    border-radius:50% ;
    border: 8px solid #faf8f8;
  }
  .icon-home{
    background-color: #dd6d60;
  }
  .icon-narrow{
    background-color: #dcc060;
  }
  .icon-zoom{
    background-color: #84bb58;
  }
  .icon-home:hover,
  .icon-narrow:hover,
  .icon-zoom:hover{
    background-image: url('../../../assets/img/home.svg');
    background-repeat:no-repeat;
    background-size: 15px;
    background-position: center;
  }
  .icon-narrow:hover{
    background-image: url('../../../assets/img/narrow.svg');
  }
  .icon-zoom:hover{
    background-image: url('../../../assets/img/zoom.svg');
  }
  .icon-home::before{
    content: "";
  }
  .topbar-center{
    width: 25%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .topbar-input{
    border: 10px solid white;
    border-radius:5px ;
  }

</style>
