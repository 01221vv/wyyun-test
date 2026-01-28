import { useAppSelector, appShallowEqual } from '@/store';

import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Carousel } from 'antd';
import { BannerItem } from './style';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}

const CompBanners: React.FC<IProps> = props => {
  // 取当前轮播索引，默认为 0
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerList = useAppSelector(
    state => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  );
  // 切换触发回调
  const afterChange = (currentIndex: number) => {
    setCurrentIndex(currentIndex);
  };
  //实现高斯模糊

  let NewImg = bannerList.banners[currentIndex]?.imageUrl;

  if (NewImg) {
    NewImg = NewImg + '?imageView&blur=40x40';
  }
  return (
    <BannerItem
      style={{
        backgroundImage: `url('${NewImg}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="banner-carousel">
        <div className="banner-carousel-left">
          <Carousel afterChange={afterChange} arrows infinite={true} autoplay>
            {bannerList.banners.map((item, index) => (
              <div className="banner-item-img" key={index}>
                <img src={item.imageUrl} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="banner-loading">
          <img
            src={require('@/assets/img/loading.png')}
            className="banner-loading-img"
          />
          <button className="banner-download-btn">下载APP</button>
        </div>
      </div>
    </BannerItem>
  );
};

export default CompBanners;
