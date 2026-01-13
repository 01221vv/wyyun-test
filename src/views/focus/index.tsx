import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const Focus: React.FC<IProps> = props => {
  return <div>focus</div>;
};
export default Focus;
