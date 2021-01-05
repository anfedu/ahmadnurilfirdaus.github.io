import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CssBaseline, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "absolute",
    top: 0,
    background: "none",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <b>Ahmad Nuril Firdaus</b>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
