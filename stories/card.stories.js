/** @jsx jsx */
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { storiesOf } from '@storybook/react';

import notes from './card.md';
import { Box, Card, Grid, Heading, Paragraph, Text } from '../src';

const stories = storiesOf('Cards', module);

const ExampleCard = styled(Card)`
  height: 160px;
  align-content: center;
  justify-content: center;
`;

const Description = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.size1};
  text-align: center;
`;

stories.add(
  'default',
  () => (
    <Grid
      m="regular"
      mt="largest"
      gridTemplateColumns="repeat(5, 200px)"
      gridColumnGap="40px"
      gridRowGap="20px"
      justifyContent="center"
    >
      <Box
        css={css`
          grid-column: 1/-1;
        `}
      >
        <Heading.H2>Cards</Heading.H2>
        <Paragraph variant="ui">
          Cards compose pane with a default border-radius provided.
        </Paragraph>
      </Box>

      <ExampleCard>
        <Heading.H6 as="h3">Card / Elevation 0</Heading.H6>
        <Description>Flat Cards</Description>
      </ExampleCard>

      <ExampleCard boxShadow="elevation1">
        <Heading.H6 as="h3">Card / Elevation 1</Heading.H6>
        <Description>Floating Cards</Description>
      </ExampleCard>

      <ExampleCard boxShadow="elevation2">
        <Heading.H6 as="h3">Card / Elevation 2</Heading.H6>
        <Description>Top Bar</Description>
      </ExampleCard>

      <ExampleCard boxShadow="elevation3">
        <Heading.H6 as="h3">Card / Elevation 3</Heading.H6>
        <Description>Side Sheet</Description>
      </ExampleCard>

      <ExampleCard boxShadow="elevation4">
        <Heading.H6 as="h3">Card / Elevation 4</Heading.H6>
        <Description>Unused</Description>
      </ExampleCard>
    </Grid>
  ),

  { notes: { markdown: notes } }
);

// eslint-disable-next-line import/prefer-default-export
export { stories };
