import styled from "styled-components";
import { md } from '../../styles/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 24px;
  padding-bottom: 80px;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 960px;
  height: 100%;
  margin: 0 auto;

  ${md`
    width: ;
    padding: 0 16px;
  `}
`;

export const ContentCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  ${md`
    display: block;
  `}
`;