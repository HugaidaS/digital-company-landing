import { Container } from "@mui/material";
import AboutUs from "./Pages/About/AboutUs";
import { HomePage } from "./Pages/HomeScreen/HomePage";
import { PricePage } from "./Pages/Price/PricePage";
import { Solutions } from "./Pages/Solutions/Solutions";

export const MainPage = (theme) => {
  return (
    <main>
      <Container component={HomePage} />
      <Container component={AboutUs} />
      <Container component={PricePage} />
      <Container component={Solutions} />
    </main>
  );
};
