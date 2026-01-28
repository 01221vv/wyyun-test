import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';
import { RankStyle } from './style';
import CRank from '@/component/rank/index';
import { useSelector } from 'react-redux';
import TopArea from '@/component/top-area';

interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
}

const Rank: React.FC<IProps> = props => {
  const RankList = useSelector((state: any) => state.recommend.RankList || []);

  // 从RankList中提取歌曲列表
  // 确保RankList是数组且有足够的数据
  const getSongList = (index: number) => {
    if (
      Array.isArray(RankList) &&
      RankList[index] &&
      RankList[index].playlist &&
      RankList[index].playlist.tracks
    ) {
      return RankList[index].playlist.tracks
        .slice(0, 10)
        .map((track: any) => track.name);
    }
  };

  // 获取排行榜标题
  const getRankTitle = (index: number) => {
    if (
      Array.isArray(RankList) &&
      RankList[index] &&
      RankList[index].playlist
    ) {
      return RankList[index].playlist.name;
    }
    // 默认标题
    const defaultTitles = ['飙升榜', '新歌榜', '原创榜'];
    return defaultTitles[index] || '排行榜';
  };

  return (
    <div>
      <TopArea title="排行榜" />
      <RankStyle>
        {/* 飙升榜 */}
        <CRank
          title={getRankTitle(0)}
          arr={getSongList(0)}
          iconText={getRankTitle(0)}
        />

        {/* 新歌榜 */}
        <CRank
          title={getRankTitle(1)}
          arr={getSongList(1)}
          iconText={getRankTitle(1)}
        />

        {/* 原创榜 */}
        <CRank
          title={getRankTitle(2)}
          arr={getSongList(2)}
          iconText={getRankTitle(2)}
        />
      </RankStyle>
    </div>
  );
};

export default Rank;
