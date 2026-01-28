import styled from 'styled-components';

export const BannerItem = styled.div`
  width: 100%;
  height: 40vh;
  .banner-carousel {
    height: 40vh;

    ${props => props.theme.mixin.wrapV2};
    display: flex;
    align-items: center;
  }
  .banner-carousel-left {
    width: 70%;
    height: 100%;
  }
  .banner-item-img {
    height: 100%;
    width: 100%;
    min-height: 40vh;

    img {
      width: 100%;
      height: 100%;
      min-height: 40vh;
      object-fit: fill;
    }
  }
  .banner-loading {
    width: 30%;
    height: 100%;
    position: relative;
  }
  .banner-loading-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .banner-download-btn {
    position: absolute;
    bottom: 10%;
    left: 25%;
    width: 50%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: #6cb8f2ff;
    border-radius: 25px;
    font-size: 25px;
  }
`;
