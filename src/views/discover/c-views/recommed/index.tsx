import hyRequest from '@/service/index';
import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useAppDispatch } from '@/store/index';
import {
  fetchBannerDataAction,
  fetchPlayListDataAction,
  fetchSingerListDataAction,
  fetchNewSongsListDataAction,
  fetchRankListDataAction
} from './store';
import CompBanners from './component/banner';
import HotRem from './component/hotRem';
import { RecommedStyled } from './style';
import NewSongs from './component/newSongs';
import Rank from './component/rank';
import DiscoverRight from './component/right';
interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}

const Recommed: React.FC<IProps> = props => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetchPlayListDataAction());
    dispatch(fetchSingerListDataAction());
    dispatch(fetchNewSongsListDataAction());
    dispatch(fetchRankListDataAction());
  }, [dispatch]);
  return (
    <div>
      <CompBanners />
      <RecommedStyled>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ width: '70%' }}>
            <HotRem />
            <NewSongs />
            <Rank />
          </div>
          <div
            style={{ width: '30%', padding: 10, border: '1px solid #fbd2d2ff' }}
          >
            <DiscoverRight />
          </div>
        </div>
      </RecommedStyled>
    </div>

    // {/* <div
    //   style={{
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'space-between'
    //   }}
    // >
    //   <div style={{ width: '70%' }}>
    //     <HotRem />
    //     <HotRem />
    //   </div>
    //   <div style={{ width: '30%', border: '1px solid #fbd2d2ff' }}></div>
    // </div> */}
  );
};

export default Recommed;
