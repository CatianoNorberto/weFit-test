import styled from 'styled-components'
import { xs, sm, md } from '../../styles/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;

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
export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  height: 100vh;
  max-height: 574px;
  background: #FFF;
  border-radius: 4px;
  padding: 60px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  h2{
    font-size: 20px;
    font-weight: 700;
    line-height: 27.24px;
    color: #2F2E41;
  }
  img{
    width: 294.96px;
    height: auto;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    gap: 12px;
    width: 180px;
    color: #FFF;
    background: #009EDD;
    border: none;
    border-radius: 4px;
    line-height: 19.07px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
`