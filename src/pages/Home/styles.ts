import styled from "styled-components";
import { xs, sm, md } from '../../styles/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
  ${sm`
    padding: 0 16px;
  `}
  ${xs`
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
  margin-top: 20px;

  ${md`
    display: block;
  `}
  ${sm`
    display: block;
  `}
  ${xs`
    display: block;
  `}
`;