import { css } from 'styled-components';

const responsive: Record<string, string> = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1216px',
  xxl: '1440px',
};

const mediaQuery = (maxWidth: string) => (content: TemplateStringsArray) => css`
  @media screen and (max-width: ${maxWidth}) {
    ${content};
  }
`;

const xs = mediaQuery(responsive.xs);
const sm = mediaQuery(responsive.sm);
const md = mediaQuery(responsive.md);
const lg = mediaQuery(responsive.lg);
const xl = mediaQuery(responsive.xl);
const xxl = mediaQuery(responsive.xxl);

export { xs, sm, md, lg, xl, xxl };
