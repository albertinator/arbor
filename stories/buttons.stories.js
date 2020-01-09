import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import notes from './buttons.md';
import intent from '../src/theme/colors/intent';
import { Box, Button, Grid, Heading, Icon } from '../src';

const INTENTS = Object.keys(intent);

const ButtonTable = styled.table`
  width: 100%;

  td {
    padding: 10px;
  }
`;

const icon = <Icon name="lock" />;
const icon2 = <Icon name="chevron-down" />;

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  () => (
    <div style={{ padding: '10px', width: '500px' }}>
      <Heading.h1>Sizes</Heading.h1>

      <Grid gridGap="10px 138px" gridTemplateColumns="repeat(4, max-content)">
        <Heading.h5 as="h2">Small</Heading.h5>
        <Heading.h5 as="h2">Medium</Heading.h5>
        <Heading.h5 as="h2">Large</Heading.h5>
        <Heading.h5 as="h2">Jumbo</Heading.h5>

        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          size="small"
        >
          button label
        </Button>
        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          size="medium"
        >
          button label
        </Button>
        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          size="large"
        >
          button label
        </Button>
        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          size="jumbo"
        >
          button label
        </Button>
      </Grid>

      <Heading.h1>Style</Heading.h1>

      <Grid gridGap="10px 138px" gridTemplateColumns="repeat(3, 1fr)">
        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          variant="primary"
          whiteSpace="nowrap"
        >
          primary
        </Button>
        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          variant="secondary"
        >
          secondary
        </Button>
        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          variant="minimal"
        >
          minimal
        </Button>

        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          variant="primary"
          disabled
        >
          primary
        </Button>
        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          variant="secondary"
          disabled
        >
          secondary
        </Button>
        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          variant="minimal"
          disabled
        >
          minimal
        </Button>
      </Grid>

      <Box width="500px" my="regular">
        <Button
          intent={select('intent', INTENTS, 'brand')}
          spin={boolean('spin', false)}
          fullWidth
          variant="primary"
        >
          full width button
        </Button>
      </Box>
    </div>
  ),
  { notes: { markdown: notes } }
);

const variantOptions = ['primary', 'secondary', 'minimal'];

stories.add(
  'Icon button',
  () => (
    <Box m="regular">
      <Box mb="large">
        <ButtonTable>
          <thead>
            <tr className={css({ marginBottom: '10px' })}>
              <th>
                <Heading.h3 textAlign="left">iconStart</Heading.h3>
              </th>
              <th>
                <Heading.h3 textAlign="left">iconEnd</Heading.h3>
              </th>
              <th>
                <Heading.h3 textAlign="left">iconStart and iconEnd</Heading.h3>
              </th>
              <th>
                <Heading.h3 textAlign="left">Icon Only</Heading.h3>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className={css({ marginBottom: '10px' })}>
              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="small"
                  variant={select('Variant', variantOptions)}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  intent={select('intent', INTENTS, 'brand')}
                  size="small"
                  spin={boolean('spin', false)}
                  variant={select('Variant', variantOptions)}
                  iconEnd={icon2}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="small"
                  variant={select('Variant', variantOptions)}
                  iconEnd={icon2}
                >
                  button label
                </Button>
              </td>
              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="small"
                  aria-label="Edit"
                  variant={select('Variant', variantOptions)}
                />
              </td>
            </tr>

            <tr className={css({ marginBottom: '10px' })}>
              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="medium"
                  aria-label="Edit"
                  variant={select('Variant', variantOptions)}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="medium"
                  variant={select('Variant', variantOptions)}
                  iconEnd={icon2}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="medium"
                  variant={select('Variant', variantOptions)}
                  iconEnd={icon2}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="medium"
                  aria-label="Edit"
                  variant={select('Variant', variantOptions)}
                />
              </td>
            </tr>

            <tr className={css({ marginBottom: '10px' })}>
              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="large"
                  variant={select('Variant', variantOptions)}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="large"
                  variant={select('Variant', variantOptions)}
                  iconEnd={icon2}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="large"
                  variant={select('Variant', variantOptions)}
                  iconEnd={icon2}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="large"
                  aria-label="Edit"
                  variant={select('Variant', variantOptions)}
                />
              </td>
            </tr>

            <tr className={css({ marginBottom: '10px' })}>
              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="jumbo"
                  variant={select('Variant', variantOptions)}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="jumbo"
                  variant={select('Variant', variantOptions)}
                  iconEnd={icon2}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="jumbo"
                  variant={select('Variant', variantOptions)}
                  iconEnd={icon2}
                >
                  button label
                </Button>
              </td>

              <td>
                <Button
                  iconStart={icon}
                  intent={select('intent', INTENTS, 'brand')}
                  spin={boolean('spin', false)}
                  size="jumbo"
                  aria-label="Edit"
                  variant={select('Variant', variantOptions)}
                />
              </td>
            </tr>
          </tbody>
        </ButtonTable>
      </Box>

      <Box>
        <Heading.h2>Full Width</Heading.h2>

        <Box mb="regular">
          <Button
            iconStart={icon}
            intent={select('intent', INTENTS, 'brand')}
            fullWidth
            size="jumbo"
            spin={boolean('spin', false)}
            variant={select('Variant', variantOptions)}
          >
            button label
          </Button>
        </Box>

        <Box mb="regular">
          <Button
            fullWidth
            iconEnd={icon2}
            intent={select('intent', INTENTS, 'brand')}
            size="jumbo"
            spin={boolean('spin', false)}
            variant={select('Variant', variantOptions)}
          >
            button label
          </Button>
        </Box>

        <Box mb="regular">
          <Button
            fullWidth
            iconEnd={icon2}
            iconStart={icon}
            intent={select('intent', INTENTS, 'brand')}
            size="jumbo"
            spin={boolean('spin', false)}
            variant={select('Variant', variantOptions)}
          >
            button label
          </Button>
        </Box>

        <Box mb="regular">
          <Button
            aria-label="Edit"
            fullWidth
            iconStart={icon}
            intent={select('intent', INTENTS, 'brand')}
            size="jumbo"
            spin={boolean('spin', false)}
            variant={select('Variant', variantOptions)}
          />
        </Box>
      </Box>
    </Box>
  ),
  { notes: { markdown: notes } }
);
