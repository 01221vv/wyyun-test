import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
// import Home from '@/views/home/index';
// import Discover from '@/views/discover/index';
// import Focus from '@/views/focus/index';
// import Mine from '@/views/mine/index';
const Home = lazy(() => import('@/views/home/index'));
const Discover = lazy(() => import('@/views/discover/index'));
const Focus = lazy(() => import('@/views/focus/index'));
const Mine = lazy(() => import('@/views/mine/index'));
const NewSongs = lazy(() => import('@/views/discover/c-views/newSongs/index'));
const Ranking = lazy(() => import('@/views/discover/c-views/ranking/index'));
const Recommed = lazy(() => import('@/views/discover/c-views/recommed/index'));
const Singer = lazy(() => import('@/views/discover/c-views/singer/index'));
const Songs = lazy(() => import('@/views/discover/c-views/songs/index'));
const Video = lazy(() => import('@/views/discover/c-views/video/index'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },

  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/newSongs',
        element: <NewSongs />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/recommed',
        element: <Recommed />
      },
      {
        path: '/discover/singer',
        element: <Singer />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/video',
        element: <Video />
      }
    ]
  }

  // {
  //     path: '/login',
  //     element: <Login />,
  // }
];

export default routes;
