import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import StyledInput from '../Input/StyledInput';

const StyledSelectInput = styled(StyledInput)`
  appearance: none;
  background: ${(props) => props.theme.colors.background.white};

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`;

StyledSelectInput.defaultProps = {
  as: 'select'
};

const StyledSelectWrapper = styled.div`
  position: relative;

  &:after {
    align-items: center;
    bottom: 0;
    color: ${(props) => props.theme.colors.icon.default};
    content: '${(props) => props.theme.icons.caret}';
    display: flex;
    font-family: ${(props) => props.theme.fonts.icon};
    font-size: ${(props) => props.theme.fontSizes.size5};
    pointer-events: none;
    position: absolute;
    right: ${(props) => props.theme.space.smaller};
    top: 0;
  }
`;

const StyledSelect = ({ children, ...props }) => {
  const { large } = props;

  return (
    <StyledSelectWrapper large={large}>
      <StyledSelectInput {...props}>{children}</StyledSelectInput>
    </StyledSelectWrapper>
  );
};

StyledSelect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  large: PropTypes.bool
};

StyledSelect.defaultProps = {
  large: false
};

export default StyledSelect;
