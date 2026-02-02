import React from 'react';

import {
  CloseCircleOutlined,
  DeleteOutlined,
  PlusSquareOutlined
} from '@ant-design/icons';

import {
  PlayerWrapper,
  PlayerLayout,
  PlayerHeader,
  PlayerContent,
  PlayerSider,
  LayoutContainer
} from './style';
interface PlayerProps {
  children?: React.ReactNode;
}
const ShowSong: React.FC<PlayerProps> = () => (
  <PlayerWrapper>
    <PlayerLayout>
      <PlayerHeader>
        <div className="header-left">
          <div className="title">播放列表（）</div>
          <div className="close">
            <PlusSquareOutlined style={{ fontSize: 20 }} />
            收藏全部
            <DeleteOutlined style={{ fontSize: 20 }} />
            删除
          </div>
        </div>

        <div className="current-song" style={{ textAlign: 'center' }}>
          当前：
        </div>
        <div className="current-time">
          <CloseCircleOutlined />
        </div>
      </PlayerHeader>
      <LayoutContainer>
        <PlayerContent>Content</PlayerContent>
        <PlayerSider></PlayerSider>
      </LayoutContainer>
    </PlayerLayout>
  </PlayerWrapper>
);

export default ShowSong;
