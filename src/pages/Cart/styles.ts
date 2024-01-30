import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  height: 100%;
`
export const CardContent = styled.div`
  height: 286px;
  padding: 24px;
  border-radius: 4px;
  background: #FFF;
`
export const TitlesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2{
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-transform: uppercase;
    color: #999999;
  }
`
export const QuiteContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .subtotal{
    font-size: 16px;
    font-weight: 700;
    color: #2F2E41;
    line-height: 21.79px;
  }
`
export const CoverTitle = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  img{
    width: 89px;
    height: 114px;
    margin-right: 50px;
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
  }
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
    /* padding: 2px; */
    width: 18px;
    height: 18px;
    border-radius: 14px;
    border: 2px solid #009EDD;
    color: #009EDD;
    font-weight: 700;
  }
`
export const DeleteContent = styled.div`
  /* width: 100%; */
`
export const Divider = styled.div`
  border: 1px solid #D9D9D9;
  margin: 16px 0;
`
export const Action = styled.div`
  display: flex;
  align-items: center;
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