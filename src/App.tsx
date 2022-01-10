import AppBar from "./Components/Navigation/AppBarWithStyles";
import { MainPage } from "./Components/mainPage";
import { withStyles } from "@material-ui/core/styles";
import { mainTheme } from "./App/Theme/mainTheme";

const styles = (theme: any) => ({
  App: {
    color: mainTheme.palette.primary.main,
    backgroundColor: mainTheme.palette.background.default,
    fontSize: "10px",
  },
});

function App(props: any) {
  const { classes } = props;
  return (
    <div className={classes.App}>
      <AppBar />
      <MainPage />
    </div>
  );
}

export default withStyles(styles)(App);
