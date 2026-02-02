import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import {
  PlayerWrapper,
  ControlBar,
  ControlGroup,
  ProgressGroup,
  ActionGroup
} from './style';
import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  DragOutlined,
  OrderedListOutlined,
  SoundOutlined
} from '@ant-design/icons';
import { getSongDurationFromData, formatTime } from '@/utils/formatTime';
import { Slider, Popover } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { imgToSmoll } from '@/utils/imgToSmoll';
import ShowSong from '../showSong';
interface IProps {
  children?: React.ReactNode;
}

const PlayerBar: React.FC<IProps> = () => {
  // 状态管理
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [showSong, setShowSong] = useState(false);
  const currentSong = useSelector(
    (state: any) => state.currentSong.currentSong
  );

  const audioRef = useRef<HTMLAudioElement>(null);
  // 获取歌曲播放URL
  const getSongUrl = useCallback((song: any) => {
    if (!song || !song.id) return '';
    return `https://music.163.com/song/media/outer/url?id=${song.id}.mp3`;
  }, []);
  // 播放/暂停控制
  const handlePlayPauseClick = useCallback(() => {
    if (!audioRef.current) return;
    if (!currentSong) {
      alert('请先选择歌曲');
      return;
    }
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!audioRef.current.src) {
        const url = getSongUrl(currentSong);
        if (url) {
          audioRef.current.src = url;
        }
      }
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(error => {
          console.error('播放失败:', error);
          alert('播放失败，请检查网络或歌曲地址');
        });
    }
  }, [isPlaying, currentSong, getSongUrl]);

  // 进度条控制
  const handleProgressChange = useCallback(
    (value: number) => {
      setProgress(value);
      if (audioRef.current && duration > 0) {
        const time = (value / 100) * duration;
        audioRef.current.currentTime = time;
        setCurrentTime(time);
      }
    },
    [duration]
  );
  // 音频时间更新
  const handleTimeUpdate = useCallback(() => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration || 0;
    setCurrentTime(current);
    if (total > 0) {
      setDuration(total);
      const newProgress = (current / total) * 100;
      setProgress(newProgress);
    }
  }, []);

  // 音频元数据加载完成
  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // 音频播放结束
  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  }, []);

  // 音量控制
  const handleVolumeChange = useCallback((value: number) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  }, []);

  // 获取音质显示
  const getAudioQuality = useCallback((song: any) => {
    if (!song) return '标准';

    if (song.sq?.br && song.sq.br >= 1000000) {
      return '无损';
    } else if (song.h?.br && song.h.br >= 320000) {
      return '高品质';
    } else if (song.m?.br && song.m.br >= 192000) {
      return '标准';
    } else if (song.l?.br) {
      return '普通';
    }
    return '标准';
  }, []);

  // 歌曲变化时处理
  useEffect(() => {
    if (currentSong?.id) {
      const url = getSongUrl(currentSong);
      if (audioRef.current && url) {
        setProgress(0);
        setCurrentTime(0);
        setDuration(getSongDurationFromData(currentSong));
        audioRef.current.src = url;
        audioRef.current.load();
        // 自动播放歌曲
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error('自动播放失败:', error);
          });
      }
    } else {
      if (audioRef.current) {
        audioRef.current.src = '';
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      }
    }
  }, [currentSong, getSongUrl]);

  // 音量控制弹出框内容
  const volumeContent = useMemo(
    () => (
      <div style={{ width: 120 }}>
        <div style={{ marginBottom: 8, textAlign: 'center' }}>
          音量: {Math.round(volume * 100)}%
        </div>
        <Slider
          vertical
          value={volume}
          onChange={handleVolumeChange}
          min={0}
          max={1}
          step={0.01}
          tooltip={{ formatter: value => `${Math.round(value! * 100)}%` }}
        />
      </div>
    ),
    [volume, handleVolumeChange]
  );

  return (
    <PlayerWrapper>
      <ControlBar>
        {/* 左侧控制组 */}
        <ControlGroup>
          <div className="control-icon">
            <StepBackwardOutlined />
          </div>
          {isPlaying ? (
            <div className="control-icon" onClick={handlePlayPauseClick}>
              <PauseCircleOutlined />
            </div>
          ) : (
            <div className="control-icon" onClick={handlePlayPauseClick}>
              <PlayCircleOutlined />
            </div>
          )}
          <div className="control-icon">
            <StepForwardOutlined />
          </div>
        </ControlGroup>
        {/* 中间进度组 */}
        <ProgressGroup>
          <Link to="/player">
            <img
              className="song-image"
              src={imgToSmoll(currentSong?.al?.picUrl || '', 40)}
              alt="歌曲封面"
            />
          </Link>
          <div className="song-info">
            <div className="song-name">{currentSong?.name || '未选择歌曲'}</div>
            <div className="progress-container">
              <Slider
                value={progress}
                onChange={handleProgressChange}
                step={0.1}
                min={0}
                max={100}
                disabled={!currentSong?.id}
                tooltip={{
                  formatter: value => {
                    const time = duration * (value! / 100);
                    return formatTime(time);
                  }
                }}
              />
            </div>
          </div>
          <div className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </ProgressGroup>

        {/* 右侧操作组 */}
        <ActionGroup>
          <div className="show-song">{showSong && <ShowSong />}</div>
          <button className="control-button">
            <DragOutlined className="icon" />
            <OrderedListOutlined
              className="icon"
              onClick={() => setShowSong(!showSong)}
            />
          </button>

          <Popover
            content={volumeContent}
            title="音量调节"
            trigger="click"
            open={showVolumeControl}
            onOpenChange={setShowVolumeControl}
            placement="top"
          >
            <button className="control-button">
              <SoundOutlined />{' '}
              {volume === 0 ? '静音' : `${Math.round(volume * 100)}%`}
            </button>
          </Popover>

          <div className="audio-quality">
            音质
            <span className="quality-badge">
              {currentSong ? getAudioQuality(currentSong) : '标准'}
            </span>
          </div>
        </ActionGroup>
      </ControlBar>

      {/* 隐藏的audio元素 */}
      {currentSong?.id && (
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onError={e => {
            console.error('音频加载错误:', e);
            setIsPlaying(false);
            alert('音频加载失败，请检查网络连接');
          }}
        >
          您的浏览器不支持 audio 元素。
        </audio>
      )}
    </PlayerWrapper>
  );
};

export default PlayerBar;
