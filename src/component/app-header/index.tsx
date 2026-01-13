import React, { ReactElement } from 'react';
import type { ReactNode, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { AppHeaderWrapper } from './styled';
interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
const AppHeader: React.FC<IProps> = props => {
  return (
    <AppHeaderWrapper>
      <div className="nav content">
        <Link to="/discover">discover</Link>
        <Link to="/focus">focus</Link>
        <Link to="/mine">mine</Link>
        <Link to="/download">downLoad</Link>
      </div>
    </AppHeaderWrapper>
  );
};
export default AppHeader;
