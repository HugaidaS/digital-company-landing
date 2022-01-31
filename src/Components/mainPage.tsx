import { Container } from "@mui/material";
import AboutUs from "./Pages/About/AboutUs";
import { HomePage } from "./Pages/HomeScreen/HomePage";
import { DVPage } from "./Pages/Docsvision/DVPage";
import { Contacts } from "./Pages/Contacts/Contacts";

export const MainPage = () => {
  return (
    <main>
      <Container component={HomePage} />
      <Container component={AboutUs} />
      <Container component={DVPage} />
      <Container component={Contacts} />
    </main>
  );
};
