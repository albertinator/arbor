import { css } from '@emotion/core';
import { rem } from 'polished';

const buttonStyles = (rawHeight, textFontSize, iconFontSize) => {
  const height = rem(`${rawHeight}px`);
  const padding = rem(`${rawHeight * 0.5}px`);

  return css`
    font-size: ${textFontSize};
    height: ${height};
    padding: 0 ${padding};

    i {
      width: ${height};
      font-size: ${iconFontSize};

      &:first-child {
        margin-left: -${padding};
      }

      &:last-child {
        margin-right: -${padding};
      }
    }
  `;
};

const sizeStyles = ({ theme, size }) => {
  const { size1, size2, size3, size4, size5 } = theme.fontSizes;

  switch (size) {
    case 'small':
      return css`
        ${buttonStyles(24, size2, size1)};
      `;
    case 'medium':
      return css`
        ${buttonStyles(32, size3, size2)};
      `;
    case 'large':
      return css`
        ${buttonStyles(40, size4, size4)};
      `;
    case 'jumbo':
      return css`
        ${buttonStyles(48, size4, size5)};
      `;
    default:
      return '';
  }
};

export default sizeStyles;