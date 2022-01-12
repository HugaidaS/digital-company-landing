import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import AllLinkTabs from "../../../../App/LinkTabsHoc";

const NavTabs = () => {
  const [value, setValue] = React.useState(-1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs"
        textColor="primary"
        indicatorColor="secondary"
      >
        {AllLinkTabs()}
      </Tabs>
    </Box>
  );
};

export default NavTabs;
