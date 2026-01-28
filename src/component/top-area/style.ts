import { styled } from 'styled-components';
export const TopAreaStyle = styled.div`
  .top-area {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #000000ff;
  }
  .top-area-left {
    display: flex;

    align-items: center;
  }
  .top-area-left-item {
    margin-right: 15px;
    margin-left: 15px;
    &:last-child {
      opacity: 0;
    }
  }

  .top-area-left-title {
    font-size: 20px;
  }
  .top-area-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default TopAreaStyle;
