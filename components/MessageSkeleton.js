import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import TelegramIcon from "@material-ui/icons/Telegram";
import { Card } from "@material-ui/core";

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
  cardIcon: {
    position: "absolute",
    zIndex: 9999,
    top: 227,
    left: 367,
    transform: "rotate(13deg)",
    boxShadow: "none",
    borderRadius: "100%",
    height: 170,
    width: 170,
    padding: 33,
  },
  "@keyframes skeletons": {
    "0%": {
      width: 0,
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0.3,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0.3,
    },
  },
}));

export default function MessageSkeleton({ body, color }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card
        className={classes.cardIcon}
        style={{
          color: Object.keys(body).length > 0 ? color : "#0088cc",
        }}
      >
        <TelegramIcon className={classes.icon} />
      </Card>
      <Skeleton className={classes.skeleton} style={{ width: 90 }} />
      <Skeleton className={classes.skeleton} style={{ width: 250 }} />
      <Skeleton className={classes.skeleton} style={{ width: 400 }} />
      <Skeleton
        className={classes.skeleton}
        style={{
          width: 190,
        }}
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
      />
      <Skeleton className={classes.skeleton} style={{ width: 500 }} />
      <Skeleton
        className={classes.skeleton}
        style={{
          width: 320,
          marginBottom: 20,
          position: "absolute",
          left: 383,
          bottom: 130,
        }}
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
      />
    </div>
  );
}
