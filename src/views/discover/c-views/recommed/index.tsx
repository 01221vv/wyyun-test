import hyRequest from '@/service/index';
import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}
interface IBanner {
  imageUrl: string;
  targetId: number;
  type: number;
}
const Recommed: React.FC<IProps> = props => {
  const [bannerList, setBannerList] = useState<IBanner[]>([]);
  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then(res => {
        setBannerList(res.banners || []);
        console.log(process.env.NODE_ENV);
      });
  }, []);
  return <div>recommed</div>;
};

export default Recommed;
