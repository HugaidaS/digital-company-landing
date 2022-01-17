import { Container } from "@mui/material";
import AboutUs from "./Pages/About/AboutUs";
import { HomePage } from "./Pages/HomeScreen/HomePage";
import { DVPage } from "./Pages/Docsvision/DVPage";
import { Solutions } from "./Pages/Solutions/Solutions";

export const MainPage = (theme) => {
  return (
    <main>
      <Container component={HomePage} />
      <Container component={AboutUs} />
      <Container component={DVPage} />
      <Container component={Solutions} />
    </main>
  );
};
