import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 15,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  linkWrapper: {
    backgroundColor: "none",
    borderColor: "white",
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.root}>
        <Grid container spacing={1}>
          <Grid item lg={6}>
            Created by <b> Ahmad Nuril Firdaus</b>
          </Grid>
          <Grid item lg={6} align="center">
            <Chip
              className={classes.linkWrapper}
              variant="outlined"
              label={
                <>
                  <GitHubIcon />
                </>
              }
            />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
