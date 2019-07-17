import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const StyledAutoCompleteDropdownIndicator = ({
  innerProps,
  selectProps: { hideDropdownIndicator },
  ...props
}) => (
  <Icon
    display={hideDropdownIndicator ? 'none' : 'block'}
    aria-label="show options"
    name="chevron"
    {...{ ...innerProps, ...props }}
  />
);

StyledAutoCompleteDropdownIndicator.propTypes = {
  innerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  selectProps: PropTypes.shape({
    hideDropdownIndicator: PropTypes.bool
  }).isRequired
};

StyledAutoCompleteDropdownIndicator.defaultProps = {
  innerProps: {}
};

export default StyledAutoCompleteDropdownIndicator;
