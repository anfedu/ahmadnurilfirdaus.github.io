import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Card } from "@material-ui/core";

const useStyles = makeStyles((themes) => ({
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [themes.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },

  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWith: "0.625rem",
      transform: "rotate(45deg)",
    },
    [themes.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [themes.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    padding: "0",
    textTransform: "uppercase",
  },
}));

export default function Resume() {
  const classes = useStyles();
  return (
    <Card component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            aligh="center"
            className={classes.subHeading}
          >
            Web design
          </Typography>
          <Typography
            aligh="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            Company name where worked
          </Typography>
          <Typography
            aligh="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            Consectetur illum maxime in id debitis Ea rem nihil nihil beatae nam
            expedita. Quisquam cum id enim et harum. Dicta
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            aligh="center"
            className={classes.subHeading}
          >
            Web design
          </Typography>
          <Typography
            aligh="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            Company name where worked
          </Typography>
          <Typography
            aligh="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            Consectetur illum maxime in id debitis Ea rem nihil nihil beatae nam
            expedita. Quisquam cum id enim et harum. Dicta
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            aligh="center"
            className={classes.subHeading}
          >
            Web design
          </Typography>
          <Typography
            aligh="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            Company name where worked
          </Typography>
          <Typography
            aligh="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            Consectetur illum maxime in id debitis Ea rem nihil nihil beatae nam
            expedita. Quisquam cum id enim et harum. Dicta
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
