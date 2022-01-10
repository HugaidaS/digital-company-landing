import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = (theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    boxShadow: "none",
  },
});

export const ButtonAppBarCollapse = (props) => {
  let [anchorEl, setAnchorEl] = useState(null);
  let handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  let handleClose = () => {
    setAnchorEl(null);
  };
  let { classes } = props;
  const open = Boolean(anchorEl);

  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={handleMenu}>
        <MenuIcon />
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
    </div>
  );
};

export default withStyles(styles)(ButtonAppBarCollapse);
