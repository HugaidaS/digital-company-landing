import ButtonAppBarCollapse from "./ButtonAppBarCollapse/ButtonAppBarCollapse";
import NavTabs from "./Tabs/Tabs";
import AllLinkTabs from "../../../App/LinkTabsHoc";
import { mainTheme } from "../../../App/Theme/mainTheme";
import { Box, MenuItem } from "@mui/material";

const buttonBar = {
  [mainTheme.breakpoints.down("md")]: {
    display: "none",
  },
};
const allTabs = AllLinkTabs();

const AppBarCollapse = (props: any) => (
  <div>
    <ButtonAppBarCollapse>
      {allTabs.map((tab) => {
        return <MenuItem>{tab}</MenuItem>;
      })}
    </ButtonAppBarCollapse>
    <Box sx={buttonBar}>
      <NavTabs />
    </Box>
  </div>
);

export default AppBarCollapse;
