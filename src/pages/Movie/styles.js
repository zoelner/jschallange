import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #9966ff;
    font-size: 16px;
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
    flex: 1;

    img {
      width: 120px;
      border-radius: 4px;
      margin-top: 20px;
      margin-right: 15px;
    }

    div {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 24px;
        margin-top: 10px;
      }

      p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
      }
    }
  }
`;

export const TableDetails = styled.div`
  margin-top: 40px;

  table {
    border: 1px solid #eee;
    border-radius: 4px;

    tr th,
    tr td {
      text-align: left;
      padding: 2px 6px;
    }
  }
`;

export const RatingList = styled.ul`
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  h1 {
    display: block;
    margin-bottom: 15px;
  }

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;
        color: #333;

          &:hover {
            color: #9966ff;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 4px 5px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        background: #eee;
        color: #333;
        border-radius: 4px;
        padding: 2px 3px;
      }
    }
  }
`;
