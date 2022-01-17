import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const DataBlock = (props) => {
  const { href, image, title } = props;
  console.log(props);
  return (
    <Grid item xs={12} md={6} lg={6}>
      <Paper
        variant="rounded"
        elevation={5}
        sx={{
          height: "350px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: "auto",
            padding: "2rem",
            backgroundColor: "rgba(1, 1, 4, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            borderRadius: "4px",
          }}
        >
          <Typography
            variant="h5"
            color="background.default"
            sx={{ marginBottom: "10px" }}
          >
            {title}
          </Typography>
          <Button
            href={href}
            variant="contained"
            color="secondary"
            size="medium"
            sx={{ color: "background.default" }}
          >
            Узнать больше
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};
