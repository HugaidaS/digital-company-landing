import { MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse/ButtonAppBarCollapse";
import NavTabs from "./Tabs/Tabs";
import AllLinkTabs from "../../../App/LinkTabsHoc";

const styles = (theme) => ({
  root: {
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
});
const allTabs = AllLinkTabs();

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      {allTabs.map((tab) => {
        return <MenuItem>{tab}</MenuItem>;
      })}
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <NavTabs />
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
