<template>
  <div class="playlists-wrap">
    <div class="playlists-mian">
      <boutique :boutique="boutique"/>
      <playlist :lable-list="labelList" @getNewPlayListData="changePlayLsit"/>
      <imageShow :show-list="playLists"/>
      <playlistsPage class="playlists-page" :label="nowLabel" :total="nowTotal" @changeShowList="changePage"/>
    </div>
  </div>
</template>

<script>
  import {getBoutiqueData, getPlayListData} from '../../network/request-item/request-base.js'
  import boutique from '../components/view-item/playLists-item/boutique'
  import playlist from '../components/view-item/playLists-item/playlist'
  import imageShow from '../components/view-item/playLists-item/playlistsImageShow'
  import playlistsPage from '../components/common/Page/playlists-page'

  export default {
    name: 'playlists',
    components: {
      boutique,
      playlist,
      imageShow,
      playlistsPage
    },
    data() {
      return {
        labelList: [
          {cat: "全部", page: 1},
          {cat: "欧美", page: 1},
          {cat: "华语", page: 1},
          {cat: "流行", page: 1},
          {cat: "说唱", page: 1},
          {cat: "摇滚", page: 1},
          {cat: "民谣", page: 1},
          {cat: "电子", page: 1},
          {cat: "轻音乐", page: 1},
          {cat: "影视原声", page: 1},
          {cat: "ACG", page: 1},
          {cat: "怀旧", page: 1},
          {cat: "治愈", page: 1},
          {cat: "旅行", page: 1},
        ],
        boutique: [],
        playLists: [],
        oldLAble: {},
        nowLabel: {},
        nowTotal: 0
      }
    },
    created() {
      //首次请求精品歌单，默认cat为全部
      this.getBoutiqueData()
      //首次请求歌单列表，默认cat为全部，page为1
      this.getPlayListData()
      //第一次的歌单展示数据nowLabel初始化为labelList[0]
      this.nowLabel = this.labelList[0]
    },
    watch: {
      nowLabel() {
        let cat = this.nowLabel.cat
        let page = this.nowLabel.page
        //重新请求精品歌单和歌单列表，未判断重复请求
        /*if (){*/
        this.getBoutiqueData(cat)
        this.getPlayListData(cat, page)
        /*}*/

        //获取label的对象
      },
      labelList: {
        handler() {
        },
        deep: true
      }
    },
    methods: {
      getBoutiqueData(cat) {
        getBoutiqueData(cat).then(res => {
          this.boutique = res.data.playlists
        })
      },
      getPlayListData(cat, page) {
        getPlayListData(cat, page).then(res => {
          this.playLists = res.data.playlists
          this.nowTotal = res.data.total
        })
      },
      //监听点击的label
      changePlayLsit(nowLabel) {
        this.nowLabel = this.labelList.find(a => a.cat === nowLabel)
      },
      //监听分页器的页数改变返回
      changePage(newLabel) {
        let nowLabel = this.labelList.find(a => a.cat === newLabel.cat)
        nowLabel.page = newLabel.page
        this.nowLabel.cat = nowLabel.cat
        this.nowLabel.page = nowLabel.page
        this.getPlayListData(nowLabel.cat, nowLabel.page)
      }
    }
  }
</script>

<style>
  .playlists-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
  }

  .playlists-mian {
    width: 70%;
    height: auto;
    background-color: rgba(245, 247, 249, .75);
  }

  .playlists-page {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #e8eaec;
  }

</style>
