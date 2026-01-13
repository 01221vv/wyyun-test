import HYRequest from './index';
import type { HYRequestConfig } from './type';

// 1. 创建HYRequest实例
const request = new HYRequest({
  baseURL: '/banner',
  timeout: 10000,
  // 实例级拦截器
  interceptors: {
    requestSuccessFn: config => {
      // 添加token
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // 显示加载状态
      console.log('显示加载中...');
      return config;
    },
    requestFailureFn: err => {
      console.error('请求失败:', err);
      return err;
    },
    responseSuccessFn: res => {
      // 隐藏加载状态
      console.log('隐藏加载中...');
      // 统一处理响应数据
      return res;
    },
    responseFailureFn: err => {
      console.error('响应失败:', err);
      // 统一错误处理
      if (err.response?.status === 401) {
        // 未授权，跳转到登录页
        // router.push('/login');
      }
      return err;
    }
  }
});

// 2. 定义接口响应类型
interface User {
  id: number;
  name: string;
  email: string;
}

interface Article {
  id: number;
  title: string;
  content: string;
  author: User;
}

// 3. 基本使用示例
// GET请求
export const getUserList = () => {
  return request.get<User[]>({
    url: '/users',
    params: {
      page: 1,
      limit: 10
    }
  });
};

// GET请求（带类型）
export const getUserById = (id: number) => {
  return request.get<User>({
    url: `/users/${id}`
  });
};

// POST请求
export const createUser = (userData: Omit<User, 'id'>) => {
  return request.post<User>({
    url: '/users',
    data: userData
  });
};

// PUT请求
export const updateUser = (id: number, userData: Partial<User>) => {
  return request.patch<User>({
    url: `/users/${id}`,
    data: userData
  });
};

// DELETE请求
export const deleteUser = (id: number) => {
  return request.delete({
    url: `/users/${id}`
  });
};

// 4. 单次请求拦截器示例
export const getArticleList = () => {
  return request.get<Article[]>({
    url: '/articles',
    // 单次请求拦截器（会覆盖实例级拦截器）
    interceptors: {
      requestSuccessFn: config => {
        // 针对本次请求的特殊处理
        config.headers['X-Custom-Header'] = 'custom-value';
        return config;
      },
      responseSuccessFn: res => {
        // 针对本次响应的特殊处理
        console.log('文章列表响应:', res);
        return res;
      }
    }
  });
};

// 5. 使用示例
async function exampleUsage() {
  try {
    // 获取用户列表
    const users = await getUserList();
    console.log('用户列表:', users);

    // 创建新用户
    const newUser = await createUser({
      name: '张三',
      email: 'zhangsan@example.com'
    });
    console.log('创建的用户:', newUser);

    // 获取文章列表
    const articles = await getArticleList();
    console.log('文章列表:', articles);
  } catch (error) {
    console.error('请求失败:', error);
  }
}

// 导出请求实例供全局使用
export default request;
