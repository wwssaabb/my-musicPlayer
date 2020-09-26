<template>
  <div class="label-wrap">
    <div class="label-list">
      <span class="type-show" v-if="type">{{typeShow}}</span>
      <span
              v-for="item in labels"
              :key="item.id||item"
              class="labe-item"
              :class="{'lable-choose':(item.area||item)===chooseLabel}"
              @click="[chooseLabel=item.area||item,getData(item)]"
      >{{item.area||item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tagbar",
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
      },
    },
    data(){
      return{
        chooseLabel:this.labels[0]
      }
    },
    methods:{
      getData(obj){
        console.log(typeof obj ==='object')
        if (typeof obj ==='object'){
          this.$emit('changeLabel',obj)
        }else{
          this.$emit('changeLabel',obj,this.type)
        }

      }
    },
    watch:{
      labels(){
        this.chooseLabel=this.labels[0]
      }
    },
    computed:{
      typeShow(){
        return this.type==='area'?'地区:':this.type==='type'?'类型:':'排序:'
      }
    }
  }
</script>

<style scoped>
  .label-wrap{
    width: 100%;
    height: auto;
    padding: 5px 20px;
  }
  .label-list{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: flex-start;
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
  .type-show{
    margin-right: 10px;
    line-height: 50px;
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
</style>