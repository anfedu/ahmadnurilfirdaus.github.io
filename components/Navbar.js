import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import Link from "../src/Link";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "absolute",
    top: 0,
    background: "none",
    boxShadow: "none",
  },
  toolbar: {
    width: "80%",
    margin: "0 auto",
  },
  title: {
    flexGrow: 1,
    fontSize: 21,
    textDecoration: "none",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      marginLeft: -39,
    },
  },
  buttonLink: {
    textTransform: "none",
    fontWeight: "bold",
    fontSize: 17,
    marginRight: theme.spacing(2),
    color: "#ccc",
    "&:hover": {
      background: "none",
      color: "#eee",
    },
  },
  linkWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  buttonLinkActive: {
    color: "#fff",
  },
}));

export default function Navbar() {
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
        <Box className={classes.linkWrapper}>
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
            href="/experience"
            color="inherit"
          >
            Experience
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
