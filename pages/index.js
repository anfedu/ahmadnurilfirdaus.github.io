import { makeStyles } from "@material-ui/core/styles";
import Typed from "../components/Typed";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    background:
      "linear-gradient(60deg, rgba(8, 8, 231, 0.7),  rgba(7, 178, 54, 0.7)), url('/image/Background.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    paddingTop: "45vh",
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
