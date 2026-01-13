import React, { ReactElement } from 'react';
import type { ReactNode, Suspense } from 'react';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const Home: React.FC<IProps> = props => {
  return <div>home</div>;
};
export default Home;
