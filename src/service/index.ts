import HYRequest from './request';
import baseURL, { timeout } from './config';

const hyRequest = new HYRequest({
  baseURL,
  timeout,
  interceptors: {
    requestSuccessFn: config => {
      // 可以在这里添加token等配置
      return config;
    },
    responseSuccessFn: res => {
      return res;
    }
  }
});

export default hyRequest;
