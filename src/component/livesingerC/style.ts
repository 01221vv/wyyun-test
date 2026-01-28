import styled from 'styled-components';
export const LiveSingerStyle = styled.div`
  width: 100%;

  background-color: #f5f5f5;
  .live-singer-card {
    width: 100%;
    border: 1px solid #eaeaea;
    overflow: hidden;
    font-family: sans-serif;
    margin-top: 12px;
    .img {
      width: 8vh;
      height: 8vh;
      object-fit: cover;
      float: left;
    }
    .info {
      margin-left: 12px;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        margin: 0;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;
