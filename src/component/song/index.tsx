import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';
import { SongStyle } from './style';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
  title?: string;
  total?: number;
  img?: string;
}
const SongComponent: React.FC<IProps> = props => {
  return (
    <SongStyle>
      <div className="song">
        <div className="song-img">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="song-info">
          <div className="song-info-title">{props.title}</div>
          <div className="song-info-desc">{props.total}首</div>
        </div>
      </div>
    </SongStyle>
  );
};

export default SongComponent;
