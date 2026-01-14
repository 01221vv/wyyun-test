import React, { Suspense } from 'react';
import type { ReactNode } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { DiscoverWrapper } from './style';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}

// 导航项数组
const navItems = [
  { title: '新碟上架', path: '/discover/newSongs' },
  { title: '排行榜', path: '/discover/ranking' },
  { title: '推荐歌单', path: '/discover/recommed' },
  { title: '歌手', path: '/discover/singer' },
  { title: '最新音乐', path: '/discover/songs' },
  { title: '最新视频', path: '/discover/video' }
];

const Discover: React.FC<IProps> = props => {
  const location = useLocation();

  // 检查当前路径是否以'/discover'开头
  const isDiscoverPage = location.pathname.startsWith('/discover');

  return (
    <DiscoverWrapper>
      {/* 导航栏容器始终存在 */}
      <div className={`discover ${isDiscoverPage ? 'show-nav' : ''}`}>
        <div className="discover-nav">
          {isDiscoverPage &&
            navItems.map((item, index) => {
              // 检查当前导航项是否被选中
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={index}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  to={item.path}
                >
                  {item.title}
                  {/* 选中时显示三角指示器 */}
                  {isActive && <span className="nav-triangle"></span>}
                </Link>
              );
            })}
        </div>
      </div>

      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  );
};

export default Discover;
