import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DVData } from "../../../App/Config/DVSection";
import { DataBlock } from "./DataBlock";

export const DVPage = () => {
  return (
    <section id="docsvision">
      <Box sx={{ paddingBottom: "2.5rem" }}>
        <Typography
          variant="h3"
          color="secondary"
          textAlign="center"
          sx={{ mb: "1rem" }}
        >
          Docsvision
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary">
          <Box>Больше узнать о компании и тарифах можно на сайте Вендора</Box>
        </Typography>
      </Box>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {DVData.map((dataComponent) => {
            return (
              <DataBlock
                title={dataComponent.title}
                href={dataComponent.href}
                image={dataComponent.image}
              />
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};
