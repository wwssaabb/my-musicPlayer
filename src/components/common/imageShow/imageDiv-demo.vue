<template>
  <div class="image-div">
    <img
            :src="imageParams.src"
            :alt="imageParams.alt"
            :style="imageStyle"/>
    <div
            class="image-div-icon"
            :style="iconWrapStyle">
      <Icon
              :type="iconParams.name"
              :size="iconParams.size"
              :color="iconParams.color"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "imageDiv",
    props:{
      imageParams:{
        src:"",
        alt:"",
        size:{
          type:String,
          default(){
            return 'width:100%;heidth:auto;'
          }
        },
        bgColor:{
          type:String,
          default() {
            return "background-color:transparent;";
          }
        }
      },
      iconParams:{
        name:{
          type:String,
          default(){
            return "md-arrow-dropright-circle"
          }
        },
        size:{
          type:Number,
          default(){
            return 30
          }
        },
        color:{
          type:String,
          default(){
            return "transparent"
          }
        },
        outsize:{
          type:Number,
          default(){
            return 0
          }
        }
      }

    },
    computed:{
      imageStyle(){
        return this.imageParams.size+this.imageParams.bgColor
      },
      iconWrapStyle(){
        return "width:"+(parseInt(this.iconParams.size)+parseInt(this.iconParams.outsize))+"px;height:"+(parseInt(this.iconParams.size)+parseInt(this.iconParams.outsize))+"px;"
      }
    },
    mounted() {
      console.log(this.imageParams)
      console.log(this.iconParams)
    }
  }
</script>

<style scoped>
  .image-div{
    position:relative;
  }
  .image-div-icon{
    position: absolute;
    left:50% ;
    top:50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    transition: .5s;
  }
  .image-div:hover .image-div-icon{
    opacity: 1;
  }

</style>