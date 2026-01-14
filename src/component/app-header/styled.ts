import styled from 'styled-components';
// import theme from '@/assets/theme/index';
export const AppHeaderWrapper = styled.div`
  .content {
    width: 100%;
    height: 10vh;
    background-color: #242424;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav {
    height: 100%;
    ${props => props.theme.mixin.wrapV1};
    display: flex;
    align-items: center;
  }
  .logo {
    display: inline-block;
  }
  .navItem {
    height: 100%;
    line-height: 10vh;
    width: 70vh;
    display: flex;
    align-items: center;
  }
  .user {
    display: flex;
    align-items: center;
  }

  .user-search {
    width: 20vw;
    height: 2.083vw; /* 40px */
    border-radius: 1.042vw; /* 20px */
    border: none;
    padding: 0 0.521vw; /* 10px */
    margin-right: 0.521vw; /* 10px */
  }
  .user-login {
    height: 2.083vw; /* 40px */
    line-height: 2.083vw; /* 40px */
    padding: 0 0.521vw; /* 10px */
    border-radius: 1.042vw; /* 20px */
    background-color: ${props => props.theme.color.primary};
    color: #fff;
  }
`;
