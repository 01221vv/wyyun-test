import { styled } from 'styled-components';
export const DiscoverWrapper = styled.div`
  .discover {
    height: 4vh;
  }
  .discover-nav {
    background-color: #77f181ff;
    height: 4vh;
    line-height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.theme.mixin.wrapV1};
  }
  .nav-item {
    height: 100%;
    line-height: 4vh;
    text-align: center;
    width: 5vw; /* 200px */
    padding: 0 1.042vw; /* 20px */
    &:hover {
      border-radius: 1.042vw; /* 20px */
      background-color: #79b8ecff;
    }
  }
`;
