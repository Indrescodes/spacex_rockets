import styled from 'styled-components';
import '../../../shared/fonts.css';

export const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 140.62%;
  letter-spacing: 0.1px;
  color: #676c7e;
`;

export const TableRow = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 10px 20px;
    background: white;
    border-radius: 5px;
    margin: 0;
    margin-bottom: 16px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.5px;
    color: #9b9eac;
    height: 49px;
  }

  .table-head {
    background-color: transparent;
    padding: 0 20px;
    margin: 0;
    margin-top: 52px;
  }

  .table-head li {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    padding: 0;
    margin: 0;
    letter-spacing: 0.25px;
    color: #676c7e;
  }
`;
