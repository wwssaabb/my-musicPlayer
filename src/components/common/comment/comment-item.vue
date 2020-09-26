<template>
  <div class="comment-item-wrap">
    <h2 class="comment-title">
      {{title}}
    </h2>
    <div class="comment-main">
      <div class="comment-item" v-for="user in comments">
        <img class="comment-item-avatar" :src="user.user.avatarUrl" alt="">
        <div class="comment-item-content">
          <p class="comment-item-review">
            <span class="comment-user-nickname">{{user.user.nickname}}</span>:
            <span class="comment-review-text">{{user.content}}</span>
          </p>
          <div class="comment-item-reply" v-if="user.beReplied.length!==0">
            <p class="comment-item-reply" v-for="reply in user.beReplied">
              <span class="comment-reply-nickname">{{reply.user.nickname}}</span>:
              <span class="comment-reply-text">{{reply.content}}</span>
            </p>
          </div>
          <p class="comment-item-time">{{getCreatedTime(user.time)}}</p>
        </div>
      </div>
    </div>
    <div class="comment-page-wrap" v-if="page">
      <page class="comment-page"
            :total="total"
            :page-size="size"
            @on-change="changePage"
      ></page>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    props:{
      title:{
        type:String,
        default(){
          return ""
        }
      },
      comments:{
        type:Array,
        default() {
          return []
        }
      },
      page:{
        type:Boolean,
        default(){
          return false
        }
      },
      subParams:{
        type:Object,
        default(){
          return {}
        }
      },
      total:0,
      size:0
    },
    methods:{
      getCreatedTime(time){
        return this.$moment(time).format('YYYY-MM-DD HH:mm:ss')
      },
      changePage(page){
        console.log(page)
        this.subParams.page=page
        this.$bus.$emit('changePage',this.subParams)
      }
    },
    watch:{
      comments(){
        console.log(this.comments)
      }
    }

  }
</script>

<style scoped>
  .comment-item-wrap{
    width: 100%;
    height: 100%;
  }
  .comment-title{
    color: #1b2947;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
  .comment-main{
    width: 100%;
    height: auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .comment-item{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
  .comment-item:nth-child(1){
    margin-top: -20px;
  }
  .comment-item-avatar{
    width: 40px;
    height: 40px;
    border-radius:50%;
  }
  .comment-user-nickname,
  .comment-reply-nickname{
    color: #007aff;
  }
  .comment-item-content{
    flex:1;
    margin-left:10px;
    padding: 5px 0;
  }
  .comment-item-reply{
    border-radius:5px;
    padding: 5px 0;
    background-color: rgba(0,0,0,0.03);
  }
  .comment-review-text,
  .comment-reply-text{
    line-height: 18px;
    color: black;
  }
  .comment-page-wrap{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>