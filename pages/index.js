import { makeStyles } from "@material-ui/core/styles";
import Typed from "../components/home";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const useStyles = makeStyles({
  root: {
    paddingTop: 100,
    width: "100vw",
    height: "100vh",
    background:
      "linear-gradient(60deg, rgba(8, 8, 231, 0.7), rgba(93, 246, 158, 0.7)), url('/image/Background.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    paddingTop: 275,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Typed />
      <Footer />
    </div>
  );
}
