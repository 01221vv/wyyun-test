import styled from 'styled-components';
export const SongStyle = styled.div`
  ${props => props.theme.mixin.wrapV2}
  .song {
    width: 100%;
    height: 30vh;
    position: relative;
  }
  .song-img {
    width: 20vh;
    height: 20vh;
  }
  .song-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .song-info {
    width: 20vh;
  }
  .song-info-title {
    width: 20vh;
    background-color: #3bce51;
    font-size: 2vh;
  }
  .song-info-desc {
    position: absolute;
    top: 16vh;
    left: 0;
    width: 20vh;
    height: 4vh;
    line-height: 4vh;
    background-color: #00000080;
    opacity: 0.8;
    font-size: 12px;
    color: #999;
  }
`;
