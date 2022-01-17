import { MenuRounded } from "@mui/icons-material";
import { Box, IconButton, Menu } from "@mui/material";
import { useState } from "react";
import { mainTheme } from "../../../../App/Theme/mainTheme";

const buttonCollapse = {
  [mainTheme.breakpoints.up("lg")]: {
    display: "none",
  },
  boxShadow: "none",
};

export const ButtonAppBarCollapse = (props) => {
  let [anchorEl, setAnchorEl] = useState(null);
  let handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  let handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Box sx={buttonCollapse}>
      <IconButton onClick={handleMenu}>
        <MenuRounded />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {props.children}
      </Menu>
    </Box>
  );
};

export default ButtonAppBarCollapse;
