# wuhan2020-front-pages
武汉新型冠状病毒防疫信息收集平台前端

## 快速上手
``` bash
git clone https://github.com/wuhan2020/front-pages.git
cd front-pages
yarn install
npm run start
```
然后就可以在[localhost](http://localhost:8000)调试页面
## 项目文件说明

```
.
├── README.md
├── package.json
└── src
    ├── models
    │   └── util.js(全局共用model)
    ├── routes(分页面)
    ├── services
    │   └── services.js(http请求封装)
    └── utils(辅助功能)
```
**services.js**说明
```js
import fetch from 'dva/fetch';
const host="https://api.aikatsucn.cn/wuhna2020";
//后端项目代码位于https://github.com/wuhan2020/api-server
//host代表实际发布所使用的http-triger

export async function list(){
  let response=await fetch(`${host}/list`,{credentials: 'include'});
  return await response.json()
}
```
## antd-mobile文档
https://mobile.ant.design/docs/react/introduce-cn
## dva文档
https://dvajs.com/guide/concepts.html
