import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';

import TopArea from '@/component/top-area';
import LiveSinger from '@/component/livesingerC';
import { useAppSelector, appShallowEqual } from '@/store';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const DiscoverRight: React.FC<IProps> = props => {
  const SingerList = useAppSelector(
    state => ({
      newSongs: state.recommend.SingerList
    }),
    appShallowEqual
  );
  const newSongList = SingerList.newSongs.slice(0, 5);
  const newSongList2 = SingerList.newSongs.slice(6, 10);
  return (
    <div>
      <TopArea title="推荐歌手" fontSize={16} />
      {newSongList.map((item, index) => (
        <LiveSinger key={index} {...item} />
      ))}
      <button
        style={{
          width: '100%',
          margin: '15px 0',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          color: '#000000ff',
          padding: '10px 0',
          cursor: 'pointer'
        }}
      >
        成为音乐人
      </button>
      <TopArea title="热门歌手" fontSize={16} />
      {newSongList2.map((item, index) => (
        <LiveSinger key={index} {...item} fontSize={12} fontSize2={40} />
      ))}
    </div>
  );
};

export default DiscoverRight;
