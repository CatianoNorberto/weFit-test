import styled from 'styled-components'
import { md } from '../../styles/responsiveStyles';


export const Container = styled.div`
  width: 100%;

  ${md`
    margin-bottom: 16px;
  `}
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 305px;
  background-color: #FFF;
  padding: 10px 11px;
  border-radius: 4px;

  >img{
    width: 147px;
    height: 188px;
  }
  h2{
    font-size: 12px;
    font-weight: 700;
    color: #333333;
    line-height: 16.34px;  
  }

  >p{
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
    color: #2F2E41;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    gap: 12px;
    width: 100%;
    padding: 8px;
    color: #FFF;
    background: #009EDD;
    border: none;
    border-radius: 4px;
    line-height: 16.34px;
    font-size: 12px;

    >div{
      display: flex;
      align-items: center;
      gap: 3px;
      span{
        font-size: 12px;
        font-weight: 400;
      }
    }

    p{
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`