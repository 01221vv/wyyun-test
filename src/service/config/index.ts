// export const baseURL = 'http://localhost:3000/';

let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000/';
} else {
  baseURL = 'http://localhost:3001/';
  //   webpack中使用如下配置
  //   baseURL = 'https://musicapi.leanapp.cn/';
  // 生产环境先打包 npm run build
  // 然后将打包后的文件部署到服务器上
  // 服务器上运行 node server.js
  //本地部署 看一下运行提示 npm i -g serve
  // 然后运行 serve -s build
}
export default baseURL;
export const timeout = 50000;
