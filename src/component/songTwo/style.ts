import styled from 'styled-components';

export const SongStyle = styled.div`
  width: 12vh; /* 稍微加大 */
  height: 15vh; /* 调整为矩形 */
  position: relative;
  overflow: hidden;

  background: linear-gradient(145deg, #1a1a1a, #0a0a0a); /* 深色渐变背景 */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6); /* 更强的阴影 */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(255, 0, 0, 0.3); /* 添加红色光晕 */
  }

  .song {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .song-img {
    width: 100%;
    height: 70%; /* 图片占大部分 */
    overflow: hidden;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .song-info {
    padding: 1vh;
    position: relative;
    z-index: 2;
    background: rgba(20, 20, 20, 0.9);
  }

  .song-info-title {
    font-size: 1.6vh;
    font-weight: 900; /* 更粗的字体 */
    color: #fff;
    margin: 0;
    letter-spacing: 0.5px;
    text-transform: uppercase; /* 大写字母 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .song-info-desc {
    font-size: 1.3vh;
    color: #888;
    margin: 0.3vh 0 0 0;
    font-weight: 600;
    letter-spacing: 0.3px;
  }

  .badge {
    position: absolute;
    top: 0.8vh;
    right: 0.8vh;
    background: rgba(255, 0, 0, 0.8);
    color: white;
    font-size: 1vh;
    padding: 0.2vh 0.6vh;
    border-radius: 3px;
    font-weight: bold;
    z-index: 3;
  }
`;
