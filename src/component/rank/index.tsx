import React from 'react';
import type { ReactNode } from 'react';
import { RankStyle } from './style';
import { getSongDetail } from '@/utils/getSongDetail';
import { useDispatch } from 'react-redux';
import { CurrentSongId } from '@/store/moudle/getIdToPlay';
import { setReadySong } from '@/store/moudle/readySong';
interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
  title?: string;
  arr?: string[]; // 修改为字符串数组，用于歌曲列表
  showFooter?: boolean; // 是否显示底部链接
  iconText?: string; // 图标文字
  id?: number[]; // 歌曲ID数组
}

const CRank: React.FC<IProps> = props => {
  const dispatch = useDispatch();
  //第一次渲染时，默认展示
  const {
    id,
    title = '飙升榜', // 默认标题
    arr = [
      // 默认歌曲列表
      '爱错',
      '海屿你',
      '谁的错',
      'Never Let Go',
      '狂潮肆起',
      'Free "炙热 pt2" SASIOVERL...',
      '普通的日子',
      "I'm Waiting (Radio Edit)",
      'Dear D (亲爱的告诉你)',
      'Town/Blunt'
    ],
    showFooter = true, // 默认显示底部
    iconText = '飙升榜' // 默认图标文字
  } = props;
  // 把歌曲id给到store，点击歌曲后，获取歌曲详情，更新Redux状态
  const handleClick = async (songId: number) => {
    // 获取歌曲详情
    const songDetail = await getSongDetail(songId);
    if (songDetail) {
      // 更新Redux状态
      dispatch(CurrentSongId(songDetail));
      // console.log('歌曲详情已更新:', songDetail);
    } else {
      console.error('获取歌曲详情失败');
    }
  };
  //用户准备下一首播放的歌曲,并更新Redux状态
  const handleReadySong = (songId: number, songName: string) => {
    dispatch(setReadySong({ currentSongId: songId, name: songName }));
    console.log('准备播放的歌曲:', songId, songName);
  };
  return (
    <RankStyle>
      <div className="ranking-card">
        {/* 标题区 */}
        <div className="header">
          <div className="icon">{iconText}</div>
          <h2 className="title">{title}</h2>
          <div className="actions">
            <span className="play">▶</span>
            <span className="add">+</span>
          </div>
        </div>

        {/* 歌曲列表 */}
        <ul className="list">
          {arr.map((song, index) => (
            <li
              key={index}
              onClick={() => id && id[index] && handleClick(id[index])}
            >
              <span className="num">{index + 1}</span>
              <span className="name">{song}</span>
              <div>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    id && id[index] && handleReadySong(id[index], song)
                  }
                >
                  +
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* 底部链接 - 根据showFooter条件渲染 */}
        {showFooter && (
          <div className="footer">
            <span>查看全部 &gt;</span>
          </div>
        )}
      </div>
    </RankStyle>
  );
};

export default CRank;
