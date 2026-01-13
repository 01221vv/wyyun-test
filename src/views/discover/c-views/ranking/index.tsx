import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const Ranking: React.FC<IProps> = (props) => {
  return <div>ranking</div>;
};

export default Ranking;