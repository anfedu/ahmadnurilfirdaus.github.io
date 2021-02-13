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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(10),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      marginBottom: theme.spacing(12),
    },
  },
  mainContainer: {
    borderRadius: 0,
    // paddingBottom: "20vh",
    overflowY: "auto",
    boxShadow: "none",
    opacity: 0.9,
    maxHeight: "80vh",
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
    [theme.breakpoints.down("md")]: {
      minHeight: "100vh",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10vh",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "35%",
    },
  },
  card: {
    width: 500,
    height: 330,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      height: 400,
    },
  },
  image: {
    width: "100%",
    height: 330,
    [theme.breakpoints.down("xs")]: { display: "none" },
  },
  imageWeb: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
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
      <Box className={classes.boxContainer}>
        <Grid container spacing={3} justify="center">
          {projectData.map((item, index) => (
            <Grid item xs={12} sm={12} lg={5} md={6} key={index} align="center">
              <Card className={classes.card}>
                <Grid container spacing={0}>
                  <Grid item lg={5} md={5} sm={5} xl={12}>
                    <img
                      src={`/image/${item.web}`}
                      className={classes.imageWeb}
                    />
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
                          color: "white",
                          textDecoration: "none",
                          fontWeight: "bold",
                          backgroundColor: "springgreen",
                        }}
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
      </Box>
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
