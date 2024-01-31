import styled from "styled-components";
import { xs, sm, md } from '../../styles/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  height: 100%;

  ${md`
    padding-left: 16px;
    padding-right: 16px;
  `}
`
export const CardContent = styled.div`
  height: 100%;
  padding: 24px;
  border-radius: 4px;
  background: #FFF;
  margin: 30px 0;

  
  table{
    width: 100%;

    th{
      text-align: left;
    }
  }
  .ImgTitle{
    width: 100%;
    max-width: 356px;
    display: flex;
    align-items: center;

    img{
      width: 89px;
      height: 114px;
      margin-right: 30px;

      ${md`
        margin-right: 16px;
      `}
      ${sm`
        margin-right: 8px;
      `}
      ${xs`
        margin-right: 8px;
      `}
    }
  }

  .Title{
    display: flex;
    flex-direction: column;

    h2{
      font-size: 14px;
      font-weight: 700;
      color: #2F2E41;
      line-height: 21.79px;
      margin-bottom: 8px;
    }

    p{
      font-size: 16px;
      font-weight: 700;
      color: #2F2E41;
      line-height: 21.79px;
    }
  }

  .counter{
    display: flex;
    align-items: center;
    gap: 11px;

    .number{
      display: flex;
      align-items: center;
      width: 62px;
      height: 26px;
      border-radius: 4px;
      padding: 8px;
      border: 1px solid #D9D9D9;
    }

    span{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border-radius: 14px;
      border: 2px solid #009EDD;
      color: #009EDD;
      font-weight: 700;
    }
  }

  ${md`
    align-items: flex-start;
  `}
  ${sm`
    align-items: flex-start;
  `}
  ${xs`
    align-items: flex-start;
  `}

  .subtotal{
    font-size: 16px;
    font-weight: 700;
    color: #2F2E41;
    line-height: 21.79px;
  }

  button{
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .action{
    text-align: end;
  }

  ${md`
    height: 100vh;
    justify-content: space-between;
    display: none;
    flex-direction: column;
  `}
`

export const Divider = styled.div`
  border: 1px solid #D9D9D9;
  margin: 16px 0;
`
export const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    gap: 12px;
    width: 235.42px;
    padding: 8px;
    color: #FFF;
    background: #009EDD;
    border: none;
    border-radius: 4px;
    line-height: 19.07px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;

    ${md`
      width: 100%;
    `}
    ${sm`
      width: 100%;
    `}
    ${xs`
      width: 100%;
    `}
  }
  .actionBtn{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .total{
    display: flex;
    align-items: center;
    margin: 0 16px;

    p{
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      line-height: 19.07px;
      color: #999999;
    }

    h2{
      font-size: 24px;
      font-weight: 700;
      line-height: 32.68px;
      color: #2F2E41;
      margin-left: 30px;
    }
  }
`