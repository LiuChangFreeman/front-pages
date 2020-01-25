import fetch from 'dva/fetch';
const host="https://api.aikatsucn.cn/wuhna2020";
//后端项目代码位于https://github.com/wuhan2020

export async function list(){
  let response=await fetch(`${host}/list`,{credentials: 'include'});
  return await response.json()
}

