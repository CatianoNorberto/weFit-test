import { css, FlattenSimpleInterpolation } from 'styled-components';

// Define the responsive object with explicit types
const responsive: Record<string, string> = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1216px',
  xxl: '1440px',
};

// Create mixins for the different responsive sizes
const xs = (content: TemplateStringsArray): FlattenSimpleInterpolation => css`
  @media screen and (max-width: ${responsive.xs}) {
    ${content};
  }
`;
const sm = (content: TemplateStringsArray): FlattenSimpleInterpolation => css`
  @media screen and (max-width: ${responsive.sm}) {
    ${content};
  }
`;
const md = (content: TemplateStringsArray): FlattenSimpleInterpolation => css`
  @media screen and (max-width: ${responsive.md}) {
    ${content};
  }
`;
const lg = (content: TemplateStringsArray): FlattenSimpleInterpolation => css`
  @media screen and (max-width: ${responsive.lg}) {
    ${content};
  }
`;
const xl = (content: TemplateStringsArray): FlattenSimpleInterpolation => css`
  @media screen and (max-width: ${responsive.xl}) {
    ${content};
  }
`;
const xxl = (content: TemplateStringsArray): FlattenSimpleInterpolation => css`
  @media screen and (max-width: ${responsive.xxl}) {
    ${content};
  }
`;

export { xs, sm, md, lg, xl, xxl };

