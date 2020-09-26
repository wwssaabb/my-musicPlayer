<template>
  <div class="songs-label-wrap">
    <div class="songs-label-list">
      <span
              v-for="item in labels"
              :key="item.id"
              class="songs-labe-item"
              :class="{'songs-lable-choose':item.area===chooseLabel}"
              @click="[chooseLabel=item.area,getData(item)]"
      >{{item.area}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "songsLabel",
    props:{
      labels:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        chooseLabel:"全部"
      }
    },
    methods:{
      getData(obj){
        this.$emit('changeLabel',obj)
      }
    }
  }
</script>

<style scoped>
  .songs-label-wrap{
    width: 100%;
    height: auto;
    border:2px solid #e8eaec;
  }
  .songs-label-list{
    width: 100%;
    height: 54px;
    padding-right:20px ;
    line-height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .songs-labe-item{
    color: black;
    font-size: 16px;
    font-weight: bold;
    border-radius: 2px;
    padding:0 25px;
    margin-left: 10px;
    transition: .3s;
    border-bottom:3px solid  transparent;
  }
  .songs-labe-item:hover{
    border-bottom:3px solid  crimson;
  }
  .songs-lable-choose{
    border-bottom:3px solid  crimson;
    color: crimson;
  }
</style>