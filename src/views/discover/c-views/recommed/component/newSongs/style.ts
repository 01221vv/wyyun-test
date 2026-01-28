import styled from 'styled-components';

export const NewSongsStyled = styled.div`
  margin-top: 2vh;
  position: relative;

  .carousel-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .new-songs-list {
    display: flex;
    flex-wrap: nowrap;
    gap: 5rem;
    overflow: hidden;
    flex: 1;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
    border: 2px solid #ccc;
    background: rgba(255, 255, 255, 0.1);
    color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      border-color: #ff0000;
      color: #ff0000;
      background: rgba(255, 0, 0, 0.1);
    }
  }

  }
`;
