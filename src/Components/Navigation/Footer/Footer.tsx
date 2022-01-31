import { Box, Grid, Typography } from "@mui/material";

export const FooterComponent = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", height: "200px" }}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={4} md={4}>
          <Box>
            <Typography color="default.main">Credentials</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
