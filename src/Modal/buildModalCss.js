import { css } from '@emotion/core';
import { transparentize } from 'polished';

const baseModalCss = theme => css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: calc(100% - ${theme.space.largest});
  justify-content: center;
  outline: none;
  width: calc(100% - ${theme.space.largest});
`;

const baseOverlayCss = theme => css`
  align-items: center;
  background: ${transparentize(0.28, theme.colors.grey100)};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const buildModalCss = ({ theme, overlayCss, modalCss }) => css`
  .ArborModalOverlay {
    ${baseOverlayCss(theme)};
    ${typeof overlayCss === 'function' ? overlayCss(theme) : overlayCss};
  }

  .ArborModal {
    ${baseModalCss(theme)};
    ${typeof modalCss === 'function' ? modalCss(theme) : modalCss};
  }
`;

export default buildModalCss;