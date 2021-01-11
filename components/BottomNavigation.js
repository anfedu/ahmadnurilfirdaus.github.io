import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Link from "../src/Link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(255,255,255, 0.1)",
  },
}));

const styles = {
  root: {
    color: "#aaa",
    "&$selected": {
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  },
  selected: {},
};

function MyBottomNavigation(props) {
  const styling = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname.slice(1, 10));
  const { classes } = props;

  const handleChange = (event, newValue) => {
    setValue(router.pathname.slice(1, 10));
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={styling.wrapper}
    >
      <BottomNavigationAction
        label="Home"
        value=""
        classes={classes}
        icon={<HomeIcon />}
        component={Link}
        href="/"
      />
      <BottomNavigationAction
        label="About"
        value="about"
        classes={classes}
        icon={<FavoriteIcon />}
        component={Link}
        href="/about"
      />
      <BottomNavigationAction
        label="Portfolio"
        value="portfolio"
        classes={classes}
        icon={<LocationOnIcon />}
        component={Link}
        href="/portfolio"
      />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        classes={classes}
        icon={<FolderIcon />}
        component={Link}
        href="/contact"
      />
    </BottomNavigation>
  );
}
export default withStyles(styles)(MyBottomNavigation);