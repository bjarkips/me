import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, deepPurple } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: yellow[600],
    },
  },
});

export default theme;
