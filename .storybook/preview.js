/** @type { import('@storybook/react').Preview } */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
// import { theme } from '../src/theme';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// export const decorators = [
//   withThemeFromJSXProvider({
//   themes: {
//     mainTheme: theme,
//     dark: darkTheme,
//   },
//   defaultTheme: 'mainTheme',
//   Provider: ThemeProvider,
//   GlobalStyles: CssBaseline,
// })];

export default preview;
