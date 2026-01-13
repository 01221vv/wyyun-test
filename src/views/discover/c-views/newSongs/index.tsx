import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const NewSongs: React.FC<IProps> = props => {
  return <div>newSongs</div>;
};
export default NewSongs;