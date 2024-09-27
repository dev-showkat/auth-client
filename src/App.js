import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ShowToast from "./components/ShowToast";
import ShowLoader from "./components/ShowLoader";
import RouterHandler from "./RouterHandler";

const darkTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ShowToast />
      <ShowLoader />
      <RouterHandler />
    </ThemeProvider>
  </Provider>
);

export default App;
