import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';
import { LiveSingerStyle } from './style';
interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;

  picUrl?: string;
  name?: string;
  fontSize?: number;
  fontSize2?: number;
  alias?: Array<string>;
}
const LiveSinger: React.FC<IProps> = props => {
  return (
    <LiveSingerStyle>
      <div
        className="live-singer-card"
        style={{ height: props.fontSize2 || 60 }}
      >
        <img
          src={props.picUrl}
          alt={props.name}
          style={{ width: props.fontSize2, height: props.fontSize2 }}
          className="img"
        />
        <div className="info">
          <h2 className="title" style={{ fontSize: props.fontSize }}>
            {props.name}
          </h2>
          <p className="where" style={{ fontSize: props.fontSize }}>
            {props.alias?.join('/')}
          </p>
        </div>
      </div>
    </LiveSingerStyle>
  );
};

export default LiveSinger;
