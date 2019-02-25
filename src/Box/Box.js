import styled from '@emotion/styled';
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  display,
  space,
  width,
  height,
  maxWidth,
  textAlign
} from 'styled-system';

const Box = styled.div`
  box-sizing: border-box;
  ${borders};
  ${borderColor};
  ${borderRadius};
  ${boxShadow};
  ${color};
  ${display};
  ${height};
  ${maxWidth};
  ${space};
  ${textAlign};
  ${width};
`;

Box.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...boxShadow.propTypes,
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...height.propTypes,
  ...maxWidth.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes
};

Box.section = Box.withComponent('section');

export default Box;