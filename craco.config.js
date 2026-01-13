//npm i @craco/craco@alpha -D
const path = require('path');
const CracoLessPlugin = require('craco-less');
const reslove = dir => path.resolve(__dirname, dir);
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#181616' }, //这个可以改变antd组件的默认颜色
            javascriptEnabled: true
          }
        }
      }
    }
  ],

  webpack: {
    alias: {
      '@': reslove('src'),
      components: reslove('src/components')
    }
  }
};
