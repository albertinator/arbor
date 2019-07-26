import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

const StyledAutoCompleteContainer = ({ innerRef, children, ...props }) => (
  <Box ref={innerRef} {...{ ...props }}>
    {children}
  </Box>
);

StyledAutoCompleteContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerRef: PropTypes.func.isRequired
};

export default StyledAutoCompleteContainer;