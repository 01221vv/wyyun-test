import React, { Suspense } from 'react';
import type { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const Discover: React.FC<IProps> = props => {
  return (
    <div>
      <div>
        <Link to="/discover/newSongs">新碟上架</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/recommed">推荐歌单</Link>
        <Link to="/discover/singer">歌手</Link>
        <Link to="/discover/songs">最新音乐</Link>
        <Link to="/discover/video">最新视频</Link>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Discover;
