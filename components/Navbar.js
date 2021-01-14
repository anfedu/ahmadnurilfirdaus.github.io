import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import Link from "../src/Link";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "relative",
    top: 0,
    width: "100%",
    background: "none",
    boxShadow: "none",
  },
  toolbar: {
    width: "66%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0",
      width: "100%",
    },
  },
  title: {
    flexGrow: 1,
    fontSize: 21,
    textDecoration: "none",
    color: "#eee",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  buttonLink: {
    textTransform: "none",
    fontSize: 17,
    fontWeight: 550,
    marginRight: theme.spacing(2),
    color: "#ccc",
    "&:hover": {
      background: "none",
      color: "#ddd",
    },
  },
  linkWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  buttonLinkActive: {
    color: "#fff",
    height: 36,
    "&:hover": {
      color: "#eee",
    },
  },
  iconLight: {
    color: "#ccc",
    cursor: "pointer",
    fontSize: 25,
    [theme.breakpoints.down("xs")]: {
      fontSize: 21,
    },
    "&:hover": {
      color: "springgreen",
    },
  },
  iconDark: {
    color: "#eee",
    cursor: "pointer",
    transform: "rotate(30deg)",
    fontSize: 25,
    [theme.breakpoints.down("xs")]: {
      fontSize: 21,
    },
    "&:hover": {
      color: "yellow",
    },
  },
}));

export default function Navbar({ theme, toggleDarkTheme }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component={Link}
          href="/"
          naked
          variant="h6"
          className={classes.title}
        >
          <b>Ahmad Nuril Firdaus</b>
        </Typography>
        <Box>
          <span className={classes.linkWrapper}>
            <Button
              className={classes.buttonLink}
              activeClassName={classes.buttonLinkActive}
              component={Link}
              naked
              href="/"
            >
              Home
            </Button>
            <Button
              className={classes.buttonLink}
              activeClassName={classes.buttonLinkActive}
              component={Link}
              naked
              href="/about"
            >
              About
            </Button>
            <Button
              className={classes.buttonLink}
              activeClassName={classes.buttonLinkActive}
              component={Link}
              naked
              href="/portfolio"
            >
              Portfolio
            </Button>
            <Button
              component={Link}
              activeClassName={classes.buttonLinkActive}
              href="/contact"
              naked
              className={classes.buttonLink}
            >
              Contact
            </Button>
          </span>
          <span>
            {theme.palette.type === "light" ? (
              <IconButton
                style={{ padding: "0 0", marginRight: 10 }}
                onClick={toggleDarkTheme}
              >
                <Brightness2Icon className={classes.iconDark} />
              </IconButton>
            ) : (
              <IconButton
                style={{ padding: "0 0", marginRight: 10 }}
                onClick={toggleDarkTheme}
              >
                <WbSunnyIcon className={classes.iconLight} />
              </IconButton>
            )}
          </span>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
