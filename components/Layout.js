import React, { useContext } from "react";
import { DarkContext } from "../context/DarkMode";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import BottomNavigation from "./BottomNavigation";

const useStyles = makeStyles(() => ({
  light: {
    width: "100vw",
    height: "100vh",
    background:
      "linear-gradient(60deg, rgba(52, 118, 207, 0.7), rgba(51, 200, 118, 0.7)), url('/image/Background.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  dark: {
    width: "100vw",
    height: "100vh",
    background:
      "linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.8)), url('/image/Background.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    overflowX: "hidden",
    overflowY: "hidden",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const context = useContext(DarkContext);
  const { theme, toggleDarkTheme } = context;

  const darkThemeClass =
    theme.palette.type === "light" ? classes.light : classes.dark;

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className={darkThemeClass}>
        <Navbar theme={theme} toggleDarkTheme={toggleDarkTheme} />
        <main>{children}</main>
        <BottomNavigation />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}
