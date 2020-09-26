import {request} from '../request.js'

//请求轮播图数据
export function getBannerData(){
  return request({
    url:'/banner'
  })
}

//请求推荐歌单
export function getPersonalizedData(){
  return request({
    url:'/personalized',
    params:{
      limit:10
    }
  })
}

//请求最新音乐
export function getnewSongData(){
  return request({
    url:'/personalized/newsong'
  })
}

//请求最新MV
export function getnewMvData(){
  return request({
    url:'/personalized/mv'
  })
}

//请求歌单列表-精品歌单
export function getBoutiqueData(cat="全部",limit=1) {
  return request({
    url:'/top/playlist/highquality',
    params:{
      limit,
      cat
    }
  })
}

//请求歌单列表-精品歌单
export function getPlayListData(cat="全部",page=1,limit=24) {
  return request({
    url:'/top/playlist',
    params:{
      limit,
      cat,
      offset:(page-1)*limit
    }
  })
}

//请求最新音乐列表
export function getNewSongsData(type=0) {
  return request({
    url: '/top/song',
    params: {
      type
    }
  })
}

//请求播放音乐url
export function playMusic(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}

//请求最新音乐列表
export function getNewMvsData(area,type,order,page=1,limit=16) {
  return request({
    url: '/mv/all',
    params: {
      area,
      type,
      order,
      limit,
      offset:(page-1)*limit
    }
  })
}

//请求搜索数据列表
export function getSearchData(keywords,type,page=1,limit) {
  switch (type) {
    case 1:limit=22;break;
    case 1000:limit=28;break;
    case 1004:limit=16;break;
  }
  return request({
    url: '/search',
    params: {
      keywords,
      type,
      limit,
      offset:(page-1)*limit
    }
  })
}

//请求歌单详细数据
export function getPlaylistDetailData(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

//获取热门评论
export function getHotCommentsData(id,type,/*page,*/limit=10) {
  return request({
    url: '/comment/hot',
    params: {
      id,
      type,//0:歌曲, 1:mv, 2:歌单, 3:专辑, 4:电台, 5:视频
      limit
      /*offset:(page-1)*limit*/
    }
  })
}

//获取最新评论
export function getNewCommentsData(id,page,limit=20) {
  return request({
    url: '/comment/playlist',
    params: {
      id,
      offset: (page - 1) * limit
    }
  })
}

//请求播放Mv地址
export function playMv(id) {
  return request({
    url: '/mv/url',
    params: {
      id
    }
  })
}

//请求相似Mv
export function playSimilarMv(mvid) {
  return request({
    url: '/simi/mv',
    params: {
      mvid
    }
  })
}

//请求Mv信息
export function playMvDetailData(mvid) {
  return request({
    url: '/mv/detail',
    params: {
      mvid
    }
  })
}

//请求歌手信息
export function playArtistDetailData(id) {
  return request({
    url: '/artists',
    params: {
      id
    }
  })
}

//请求Mv评论信息
export function playMvCommentData(id,page,limit=20) {
  return request({
    url: '/comment/mv',
    params: {
      id,
      offset:(page-1)*limit
    }
  })
}