<template>
  <i-input
          :value.sync="value"
          :placeholder="defaultText"
          style="width:300px;"

  ></i-input>
</template>

<script>
  export default {
    name: "iInput",
    props:{
      defaultText:{
        type:String,
        default(){
          return "请输入关键词..."
        }
      }
    },
    data(){
      return{
        value:""
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>