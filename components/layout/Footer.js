import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 70,
    display: "flex",
    position: "absolute",
    bottom: 0,
    color: "white",
    fontSize: 15,
    padding: "0 250px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.root}>
        Created by <b> Ahmad Nuril Firdaus</b>
      </footer>
    </>
  );
}
