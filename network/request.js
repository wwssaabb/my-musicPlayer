import axios from 'axios'

export function request(config){
  //创建axios实例
  const instance = axios.create({
    baseURL:'https://autumnfish.cn',
    timeout:5000
  })

  //拦截器
  instance.interceptors.request.use(config=>{
    return config
  },err=>console.log(err))

  //响应拦截
  instance.interceptors.response.use(res=>{
    return res
  },err=>console.log(err))

  return instance(config)
}