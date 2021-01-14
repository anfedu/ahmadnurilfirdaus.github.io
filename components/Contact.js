import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Typography,
  CardContent,
  Grid,
  CardActions,
  Button,
} from "@material-ui/core";
import Link from "../src/Link";

const useStyles = makeStyles((themes) => ({
  mainContainer: {
    borderRadius: 0,
    paddingBottom: 30,
    overflowY: "auto",
    boxShadow: "none",
    opacity: 0.9,
    minHeight: "81vh",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "none",
      webkitBoxShadow: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#bbb",
      outline: "none",
      borderRadius: 30,
    },
    [themes.breakpoints.down("md")]: {
      maxHeight: "82vh",
      minHeight: "82vh",
    },
  },
  mobile: {
    [themes.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  desktop: {
    width: 500,
    [themes.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <Card component="header" className={classes.mainContainer}>
      <Box
        style={{
          height: "74vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 30px",
        }}
      ></Box>
    </Card>
  );
}
