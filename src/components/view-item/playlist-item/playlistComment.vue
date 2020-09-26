<template>
  <div class="playlist-comment-wrap">
    <div class="playlist-hotcomment-wrap" v-if="hotCommentsTotal!==0">
      <comment :title="hotCommentTitle" :comments="hotComments" />
    </div>
    <div class="playlist-newcomment-wrap">
      <comment :title="newCommentTitle"
               :comments="newComments"
               :page="true"
               :total="newCommentsTotal"
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
    name: "playlistComment",
    components:{
      comment
    },
    props:{
      hotCommentsTotal:0,
      newCommentsTotal:0,
      hotComments:{
        type:Array,
        default(){
          return []
        }
      },
      newComments:{
        type:Array,
        default(){
          return []
        }
      },
      subNewParams:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      hotCommentTitle(){
        console.log(this.hotComments)
        return `热门评论(${this.hotCommentsTotal})`
      },
      newCommentTitle(){
        console.log(this.newComments)
        return `最新评论(${this.newCommentsTotal})`
      }
    },
    methods:{
      changePage(page){
        this.subNewParams.page=page
        this.$bus.$emit('changePage',this.subNewParams)
      }
    }
  }
</script>

<style scoped>
  .playlist-comment-wrap{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>