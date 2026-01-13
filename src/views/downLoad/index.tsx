import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';

interface DownloadProps {
  // 定义组件的属性类型
  children?: ReactNode;
  name: string;
  age: number;
  height?: number;
}
const Download: React.FC<DownloadProps> = props => {
  return (
    <div>
      name:{props.name},age:{props.age},height:{props.height}
    </div>
  );
};
export default Download;
// export default memo(Download);老版本性能优化
