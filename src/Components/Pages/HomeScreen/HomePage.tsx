import Grow from "@mui/material/Grow";
import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

const statusImage = {
  margin: "0 auto",
  padding: "2rem 0",
  maxWidth: "250px",
  maxHeight: "150px",
};

const homeScreen = {
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  marginTop: "auto",
};

export const HomePage = () => {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home">
      <Container maxWidth="md" sx={homeScreen}>
        <Grow in={mounted}>
          <Typography variant="h2" align="center" color="primary">
            <Box sx={{ mb: "3rem", fontWeight: "700" }}>
              Автоматизация документооборота и бизнес-процессов «под ключ»
            </Box>
          </Typography>
        </Grow>
        <Grow in={mounted} timeout={1000}>
          <Typography variant="h5" align="center" color="textSecondary">
            <Box>
              Предлагаем полный комплекс услуг по автоматизации документооборота
              и бизнес-процессов: от подготовительных работ и до технической
              поддержки
            </Box>
          </Typography>
        </Grow>
        <Grow in={mounted} timeout={1200}>
          <Box sx={statusImage}>
            <Container
              component="img"
              alt="status"
              src="./imgs/SPG_status.png"
            />
          </Box>
        </Grow>
        <Grow in={mounted} timeout={2000}>
          <Typography variant="h5" align="center" color="secondary">
            <Box
              sx={{
                fontWeight: "700",
              }}
            >
              <Box sx={{ mb: "0.6rem" }}> sales@erker-it.ru </Box>
              <Box> +7 (861) 944-0585 </Box>
            </Box>
          </Typography>
        </Grow>
      </Container>
    </section>
  );
};
