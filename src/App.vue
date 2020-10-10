<template>
  <div id="app">
    <topbar class="topbar"/>
    <sidebar class="sidebar"/>
    <div class="view-main">
      <router-view></router-view>
    </div>
    <audio :src="musicSrc"
           autoplay
           controls
           loop
           class="audio" ></audio>

  </div>
</template>

<script>
  import topbar from './components/view-item/index-item/topbar.vue';
  import sidebar from './components/view-item/index-item/sidebar.vue';
  import {playMusic} from '../network/request-item/request-base'
  export default {
    name: 'app',
    components: {
      topbar,
      sidebar
    },
    data(){
      return{
        musicSrc:"",

      }
    },
    methods:{
      playMusic(id){
        playMusic(id).then(res=>{
          this.musicSrc=res.data.data[0].url
        })
      },
    },
    mounted() {
      this.$bus.$on('playMusic',id=>{
        this.playMusic(id)
      })
      this.$bus.$on('playMv',(id,artId)=>{
        this.$router.push({
          path:'/mv',
          query:{'id':id,'artId':artId}
        })
      })
      this.$bus.$on('goPlaylistDetail',id=>{
        this.$router.push({
          path:'/playlist',
          query:{'id':id}
        })
      })

    }
  }
</script>

<style>
  @import "./assets/css/normalize.css";

  * {
    box-sizing: border-box;
  }

  #app {
    width: 100vw;
    height: 100vh;

  }

  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 70px;
    background-color: #f5f7f9;
    border-bottom:2px solid #d7dde4 ;
  }

  .sidebar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 7.8125vw;
    height: calc(100vh - 70px);
    border-right: 2px solid #d7dde4;
  }

  .view-main {
    position: relative;
    top: 5.5118vh;
    left: 7.8125vw;
    width: calc(100vw - 7.8125vw);
    height: calc(100vh - 70px);
    overflow: hidden;
  }
  .view-main::after{
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background-image: url(./assets/img/timg4.jpg);
    background-size: 100vw 100vh;
    background-attachment: inherit;
    filter: blur(5px) contrast(1.1) saturate(1.4);
    z-index: -1;
    animation: changeBlur 30s linear infinite;
  }
  @keyframes changeBlur {
    0%{filter: blur(5px) contrast(1.1) saturate(1.4);}
    50%{filter: blur(20px) contrast(1.5) saturate(1.9);}
    100%{filter: blur(5px) contrast(1.1) saturate(1.4);}

  }
  .audio{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 40px;
    z-index:5;
  }
  
</style>
