import React, { ReactElement } from 'react';
import type { ReactNode, Suspense } from 'react';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const AppFooter: React.FC<IProps> = props => {
  return (
    <div style={{ height: 100, textAlign: 'center' }}>
      最后没有什么东西，填充一下
    </div>
  );
};
export default AppFooter;
