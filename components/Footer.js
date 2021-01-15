import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography, IconButton } from "@material-ui/core";
import Link from "../src/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
    height: 70,
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  linkWrapper: {
    backgroundColor: "none",
    borderColor: "#eee",
    color: "#eee",
    height: 40,
    borderRadius: 21,
  },
  iconGh: {
    color: "#eee",
    padding: "3px 3px",
    marginInline: 10,
    "&:hover": {
      backgroundColor: "#777",
      color: "white",
    },
  },
  iconFb: {
    color: "#eee",
    padding: "3px 3px",
    marginInline: 10,
    "&:hover": {
      backgroundColor: "#439FFF",
      color: "white",
    },
  },
  iconTg: {
    color: "#eee",
    padding: "3px 3px",
    marginInline: 10,
    "&:hover": {
      backgroundColor: "#32B1E1",
      color: "white",
    },
  },
  iconWa: {
    color: "#eee",
    padding: "3px 3px",
    marginInline: 10,
    "&:hover": {
      backgroundColor: "#54F36C",
      color: "white",
    },
  },
  footer: {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div
      className={classes.root}
      style={{
        position: "fixed",
        bottom: 0,
      }}
    >
      <footer className={classes.footer}>
        <Typography variant="body1" style={{ color: "#eee" }}>
          Created by <b> Ahmad Nuril Firdaus</b>
        </Typography>
        <Chip
          className={classes.linkWrapper}
          variant="outlined"
          label={
            <>
              <IconButton
                className={classes.iconGh}
                component={Link}
                href="http://github.com/anfedu"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                className={classes.iconWa}
                component={Link}
                href="https://wasap.at/qcib7h"
                target="_blank"
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                className={classes.iconFb}
                component={Link}
                href="https://web.facebook.com/profile.php?id=100009305915205"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                className={classes.iconTg}
                component={Link}
                href="https://t.me/ahmadnurilfirdaus"
                target="_blank"
              >
                <TelegramIcon />
              </IconButton>
            </>
          }
        />
      </footer>
    </div>
  );
}