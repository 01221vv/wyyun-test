import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from '@/App';
import { HashRouter } from 'react-router-dom';
import './assets/css/index.less';
import store from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme/index';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode></React.StrictMode>这个严格模式
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);
