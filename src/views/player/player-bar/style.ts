import styled from 'styled-components';

// 播放器容器
export const PlayerWrapper = styled.div`
  height: 10vh;
  min-height: 60px;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  /* 默认隐藏，只显示 4px 黑色条带 */
  transform: translateY(calc(100% - 4px));
  transition: transform 0.3s ease;

  /* 鼠标悬停时完全显示 */
  &:hover {
    transform: translateY(0);
  }

  /* 添加黑色条带作为悬停区域 */
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #1e0c0cff;
    cursor: pointer;
  }

  /* 歌曲信息显示区域 */
  .show-song {
    position: absolute;
    top: -100%;
    left: -130%;
    transform: translate(-50%, -100%);
    width: 100%;
    ${props => props.theme.mixin.wrapV2};
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
  }
`;

// 控制栏容器
export const ControlBar = styled.div`
  ${props => props.theme.mixin.wrapV2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 20px;
`;

// 左侧控制组容器
export const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  .control-icon {
    color: #ffffff;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// 中间进度组容器
export const ProgressGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  max-width: 600px;

  .song-image {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 4px;
  }

  .song-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;

    .song-name {
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .progress-container {
      position: relative;
      width: 100%;
    }
  }

  .time-display {
    color: #ffffff;
    font-size: 12px;
    min-width: 80px;
    text-align: center;
  }
`;

// 右侧操作组容器
export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  .control-button {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 12px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      font-size: 20px;
      margin-right: 5px;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }

  .audio-quality {
    color: #ffffff;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 5px;

    .quality-badge {
      background-color: #ff4d4f;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 10px;
    }
  }
`;
