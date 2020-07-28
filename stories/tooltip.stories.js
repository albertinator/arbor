import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './tooltip.md';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Icon,
  Link,
  Paragraph,
  Text,
  Tooltip
} from '../src';

const stories = storiesOf('Tooltips', module);

const buttonIcon = <Icon name="download" />;

const FancyTooltipContent = () => (
  <Box textAlign="left" maxWidth="200px">
    <Grid gridGap="smallest" gridTemplateColumns="0fr 1fr" mb="smallest">
      <Icon color="intent.brand.light" name="cr-logo" />
      <Text color="inherit" fontWeight="bold">
        Title of some content!
      </Text>
    </Grid>
    <Paragraph variant="ui" color="inherit">
      More detail to explain what the title actually means.
    </Paragraph>
  </Box>
);

stories.add(
  'default',
  () => (
    <Grid
      m="largest"
      gridGap="large"
      gridTemplateColumns="repeat(3, 1fr)"
      justifyItems="center"
    >
      <Box>
        <Tooltip placement="bottom" content={<FancyTooltipContent />}>
          <div>
            <Button variant="primary">Button</Button>
          </div>
        </Tooltip>
      </Box>

      <Box>
        <Tooltip content="I'm a tooltip!">
          <Button variant="primary" size="small">
            Button
          </Button>
        </Tooltip>
      </Box>

      <Box>
        <Tooltip placement="right" content="Icon Button!">
          <Button iconEnd={buttonIcon}>Icon Button</Button>
        </Tooltip>
      </Box>

      <Box>
        <Tooltip content="Eight action items have been accepted.">
          <Link
            href="#tooltip"
            variant="muted"
            onClick={(e) => e.preventDefault()}
          >
            8 Action Items
          </Link>
        </Tooltip>
      </Box>

      <Box>
        <Tooltip placement="right" content="John Doe">
          <Avatar name="John Doe" />
        </Tooltip>
      </Box>

      <Box>
        <Tooltip placement="right" content="Download Icon!">
          <Icon name="download" />
        </Tooltip>
      </Box>
    </Grid>
  ),
  { notes: { markdown: notes } }
);
