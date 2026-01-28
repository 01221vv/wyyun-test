import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import TopAreaStyle from './style';
interface IProps {
  // 定义组件的属性类型
  title?: string;
  moreLink?: string;
  children?: ReactNode;
  arr?: string[]; // 将类型从ReactElement[]改为string[]
  fontSize?: number;
}

const TopArea: React.FC<IProps> = props => {
  // 跳转路由
  const navigate = useNavigate();
  //更多
  const morehandleClick = () => {
    navigate(props.moreLink || '系统错误');
  };
  return (
    <TopAreaStyle>
      <div className="top-area">
        <div className="top-area-left">
          <div
            className="top-area-left-title"
            style={{ fontSize: props.fontSize || 20 }}
          >
            {props.title}
          </div>
          {props.arr?.map((item, index) => (
            <React.Fragment key={index}>
              <div className="top-area-left-item">{item}</div>
              <span>|</span>
            </React.Fragment>
          ))}
        </div>
        <div className="top-area-right">
          <p
            onClick={morehandleClick}
            style={{ cursor: 'pointer', fontSize: 10 }}
          >
            更多-&gt;
          </p>
        </div>
      </div>
    </TopAreaStyle>
  );
};

export default TopArea;
