<template>
  <div class="label-wrap">
    <div class="label-list">
      <span
              v-for="item in labels"
              :key="item.id||item"
              class="labe-item"
              :class="{'lable-choose':(item.area||item)===chooseLabel}"
              @click="[chooseLabel=item.area||item,getData(item,)]"
      >{{item.area||item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mvsLabel",
    props:{
      labels:{
        type:Array,
        default(){
          return []
        }
      },
      type:{
        type:String,
        default() {
          return '';
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
        if (typeof obj ==='object'){
          this.$emit('changeLabel',obj)
        }else{
          this.$emit('changeLabel',obj)
        }

      }
    },
    watch:{
      labels(){
        this.chooseLabel=this.labels[0]
      }
    }
  }
</script>

<style scoped>
  .label-wrap{
    width: 100%;
    height: auto;
    border:2px solid #e8eaec;
  }
  .label-list{
    width: 100%;
    height: 54px;
    padding-right:20px ;
    line-height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .labe-item{
    color: black;
    font-size: 16px;
    font-weight: bold;
    border-radius: 2px;
    padding:0 25px;
    margin-left: 10px;
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