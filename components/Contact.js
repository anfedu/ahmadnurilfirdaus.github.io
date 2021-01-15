import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SendIcon from "@material-ui/icons/Send";
import MessageSkeleton from "./MessageSkeleton";
import CallIcon from "@material-ui/icons/Call";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import EmailIcon from "@material-ui/icons/Email";
import Alert from "@material-ui/lab/Alert";

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
  disappeared: {
    [themes.breakpoints.down("md")]: {
      display: "none",
    },
  },
  title: {
    [themes.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  gridContainer: {
    marginTop: 30,
    padding: "0 10px",
  },
  textfield: {
    marginTop: 20,
    [themes.breakpoints.down("xs")]: {
      marginTop: 13,
    },
  },
}));

export default function Resume() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    type: "success",
    body: "",
    color: "springgreen",
  });
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    descriptionProject: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "833422065",
        text: `${JSON.stringify(values, undefined, 4)}`,
      }),
    };

    if (
      (values.fullName.trim() === "" &&
        values.email.trim() === "" &&
        values.phoneNumber.trim() === "" &&
        values.companyName.trim() === "",
      values.descriptionProject.trim() === "")
    ) {
      setAlert({
        type: "error",
        body: "Please fill the blank field",
        color: "red",
      });
    } else {
      setLoading(true);
      fetch(
        "https://api.telegram.org/bot1545229174:AAH5jJeaBIRlD1sSyjqakkmGzVlzy04x8w4/sendMessage",
        requestOptions
      )
        .then((response) => {
          response.json();
          if (response) {
            setLoading(false);
          }
        })
        .then(() => {
          setValues({
            fullName: "",
            email: "",
            companyName: "",
            phoneNumber: "",
            descriptionProject: "",
          });
          setAlert({ body: "Message sent successfully", color: "springgreen" });
        });
    }
  };

  return (
    <Card component="header" className={classes.mainContainer}>
      <Grid
        container
        spacing={1}
        justify="center"
        className={classes.gridContainer}
      >
        <Grid item lg={4} className={classes.disappeared}>
          <MessageSkeleton />
        </Grid>
        <Grid item lg={1} className={classes.disappeared}></Grid>
        <Grid item lg={3} md={8} sm={8} xs={11} align="center">
          <Typography variant="h6" className={classes.title}>
            Build your awesome project with us
          </Typography>
          {Object.keys(alert.body).length > 0 && (
            <Alert
              severity={alert.type}
              style={{ border: `1px solid ${alert.color}`, marginTop: 10 }}
              onClose={() => setAlert({ body: "" })}
            >
              {alert.body}
            </Alert>
          )}
          <TextField
            variant="outlined"
            required
            size="small"
            placeholder="Full Name"
            value={values.fullName}
            fullWidth
            type="text"
            name="fullName"
            onChange={handleChange}
            className={classes.textfield}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            required
            size="small"
            placeholder="Email Address"
            value={values.email}
            fullWidth
            type="text"
            name="email"
            onChange={handleChange}
            className={classes.textfield}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            required
            size="small"
            placeholder="Company Name"
            value={values.companyName}
            fullWidth
            type="text"
            name="companyName"
            onChange={handleChange}
            className={classes.textfield}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessCenterIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            required
            size="small"
            placeholder="Phone Number"
            value={values.phoneNumber}
            fullWidth
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            className={classes.textfield}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CallIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            required
            size="small"
            placeholder="Description Project"
            fullWidth
            value={values.descriptionProject}
            type="text"
            name="descriptionProject"
            onChange={handleChange}
            multiline
            rows={3}
            rowsMax={4}
            className={classes.textfield}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LaptopMacIcon style={{ position: "relative", top: -19 }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSubmit}
            style={{
              marginTop: 30,
              textTransform: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {loading ? (
              "Loading ..."
            ) : (
              <>
                Send Message <SendIcon style={{ marginLeft: 7 }} />
              </>
            )}
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
