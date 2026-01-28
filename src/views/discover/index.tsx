import React, { Suspense } from 'react';
import type { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DiscoverWrapper } from './style';

// 定义导航项数组
const navItems = [
  { title: '推荐歌单', path: '/discover/recommed' },
  { title: '新碟上架', path: '/discover/newSongs' },
  { title: '排行榜', path: '/discover/ranking' },

  { title: '歌手', path: '/discover/singer' },
  { title: '最新音乐', path: '/discover/songs' },
  { title: '最新视频', path: '/discover/video' }
];

interface IProps {
  children?: ReactNode;
}

const Discover: React.FC<IProps> = props => {
  return (
    <DiscoverWrapper>
      <div className="discover">
        <div className="discover-nav">
          {navItems.map((item, index) => (
            <Link key={index} className="nav-item" to={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  );
};

export default Discover;
