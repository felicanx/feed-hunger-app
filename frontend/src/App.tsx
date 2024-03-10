import "./App.css";
import { Register } from "../src/auth/components/Register";
import {
  createTheme,
  stepIconClasses,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          [`&.${stepIconClasses.completed}`]: {
            color: "#178244",
          },
          [`&.${stepIconClasses.active}`]: {
            color: "#041295",
          },
          [`&.${stepIconClasses.error}`]: {
            color: "#ef4444",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Register />
    </ThemeProvider>
  );
}

export default App;
