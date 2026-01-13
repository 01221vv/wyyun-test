import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const Songs: React.FC<IProps> = (props) => {
  return <div>songs</div>;
};

export default Songs;