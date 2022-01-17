import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DVData } from "../../../App/Config/DVSection";
import { DataBlock } from "./DataBlock";

export const DVPage = () => {
  return (
    <section id="docsvision">
      <Box>
        <Typography variant="h3" color="secondary" textAlign="center">
          Docsvision
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
