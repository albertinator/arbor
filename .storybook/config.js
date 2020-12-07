import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { Global, ThemeProvider } from '@emotion/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { reset, theme } from '../src';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => (
  <>
    <Global styles={reset} />
    {story()}
  </>
));
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(withA11y);
addDecorator(withKnobs);

configure(loadStories, module);
