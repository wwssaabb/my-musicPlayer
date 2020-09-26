<template>
  <div class="mvs-wrap">
    <div class="mvs-main">
      <div class="mvs-label-wrap">
        <tagbar :labels="area" :type="'area'" @changeLabel="changeLabel" class="mvs-label-area" :key="'area'"/>
        <tagbar :labels="type" :type="'type'" @changeLabel="changeLabel" class="mvs-label-type" :key="'type'"/>
        <tagbar :labels="order" :type="'order'" @changeLabel="changeLabel" class="mvs-label-order" :key="'order'"/>
      </div>
      <mvsImageShow :mvs="mvs" class="mvs-container"/>
      <mvsPage :obj="chooseParams" :total="total" class="mvs-page" @changeShowList="changePage"/>
    </div>
  </div>
</template>

<script>
import {getNewMvsData} from '../../network/request-item/request-base'
import tagbar from '../components/common/label/tagbar'
import mvsImageShow from '../components/view-item/mvs-item/mvsImageShow'
import mvsPage from '../components/view-item/mvs-item/mvsPage'

export default {
  name: 'mvs',
  components:{
    tagbar,
    mvsImageShow,
    mvsPage

  },
  data() {
    return {
      area:['全部','内地','港台','欧美','日本','韩国'],
      type:['全部','官方版','原生','现场版','网易出品'],
      order:['上升最快','最热','最新'],
      chooseParams:{},
      mvs:[],
      total:0
    }
  },
  methods: {
    getNewMvsData(area,type,order,page){
      getNewMvsData(area,type,order,page).then(res=>{
        console.log(res)
        if (res){
          if (res.data.count){
            this.total=res.data.count
          }
          this.mvs=res.data.data
        }
      })
    },
    getData(params){
      this.getNewMvsData(params.area,params.type,params.order,params.page)
    },
    changeLabel(item,type){
      switch (type) {
        case 'area':this.chooseParams[type]=item;this.getData(this.chooseParams);break;
        case 'type':this.chooseParams[type]=item;this.getData(this.chooseParams);break;
        case 'order':this.chooseParams[type]=item;this.getData(this.chooseParams);break;
      }
    },
    changePage(obj){
      this.getData(obj)
    }
  },
  created() {
    //初次获取数据，数据默认
    this.getNewMvsData()
    this.chooseParams.area=this.area[0]
    this.chooseParams.type=this.type[0]
    this.chooseParams.order=this.order[0]
    this.chooseParams.page=1
  },

}
</script>

<style >
  .mvs-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
  }
  .mvs-main{
    width: 70%;
    height: auto;
    background-color: rgba(245, 247, 249, .75);
  }
  .mvs-label-wrap{
    width: 100%;
    height:auto;
    border: 2px solid #e8eaec;
  }
  .mvs-label-area,
  .mvs-label-area,
  .mvs-label-area{
    width: 100%;
    height: auto;
  }
  .mvs-container{
    width: 100%;
    height: auto;
  }
  .mvs-page{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
</style>
