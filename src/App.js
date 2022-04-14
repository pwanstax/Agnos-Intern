import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import MainPage from "./pages/MainPage";

const theme = createTheme({
  typography: {
    fontFamily: "Kanit",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
