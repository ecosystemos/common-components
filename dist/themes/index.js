import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography';
import palette from './palette';
var index = createMuiTheme({
  typography: typography,
  palette: palette,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Montserrat', 'sans-serif']
      }
    }
  }
});
export default index;