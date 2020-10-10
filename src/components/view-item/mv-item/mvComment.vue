<template>
  <div class="mv-comment-wrap">
    <div class="mv-hotcomment-wrap" v-if="hotcommentIsShow">
      <comment :title="hotCommentTitle" :comments="comments.hotComments" />
    </div>
    <div class="mv-newcomment-wrap">
      <comment :title="newCommentTitle"
               :comments="comments.comments"
               :page="true"
               :total="comments.total"
               :size="20"
               :subParams="subNewParams"
               @changePage="changePage"
      />
    </div>
  </div>
</template>

<script>
  import comment from '../../common/comment/comment-item'
  export default {
    name: "mvComment",
    components:{
      comment
    },
    props:{
      comments:{
        type:Object,
        default(){
          return {}
        }
      },
      subNewParams:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        hotComments:[],
        newComments:[],

      }
    },
    computed:{
      hotCommentTitle(){
        return `热门评论(${this.hotCommentsTotal})`
      },
      newCommentTitle(){
        return `最新评论(${this.newCommentsTotal})`
      },
      hotCommentsTotal(){
        return this.comments.hotComments.length
      },
      newCommentsTotal(){
        return this.comments.total
      },
      hotcommentIsShow(){
       return this.comments.hotComments===undefined?false:true
        }
    },
    methods:{
      changePage(page){
        this.$emit('changePage',page)
      }
    }
  }
</script>

<style scoped>
  .mv-comment-wrap{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>