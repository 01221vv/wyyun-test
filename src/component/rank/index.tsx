import React, { ReactElement } from 'react';
import type { ReactNode } from 'react';
import { RankStyle } from './style';
interface IProps {
  // 定义组件的属性类型
  children?: ReactNode;
  title?: string;
  arr?: string[]; // 修改为字符串数组，用于歌曲列表
  showFooter?: boolean; // 是否显示底部链接
  iconText?: string; // 图标文字
}

const CRank: React.FC<IProps> = props => {
  const {
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
            <li key={index}>
              <span className="num">{index + 1}</span>
              <span className="name">{song}</span>
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
