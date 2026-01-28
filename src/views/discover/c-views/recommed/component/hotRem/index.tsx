import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { useAppSelector, appShallowEqual } from '@/store';
import TopArea from '@/component/top-area';
import SongComponent from '@/component/song';
import { HotRemStyled } from './style';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const HotRem: React.FC<IProps> = props => {
  const playList = useAppSelector(
    state => ({
      playList: state.recommend.PlayList
    }),
    appShallowEqual
  );
  return (
    <div>
      <TopArea
        title="热门推荐"
        arr={['全部', '华语', '欧美', '日本', '韩国']}
      />

      <HotRemStyled>
        <div className="hot-rem">
          {playList.playList.map(item => (
            <SongComponent
              key={item.id}
              title={item.name}
              total={item.playCount}
              img={item.picUrl + '?param=100y100'}
            />
          ))}
        </div>
      </HotRemStyled>
    </div>
  );
};

export default HotRem;
