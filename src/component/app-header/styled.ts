import styled from 'styled-components';

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
    position: relative;
    height: 100%;
    line-height: 10vh;
    width: 70vh;
    display: flex;
    align-items: center;

    /* 为每个菜单项添加after伪元素作为三角形 */
    .ant-menu-item {
      position: relative;
      padding: 0 20px !important;
      display: flex;
      align-items: center;
      justify-content: center;

      /* 使用::after伪元素创建三角形 
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #3bce51; /* 绿色向上的三角形 */
        opacity: 1; /* 始终显示 */
        transition: all 0.3s ease;
      }
*/
      /* 链接样式 */
      a {
        display: inline-block;
        padding: 0 5px;
        color: #ccc;
        text-decoration: none;

        &:hover {
          color: #fff;
        }
      }

      }
    }
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
