import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from '@/App';
import { HashRouter } from 'react-router-dom';
import './assets/css/index.less';
import store from './store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme/index';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode></React.StrictMode>这个严格模式
  <Provider store={store}>
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            // 暗色主题相关配置
            darkItemBg: '#242424', // 暗色模式菜单背景
            darkItemSelectedBg: '#000000ff', // 选中项背景色（使用你的主色调）
            darkItemHoverBg: '#242424' // hover 背景色（带透明度）
          }
        }
      }}
    >
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </ConfigProvider>
  </Provider>
);
