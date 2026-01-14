import { styled } from 'styled-components';
export const DiscoverWrapper = styled.div`
  .discover {
    height: 3vh;
  }
  .discover-nav {
    background-color: #cfe963ff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw; /* 设置导航项之间的间隔 */
    ${props => props.theme.mixin.wrapV1};
  }
  .nav-item {
    height: 100%;
    line-height: 3vh;
    width: 5vw; /* 200px */
    padding: 0 1.042vw; /* 20px */
    position: relative;
    &:hover {
      border-radius: 1.042vw; /* 20px */
      background-color: #3bce51ff;
    }

    &.active {
      border-radius: 1.042vw; /* 20px */
      background-color: #3bce51ff;
    }

    .nav-triangle {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 0.521vw solid transparent;
      border-right: 0.521vw solid transparent;
      border-top: 0.521vw solid #3bce51ff;
    }
  }
`;
