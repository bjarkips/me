import { createMuiTheme } from '@material-ui/core/styles';
import { purple, yellow } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: yellow[600],
    },
  },
});

export default theme;
