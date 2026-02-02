import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  .content {
    width: 100%;
    height: 9vh;
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

    img {
      width: 150px; /* 调整logo宽度 */
      height: auto; /* 保持宽高比 */
      vertical-align: middle;
    }
  }

  .navItem {
    position: relative;
    height: 100%;
    line-height: 8vh;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
    /* 链接样式 */
    a {
      display: inline-block;
      padding: 0 15px;
      color: #ccc;
      text-decoration: none;

      &:hover {
        color: #fff;
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
  }

  .user-search {
    width: 200px;
    height: 32px;
    border-radius: 16px;
    border: none;
    padding: 0 10px;
    margin-right: 10px;
  }
  .user-login {
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    border-radius: 16px;
    background-color: ${props => props.theme.color.primary};
    color: #fff;
  }
`;
