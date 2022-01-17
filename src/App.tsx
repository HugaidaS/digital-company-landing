import AppBar from "./Components/Navigation/AppBarWithStyles";
import { MainPage } from "./Components/mainPage";
import { mainTheme } from "./App/Theme/mainTheme";
import { Box } from "@mui/material";

const app = {
  color: mainTheme.palette.primary.main,
  backgroundColor: mainTheme.palette.background.default,
  fontSize: "10px",
};

function App(props: any) {
  return (
    <Box sx={app}>
      <AppBar />
      <MainPage />
    </Box>
  );
}

export default App;
