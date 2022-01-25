import AppBarCollapse from "./AppBar/AppBarCollapse";
import { HideOnScroll } from "./HideOnScroll";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { mainTheme } from "../../App/Theme/mainTheme";

const toggleDrawer = { borderRadius: "5%" };
const statusImage = {
  margin: "0",
  padding: "0",
  maxWidth: "250px",
  maxHeight: "150px",
  [mainTheme.breakpoints.down("md")]: {
    display: "none",
  },
};
const logoTitleAppBar = {
  margin: "0 10px",
  fontWeight: "Bold",
  color: "primary.main",
  [mainTheme.breakpoints.down("xs")]: {
    fontSize: "2rem",
  },
};
const toolbar = {
  display: "flex",
  justifyContent: "space-around",
  [mainTheme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },
};

const ButtonAppBar = (props: any) => {
  const logoButton = (
    <IconButton aria-label="LogoErker" sx={toggleDrawer}>
      <img
        alt="Logo"
        src="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/000000/external-digital-transformation-digital-transformation-parzival-1997-outline-color-parzival-1997.png"
      />
      <Typography variant="h5" sx={logoTitleAppBar} align="left">
        Эркер
        <Typography variant="subtitle1" component="div">
          Digital Transformation
        </Typography>
      </Typography>
    </IconButton>
  );
  return (
    <header>
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="default">
          <Toolbar sx={toolbar}>
            <Button children={logoButton} href="#home" color="primary" />
            <AppBarCollapse />
            <Box sx={statusImage}>
              <Container
                component="img"
                alt="status"
                src="./imgs/SPG_status.png"
              />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </header>
  );
};

export default ButtonAppBar;
