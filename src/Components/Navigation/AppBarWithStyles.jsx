import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AppBarCollapse from "./AppBar/AppBarCollapse";
import { Button, Container } from "@material-ui/core";
import { mainTheme } from "../../App/Theme/mainTheme";
import { HideOnScroll } from "./HideOnScroll";

const styles = (theme) => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toggleDrawer: { borderRadius: "5%" },
  appTitle: {
    marginLeft: "10px",
    fontWeight: "Bold",
    textAlign: "left",
    color: mainTheme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  appSubtitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
  },
  statusImage: {
    margin: "0",
    padding: "0",
    maxWidth: "200px",
    maxHeight: "150px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
});

const ButtonAppBar = (props) => {
  const { classes } = props;
  const logoButton = (
    <IconButton aria-label="LogoErker" className={classes.toggleDrawer}>
      <img
        alt="Logo"
        src="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/000000/external-digital-transformation-digital-transformation-parzival-1997-outline-color-parzival-1997.png"
      />
      <Typography variant="h5" className={classes.appTitle}>
        Эркер
        <Typography
          variant="subtitle1"
          component="div"
          className={classes.appSubtitle}
        >
          Digital Transformation
        </Typography>
      </Typography>
    </IconButton>
  );
  return (
    <header>
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="background.default">
          <Toolbar className={classes.toolbar}>
            <Button children={logoButton} href="#home" color="primary" />
            <AppBarCollapse />
            <Container
              component="img"
              alt="status"
              src="./imgs/SPG_status.png"
              className={classes.statusImage}
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </header>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
