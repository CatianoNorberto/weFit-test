import styled from "styled-components";

import { xs, sm, md } from '../../styles/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 74px;
`;
export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  padding: 18px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    text-decoration: none;
  }
  
  h1{
    font-size: 20px;
    font-weight: 700;
    color: #FFF;
  }
`
export const CartContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`
export const ItemTitle = styled.div`
 display: flex;
 flex-direction: column;
 
 h2{
   font-size: 14px;
   font-weight: 600;
   line-height: 19.07px;
   color: #FFF;

   ${md`
    display: none;
  `}
  ${sm`
    display: none;
  `}
  ${xs`
    display: none;
  `}
 }

 p{
  font-size: 12px;
  font-weight: 600;
  color: #999999;

  display: flex;
  justify-content: flex-end;
 };

 img{
  width: 29.32px;
  height: 25.31px;
 }
`