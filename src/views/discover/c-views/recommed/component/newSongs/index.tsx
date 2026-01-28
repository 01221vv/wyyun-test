import React, { useState } from 'react';
import type { ReactNode } from 'react';
import SongTwo from '@/component/songTwo';
import { NewSongsStyled } from './style';
import { useAppSelector, appShallowEqual } from '@/store';
import TopArea from '@/component/top-area';

interface IProps {
  children?: ReactNode;
}

const CNewSongs: React.FC<IProps> = props => {
  const newSongsList = useAppSelector(
    state => ({
      newSongs: state.recommend.NewSongsList
    }),
    appShallowEqual
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // 每页显示4个

  // 计算总页数
  const totalPages = Math.ceil(newSongsList.newSongs.length / itemsPerPage);

  // 获取当前页的数据
  const getCurrentPageData = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return newSongsList.newSongs.slice(start, end);
  };

  // 上一页
  const prevPage = () => {
    setCurrentIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // 下一页
  const nextPage = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages);
  };

  return (
    <div>
      <TopArea title="新碟上架" />
      <NewSongsStyled>
        <div className="carousel-container">
          <button className="nav-btn prev-btn" onClick={prevPage}>
            ‹
          </button>

          <div className="new-songs-list">
            {getCurrentPageData().map(item => (
              <SongTwo
                key={item.albumId}
                title={item.albumName}
                imgurl={item.coverUrl}
                artist={item.artistName}
              />
            ))}
          </div>

          <button className="nav-btn next-btn" onClick={nextPage}>
            ›
          </button>
        </div>
      </NewSongsStyled>
    </div>
  );
};

export default CNewSongs;
