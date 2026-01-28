import styled from 'styled-components';
export const HotRemStyled = styled.div`
  background-color: #f5f5f5;

  .hot-rem {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  /* 设置每个SongComponent的宽度，实现一行显示四个 */
  .hot-rem > div {
    width: calc((100% - 3 * 16px) / 4); /* 100%宽度减去3个间距，再除以4 */
    box-sizing: border-box;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;
