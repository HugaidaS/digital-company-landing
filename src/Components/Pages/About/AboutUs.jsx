import { Box, Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { FeaturesContainer } from "./FeaturesContainer";

const useStyles = makeStyles((theme) => ({}));

const AboutUs = () => {
  return (
    <section id="about">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center">
          <Box sx={{ fontWeight: "700", marginBottom: "2.5rem" }}>
            Почему выбирают Нас?
          </Box>
        </Typography>
        <FeaturesContainer />
      </Container>
    </section>
  );
};

export default withStyles(useStyles)(AboutUs);
