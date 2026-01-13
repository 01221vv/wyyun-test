import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const Mine: React.FC<IProps> = props => {
  return <div>mine</div>;
};
export default Mine;
