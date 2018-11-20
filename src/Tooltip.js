import React from 'react';
import { injectGlobal } from 'react-emotion';
import PropTypes from 'prop-types';
import 'react-tippy/dist/tippy.css';
import { Tooltip as TippyTooltip } from 'react-tippy';

import { borderRadius } from './theme';
import Text from './Text';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  .tippy-tooltip.arbor-theme {
    padding: 0;
    border-radius: ${borderRadius.small};
  }
`;

const Tooltip = ({ text, children, ...props }) => {
  const tooltipText = (
    <Text px="smaller" py="smallest" fontSize="size2" color="white">
      {text}
    </Text>
  );

  return (
    <TippyTooltip
      {...{
        ...props,
        theme: 'arbor',
        arrow: true,
        html: tooltipText,
        distance: 8,
        duration: 300,
        updateDuration: 0,
        arrowSize: 'small',
        animation: 'fade',
        inertia: true,
        animateFill: false
      }}
    >
      {children}
    </TippyTooltip>
  );
};

Tooltip.propTypes = {
  /**
   * Text to display within the tooltip when it is displayed
   * */
  text: PropTypes.string.isRequired,

  /**
   * Node which will trigger the tooltip. This should be either an Icon, Button,
   * or Link.
   * */
  children: PropTypes.element.isRequired
};

export default Tooltip;
