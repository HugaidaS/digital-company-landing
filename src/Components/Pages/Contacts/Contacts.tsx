import { Container, Grid, Link, Paper, Typography } from "@mui/material";
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
            <Link href="tel:+7861-944-0585">
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
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={4} sx={{ zIndex: "2" }}>
            <Link
              target="_blank"
              href="https://www.google.com/maps/search/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80,+%D1%88%D0%BE%D1%81%D1%81%D0%B5+%D0%9D%D0%B5%D1%84%D1%82%D1%8F%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2,+28,+%D0%A2%D0%A6+%D0%9D%D1%8C%D1%8E%D1%82%D0%BE%D0%BD,+%D0%BE%D1%84%D0%B8%D1%81+503/@45.0694701,38.9806555,17z/data=!3m1!4b1"
            >
              <Paper elevation={3} sx={centralBlock}>
                <LocationOnIcon sx={icon} />
                <Typography variant="h6" align="center" color="default.main">
                  Краснодар, шоссе Нефтяников, 28, ТЦ Ньютон, офис 503
                </Typography>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Link href="mailto:sales@erker-it.ru">
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
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
