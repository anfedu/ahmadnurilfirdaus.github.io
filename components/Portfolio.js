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
  Grow,
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
      minHeight: "100vh",
    },
  },
  mobile: {
    [themes.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  desktop: {
    width: 500,
    height: 370,
    [themes.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  cardContainer: {
    display: "flex",
    marginTop: "6%",
    justifyContent: "center",
    padding: "0 30px",
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <Card component="header" id="header" className={classes.mainContainer}>
      <Box className={classes.cardContainer}>
        <Grow in={true} timeout={{ enter: 1000, exit: 1000 }}>
          <Card className={classes.mobile}>
            <img src="/image/socialapp.png" style={{ width: "100%" }} />
            <CardContent>
              <Typography variant="body1" style={{ textAlign: "justify" }}>
                SocialApp is web application, that allows you to create and
                delete post, you can also like or unlike post and you can create
                comment to another user post
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                aria-label="Center Align"
                fullWidth
                component={Link}
                target="_blank"
                href="http://anf-socialapp.netlify.app"
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
          </Card>
        </Grow>
        <Grow in={true} timeout={{ enter: 1000, exit: 1000 }}>
          <Card className={classes.desktop}>
            <Grid container spacing={0}>
              <Grid item lg={5} md={5} sm={5}>
                <img
                  src="/image/socialappmobile.png"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item lg={7} md={7} sm={7}>
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    SocialApp
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "justify" }}>
                    Social app is web application allows you to create and
                    delete post, you can also like or unlike post and you can
                    create comment to another user post
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    fullWidth
                    component={Link}
                    target="_blank"
                    href="http://anf-socialapp.netlify.app"
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
        </Grow>
      </Box>
    </Card>
  );
}
