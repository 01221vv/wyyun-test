import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  background-color: #000;
  ${props => props.theme.mixin.wrapV2}
  display: flex;
  gap: 16px;
  height: 60vh;
  flex-wrap: wrap;
`;

export const PlayerLayout = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

export const PlayerHeader = styled.div`
  padding: 0 48px;
  height: 60px;
  background-color: #161616;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #2a2a2a;
  color: #fff;
  width: 100%;
  font-size: 14px;
  .header-left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .title {
    font-weight: bold;
  }
  .close {
    cursor: pointer;
  }
`;

export const PlayerContent = styled.div`
  text-align: center;
  min-height: 120px;
  line-height: 120px;
  width: 55%;
  color: #fff;
  background-color: #141414;
`;

export const PlayerSider = styled.div`
  text-align: center;
  line-height: 120px;
  color: #fff;
  background-color: #141414;
  width: 45%;
`;

export const LayoutContainer = styled.div`
  display: flex;
  height: 90%;
`;
