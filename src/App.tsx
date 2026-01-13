import React, { useEffect, Suspense } from 'react';
import './assets/css/index.less';
import { Link, useRoutes } from 'react-router-dom';
import routes from '@/router/index';
import AppHeader from '@/component/app-header/index';
import AppFooter from './component/app-footer';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback={<div>loading...</div>}>{useRoutes(routes)}</Suspense>
      <AppFooter />
    </div>
  );
}

export default App;
