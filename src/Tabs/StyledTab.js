import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Box from '../Box';

const activeStyles = ({ active, theme }) => {
  const color = theme.colors.intent.brand.dark;

  return (
    active &&
    css`
      color: ${color};
      border-color: ${color};

      &:focus,
      &:hover {
        background: transparent;
        border-color: ${color};
      }
    `
  );
};

const StyledTab = styled(Box)`
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: ${(props) => props.theme.lineHeights.small};
  outline: none;

  &:last-child {
    margin-right: 0;
  }

  &:focus,
  &:hover {
    background: ${(props) => props.theme.colors.background.muted};
    border-color: ${(props) => props.theme.colors.border.muted};
  }

  ${activeStyles};
`;

StyledTab.propTypes = {
  active: PropTypes.bool,
  tabIndex: PropTypes.string
};

StyledTab.defaultProps = {
  active: false,
  alignItems: 'center',
  borderBottom: '1px solid transparent',
  color: 'text.muted',
  display: 'inline-block',
  fontSize: 'size5',
  justifyContent: 'center',
  mb: '-4px',
  mr: 'large',
  overflow: 'hidden',
  py: 'regular',
  tabIndex: '0',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

export default StyledTab;
