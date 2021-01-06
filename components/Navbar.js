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
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "absolute",
    top: 0,
    width: "100%",
    background: "none",
    boxShadow: "none",
  },
  toolbar: {
    width: "85%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      margin: "0 0",
      width: "100%",
    },
  },
  title: {
    flexGrow: 1,
    fontSize: 21,
    textDecoration: "none",
    color: "#ddd",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  buttonLink: {
    textTransform: "none",
    fontWeight: "bold",
    fontSize: 17,
    marginRight: theme.spacing(2),
    color: "#bbb",
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
    "&:hover": {
      color: "#fff",
    },
  },
  iconLight: {
    color: "#ccc",
    cursor: "pointer",
    fontSize: 31,
    "&:hover": {
      color: "yellow",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
}));

export default function Navbar({ toggleDark, theme }) {
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
              color="inherit"
            >
              Home
            </Button>
            <Button
              className={classes.buttonLink}
              activeClassName={classes.buttonLinkActive}
              component={Link}
              naked
              href="/about"
              color="inherit"
            >
              About
            </Button>
            <Button
              className={classes.buttonLink}
              activeClassName={classes.buttonLinkActive}
              component={Link}
              naked
              href="/portfolio"
              color="inherit"
            >
              Portfolio
            </Button>
            <Button
              component={Link}
              activeClassName={classes.buttonLinkActive}
              href="/contact"
              naked
              className={classes.buttonLink}
              color="inherit"
            >
              Contact
            </Button>
          </span>
          <IconButton style={{ padding: "0 0" }}>
            {theme === "light" ? (
              <Brightness4Icon
                className={classes.iconLight}
                onClick={toggleDark}
              />
            ) : (
              <Brightness7Icon
                className={classes.iconLight}
                onClick={toggleDark}
              />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
