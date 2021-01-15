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
} from "@material-ui/core";
import Link from "../src/Link";

const experience = [
  {
    year: "2019",
    title: "Physics Teacher",
    body:
      "Unacademy is an Indian online education technology company based in Bangalore. It was originally created as a YouTube channel in 2010 by Gaurav Munjal (wikipedia), My experience is as physics teacher in",
    link: "https://unacademy.com/lesson/letihan-soal-3/4DT1HCL7",
    linkTitle: "unacademy",
  },
  {
    year: "2020",
    title: "Full Stack Developer",
    body:
      "Mejik utama sugiharta is software house company based in south of jakarta, My work in this company as front end developer for three month, you can see the company profile on ",
    link: "https://microgen.mejik.id/",
    linkTitle: "mejik",
  },
];

const about = [
  {
    body:
      "My name is Ahmad Nuril Firdaus a web and mobile developer since 2020",
  },
  {
    body:
      "I was born in Jember East Java, I studied and earned a bachelor of physics education at the university of Jember",
  },
  {
    body:
      "In 2020 I took coding training as a full stack javascript, Finally I love everything about javascript",
  },
  {
    body:
      "It's fun to build apps with modern tools like react js, next js, react native, Node js, express js, graphql, mongo db, apollo and many more",
  },
];

const useStyles = makeStyles((themes) => ({
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid aquamarine",
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
    borderBottom: "2px solid aquamarine",
    position: "relative",
    margin: "1rem 1rem 1rem 1rem",
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
      borderWith: "0.625rem",
      transform: "rotate(45deg)",
    },
    [themes.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "aquamarine",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #bbb #bbb",
      },
    },
  },
  timeLineYear: {
    borderRadius: 23,
    border: "none",
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: 19,
    background: "#aaa",
    color: "white",
    padding: "0.5rem 1rem",
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
    color: "#888",
    padding: "3rem 0",
    fontWeight: "bold",
    marginTop: 70,
  },
  subHeading: {
    color: "#888",
    fontWeight: "bold",
  },
  body2: {
    textAlign: "justify",
    lineHeight: 1.3,
  },
  mainContainer: {
    borderRadius: 0,
    paddingBottom: 30,
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
    [themes.breakpoints.down("md")]: {
      maxHeight: "82vh",
      minHeight: "82vh",
    },
    [themes.breakpoints.down("xs")]: {
      paddingTop: 90,
    },
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <Card component="header" className={classes.mainContainer}>
      <Box
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 30px",
        }}
      >
        <Grid container spacing={3} justify="center">
          <Grid item lg={2} sm={12} align="center">
            <Grow in={true} timeout={{ enter: 1100 }}>
              <Avatar
                style={{ width: 190, height: 190, marginBottom: 10 }}
                src="/image/profile.png"
              />
            </Grow>
            <Grow in={true} timeout={{ enter: 1000 }}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  width: 130,
                  fontWeight: "bold",
                  borderRadius: 23,
                  boxShadow: "none",
                  backgroundColor: "springgreen",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "aqua",
                  },
                }}
                download
                href="/anf.pdf"
              >
                Certificate
              </Button>
            </Grow>
          </Grid>
          <Grid item lg={6} md={12}>
            {about.map((data, index) => (
              <div key={index}>
                <Grow in={true} timeout={{ enter: 1000 }}>
                  <Typography variant="body1">{data.body}</Typography>
                </Grow>
                <br />
              </div>
            ))}
          </Grid>
        </Grid>
      </Box>
      <br />
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        {experience.map((data, index) => (
          <React.Fragment key={index}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              key={index}
            >
              {data.year}
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                aligh="center"
                className={classes.subHeading}
              >
                {data.title}
              </Typography>
              <Typography
                aligh="center"
                variant="body2"
                className={classes.body2}
              >
                {data.body}{" "}
                <Link style={{ color: "orange" }} href={data.link}>
                  {data.linkTitle}
                </Link>
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Card>
  );
}
