import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Card,
  Avatar,
  Grid,
  Button,
  Grow,
  Slide,
  CardActions,
  CardContent,
  useMediaQuery,
} from "@material-ui/core";
import Link from "../src/Link";
import { useTheme } from "@material-ui/core/styles";
import useWindowPosition from "../src/useWindowPosition";
import { projectData } from "./projectData";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    height: "80vh",
    marginTop: 0,
    marginBottom: 200,
    [theme.breakpoints.up("lg")]: {
      padding: "0 10.5%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 570,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 330,
    },
  },
  mainContainer: {
    borderRadius: 0,
    overflowY: "auto",
    boxShadow: "none",
    opacity: 0.9,
    maxHeight: "81vh",
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
    paddingTop: "2%",
    [theme.breakpoints.down("md")]: {
      minHeight: "100vh",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "100vh",
      paddingTop: "2%",
      paddingBottom: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "5%",
    },
  },
  card: {
    width: 500,
    minHeight: 330,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      minHeight: 230,
    },
  },
  image: {
    width: "100%",
    height: 330,
    [theme.breakpoints.down("xs")]: { display: "none" },
  },
  cardWrapper: {
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
}));

export default function Resume() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const checked = useWindowPosition("header", 0.3);

  return (
    <Card component="header" id="header" className={classes.mainContainer}>
      <Grid container spacing={0} className={classes.boxContainer}>
        {projectData.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            key={index}
            align="center"
            className={classes.cardWrapper}
          >
            <Card className={classes.card}>
              <Grid container spacing={0}>
                <Grid item lg={5} md={5} sm={5} xl={12}>
                  <img
                    src={`/image/${item.mobile}`}
                    className={classes.image}
                  />
                </Grid>
                <Grid item lg={7} md={7} sm={7} xl={12}>
                  <CardContent>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ textAlign: "justify" }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      fullWidth
                      component={Link}
                      target="_blank"
                      href={item.Link}
                      style={{
                        textTransform: "none",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                      color="secondary"
                    >
                      Live Preview
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      {!matches && (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      )}
    </Card>
  );
}
