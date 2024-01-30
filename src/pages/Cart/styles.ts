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
  ${sm`
    padding-left: 16px;
    padding-right: 16px;
  `}
  ${xs`
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

  ${md`
    height: 100vh;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  `}
  ${sm`
    height: 100vh;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  `}
  ${xs`
    height: 100vh;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  `}
`
export const TitlesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2{
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-transform: uppercase;
    color: #999999;
  }

  ${md`
    display: none;
  `}
  ${sm`
    display: none;
  `}
  ${xs`
    display: none;
  `}
`
export const QuiteContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 16px;

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
`
export const CoverTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 89px;
    height: 114px;
    margin-right: 50px;

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
  
  >div{
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

    ${md`
      flex-direction: row;
    `}
    ${sm`
      flex-direction: row;
    `}
    ${xs`
      flex-direction: row;
    `}
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
`
export const Counter = styled.div`
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

  ${md`
    position: absolute;
    right: 221px;
  `}
  ${sm`
    position: absolute;
    right: 131px;
  `}
  ${xs`
    position: absolute;
    right: 131px;
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

    ${md`
      flex-direction: column-reverse;
    `}
    ${sm`
      flex-direction: column-reverse;
    `}
    ${xs`
      flex-direction: column-reverse;
    `}
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

    ${md`
      margin-left: 180px;
      margin-bottom: 8px;
    `}
    ${sm`
      margin-left: 180px;
      margin-bottom: 8px;
    `}
    ${xs`
      margin-left: 180px;
      margin-bottom: 8px;
    `}
  }
`