import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Discover = lazy(() => import('@/views/discover/index'));
const Focus = lazy(() => import('@/views/focus/index'));
const Mine = lazy(() => import('@/views/mine/index'));
const NewSongs = lazy(() => import('@/views/discover/c-views/newSongs/index'));
const Ranking = lazy(() => import('@/views/discover/c-views/ranking/index'));
const Recommed = lazy(() => import('@/views/discover/c-views/recommed/index'));
const Singer = lazy(() => import('@/views/discover/c-views/singer/index'));
const Songs = lazy(() => import('@/views/discover/c-views/songs/index'));
const Video = lazy(() => import('@/views/discover/c-views/video/index'));
const Player = lazy(() => import('@/views/player/index'));
const routes: RouteObject[] = [
  // {
  //   path: '/',
  //   element: <Discover />
  // },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/player',
    element: <Player />
  },
  {
    path: '/',
    element: <Discover />,
    children: [
      {
        path: '', // 默认子路由
        element: <Recommed />
      },
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
];

export default routes;
