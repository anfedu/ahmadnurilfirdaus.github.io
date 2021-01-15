import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import TelegramIcon from "@material-ui/icons/Telegram";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 70,
  },
  skeleton: {
    transform: "rotate(-30deg)",
    height: 60,
    borderRadius: 33,
    marginBottom: 20,
    animation: `$skeletons 1000ms`,
  },
  icon: {
    width: 100,
    height: 100,
    animation: `$myEffect 2000ms infinite`,
  },
  "@keyframes skeletons": {
    "0%": {
      width: 0,
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0.5,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0.5,
    },
  },
}));

export default function MessageSkeleton({ body, color }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton
        style={{
          position: "absolute",
          zIndex: 9999,
          top: 253,
          left: 373,
          color: Object.keys(body).length > 0 ? color : "blue",
          transform: "rotate(13deg)",
        }}
      >
        <TelegramIcon className={classes.icon} />
      </IconButton>
      <Skeleton
        className={classes.skeleton}
        style={{ width: 90 }}
        animation="wave"
      />
      <Skeleton
        className={classes.skeleton}
        style={{ width: 250 }}
        animation="wave"
      />
      <Skeleton
        className={classes.skeleton}
        style={{ width: 400 }}
        animation="wave"
      />
      <Skeleton
        className={classes.skeleton}
        style={{
          width: 190,
        }}
        animation="wave"
      />
      <Skeleton
        className={classes.skeleton}
        style={{
          width: 200,
          position: "absolute",
          top: 255,
          left: 500,
          transform: "rotate(-30deg)",
        }}
        animation="wave"
      />
      <Skeleton
        className={classes.skeleton}
        style={{ width: 500 }}
        animation="wave"
      />
      <Skeleton
        className={classes.skeleton}
        style={{
          width: 320,
          marginBottom: 20,
          position: "absolute",
          left: 380,
          bottom: 130,
        }}
        animation="wave"
      />
      <Skeleton
        className={classes.skeleton}
        style={{
          width: 150,
          marginBottom: 20,
          position: "absolute",
          left: 518,
          bottom: 130,
        }}
        animation="wave"
      />
    </div>
  );
}
