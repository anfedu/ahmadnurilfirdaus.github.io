import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  light: {
    width: "100vw",
    height: "100vh",
    background:
      "linear-gradient(60deg, rgba(8, 8, 231, 0.7),  rgba(7, 178, 54, 0.7)), url('/image/Background.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    paddingTop: "43vh",
  },
  dark: {
    width: "100vw",
    height: "100vh",
    background:
      "linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0.8)), url('/image/Background.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    paddingTop: "43vh",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  // We keep the theme in app state
  const [theme, setTheme] = React.useState({
    palette: {
      type: "light",
    },
  });

  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType,
      },
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);
  const darkTheme =
    theme.palette.type === "light" ? classes.light : classes.dark;

  // the mui theme is used in the themeProvider.
  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className={darkTheme}>
        <Navbar toggleDark={toggleDarkTheme} theme={theme.palette.type} />
        <main>{children}</main>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}
