import AppBar from "./Components/Navigation/AppBarWithStyles";
import { MainPage } from "./Components/mainPage";
import { mainTheme } from "./App/Theme/mainTheme";
import { Box } from "@mui/material";
import { Footer } from "./Components/Navigation/FooterContainer";

const app = {
  color: mainTheme.palette.primary.main,
  backgroundColor: mainTheme.palette.background.default,
  fontSize: "10px",
};

function App() {
  return (
    <Box sx={app}>
      <AppBar />
      <MainPage />
      <Footer />
    </Box>
  );
}

export default App;
