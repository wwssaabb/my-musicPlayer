<template>
  <div class="playlist-wrap">
    <div class="lable-list">
      <span
              v-for="item in lableList"
              :key="item.cat"
              class="labe-item"
              :class="{'lable-choose':item.cat===chooseLable}"
              @click="[chooseLable=item.cat,getData()]"
      >{{item.cat}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "playlist",
    props:{
      lableList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        chooseLable:"全部"
      }
    },
    methods:{
      getData(){
        this.$emit('getNewPlayListData',this.chooseLable)
      }
    },
    watch:{
      lableList:{
        handler(){
          console.log(this.lableList)
        },
        deep:true
      }
    }
  }
</script>

<style scoped>
  .playlist-wrap{
    width: 100%;
    height: auto;
    border:2px solid #e8eaec;
  }
  .lable-list{
    width: 100%;
    height: 54px;
    line-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .labe-item{
    flex: 1;
    color: black;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    transition: .3s;
    border-bottom:3px solid  transparent;
  }
  .labe-item:hover{
    border-bottom:3px solid  crimson;
  }

  .lable-choose{
    border-bottom:3px solid  crimson;
    color: crimson;
  }

</style>