import { Box, Container, Typography } from "@mui/material";
import Customers from "./Customers";
import { FeaturesContainer } from "./FeaturesContainer";

const AboutUs = () => {
  return (
    <section id="about">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center">
          <Box
            sx={{
              fontWeight: "700",
              marginBottom: "2.5rem",
            }}
          >
            Почему выбирают Нас?
          </Box>
        </Typography>
        <FeaturesContainer />
        <Customers />
      </Container>
    </section>
  );
};

export default AboutUs;
