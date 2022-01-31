import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { mainTheme } from "../../../App/Theme/mainTheme";

const basicBlock = {
  height: "209px",
  maxWidth: "300px",
  margin: "1rem auto",
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1rem",
  cursor: "pointer",
};
const leftBlock = {
  ...basicBlock,
  [mainTheme.breakpoints.up("sm")]: {
    marginRight: "-3px",
  },
};
const rightBlock = {
  ...basicBlock,
  [mainTheme.breakpoints.up("sm")]: {
    marginLeft: "-3px",
  },
};
const centralBlock = {
  ...basicBlock,
  backgroundColor: "primary.main",
  [mainTheme.breakpoints.up("sm")]: {
    height: "295px",
  },
};
const box = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "space-evenly",
};

const icon = {
  fontSize: "60px",
  color: "secondary.main",
  mb: "1rem",
};

export const Contacts = () => {
  return (
    <section id="contacts">
      <Container maxWidth="md" sx={box}>
        <Box sx={{ padding: "2rem" }}>
          <Typography variant="h2" align="center" color="primary">
            <Box sx={{ mb: "1rem", fontWeight: "700" }}>Остались вопросы?</Box>
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary">
            <Box>Свяжитесь с нами!</Box>
          </Typography>
        </Box>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={4} md={4}>
            <Paper elevation={3} sx={leftBlock}>
              <PermPhoneMsgIcon sx={icon} />
              <Typography
                variant="h6"
                align="center"
                sx={{ fontWeight: "700" }}
              >
                +7 (861) 944-0585
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} sx={{ zIndex: "2" }}>
            <Paper elevation={3} sx={centralBlock}>
              <LocationOnIcon sx={icon} />
              <Typography variant="h6" align="center" color="default.main">
                Краснодар, шоссе Нефтяников, 28, ТЦ Ньютон, офис 503
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper elevation={3} sx={rightBlock}>
              <EmailIcon sx={icon} />
              <Typography
                variant="h6"
                align="center"
                sx={{ fontWeight: "700" }}
              >
                sales@erker-it.ru
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
