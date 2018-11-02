import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Link } from '../src';

const stories = storiesOf('Links', module);

stories.add('default', () => (
  <Box m="regular">
    <Link m="regular" href="#test" onClick={e => e.preventDefault()}>
      Default Link
    </Link>
    <Link
      m="regular"
      variant="muted"
      href="#test"
      onClick={e => e.preventDefault()}
    >
      Muted Link
    </Link>
  </Box>
));
