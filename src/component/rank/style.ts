import styled from 'styled-components';
export const RankStyle = styled.div`
width:100%;
. display: flex;
 
  
  background-color: #f5f5f5;

  .ranking-card {
    flex: 1;
   width:100%;
    border: 1px solid #eaeaea;
   
    overflow: hidden;
    font-family: sans-serif;
    background-color: #fff;
  

    .header {
      display: flex;
      align-items: center;
      padding: 12px;
      border-bottom: 1px solid #f0f0f0;

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
        margin-right: 12px;
        border-radius: 4px;
      }

      .title {
        flex: 1;
        margin: 0;
        font-size: 16px;
        font-weight: 600;
      }

      .actions {
        display: flex;
        gap: 16px;

        .play,
        .add {
          cursor: pointer;
          font-size: 18px;
        }
      }
    }

    .list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        padding: 8px 12px;

        &:hover {
          background-color: #f5f5f5;
        }

        .num {
          width: 24px;
          font-size: 14px;
          color: #666;
          margin-right: 12px;
        }

        .name {
          flex: 1;
          font-size: 14px;
          color: #333;
        }
      }
    }

    .footer {
      padding: 12px;
      text-align: center;
      border-top: 1px solid #f0f0f0;

      span {
        color: #999;
        cursor: pointer;
        font-size: 14px;

        &:hover {
          color: #1890ff;
        }
      }
    }
  }

  /* 为不同排行榜设置不同的图标背景色 */
  .ranking-card:nth-child(1) .header .icon {
    background: linear-gradient(135deg, #9c6aff, #6b46c1);
  }

  .ranking-card:nth-child(2) .header .icon {
    background: linear-gradient(135deg, #4ade80, #22c55e);
  }

  .ranking-card:nth-child(3) .header .icon {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
  }
`;
