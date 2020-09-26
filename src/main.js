import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

// 导入 iview
import ViewUI from 'view-design'
// 导入 iview 样式
import 'view-design/dist/styles/iview.css'
// 安装 iview 插件
Vue.use(ViewUI)

//轮播图插件ElementUI，iview的轮播图不太满意
// 导入 ElementUI
import ElementUI from 'element-ui';
// 导入 ElementUI 样式
import 'element-ui/lib/theme-chalk/index.css';
// 安装 ElementUI 插件
Vue.use(ElementUI)

//bus安装
Vue.prototype.$bus=new Vue()

//安装moment插件处理时间戳
import moment from "moment"
Vue.prototype.$moment=moment
//moment汉化
moment.locale('zh-cn')

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  // 挂载到Vue示例上
  router
}).$mount('#app')
