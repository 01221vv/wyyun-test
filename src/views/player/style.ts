import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
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
  width: calc(50% - 8px);
  height: 100%;
  max-width: calc(50% - 8px);
`;

export const PlayerHeader = styled.div`
  text-align: center;
  color: #fff;

  padding-inline: 48px;
  height: 10%;
  background-color: #4096ff;
`;

export const PlayerContent = styled.div`
  text-align: center;
  min-height: 120px;
  line-height: 120px;
  color: #fff;
  background-color: #0958d9;
`;

export const PlayerSider = styled.div`
  text-align: center;
  line-height: 120px;
  color: #fff;
  background-color: #1677ff;
  width: 45%;
`;

export const LayoutContainer = styled.div`
  display: flex;
`;
