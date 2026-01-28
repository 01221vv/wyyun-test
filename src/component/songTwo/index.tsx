import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';
import { SongStyle } from './style';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  imgurl?: string;
  title?: string;
  artist?: string;
}
const SongTwo: React.FC<IProps> = props => {
  return (
    <SongStyle>
      <div className="song">
        <div className="song-img">
          <img src={props.imgurl} alt="" />
        </div>
        <div className="song-info">
          <p className="song-info-title">{props.title}</p>
          <p className="song-info-desc">{props.artist}</p>
        </div>
      </div>
    </SongStyle>
  );
};

export default SongTwo;
