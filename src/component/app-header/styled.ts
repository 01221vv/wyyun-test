import styled from 'styled-components';
// import theme from '@/assets/theme/index';
export const AppHeaderWrapper = styled.div`
  .content {
    height: 70px;
    ${props => props.theme.mixin.wrapV1};
  }
`;
