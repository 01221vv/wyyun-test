import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

// 定义拦截器的类型
export interface RequestInterceptors<T = AxiosResponse> {
  // 请求成功的拦截（兼容实例级和单次请求级）
  requestSuccessFn?: (config: any) => any;
  // 请求失败的拦截
  requestFailureFn?: (err: any) => any;
  // 响应成功的拦截
  responseSuccessFn?: (res: T) => T;
  // 响应失败的拦截
  responseFailureFn?: (err: any) => any;
}

// 扩展AxiosRequestConfig，添加自定义的拦截器配置
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 可选的拦截器配置
  interceptors?: RequestInterceptors<T>;
  // 是否显示加载状态
  showLoading?: boolean;
}
