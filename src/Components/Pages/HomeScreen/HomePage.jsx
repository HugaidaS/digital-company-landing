import { Box, Container, Typography } from "@material-ui/core";
import { mainTheme } from "../../../App/Theme/mainTheme";

export const HomePage = () => {
  return (
    <section id="home">
      <Container maxWidth="md">
        <Typography variant="h2" align="center">
          <Box sx={{ mb: "3rem", fontWeight: "700" }}>
            Автоматизация документооборота и бизнес-процессов «под ключ»
          </Box>
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary">
          <Box sx={{ mb: "2rem" }}>
            Предлагаем полный комплекс услуг по автоматизации документооборота и
            бизнес-процессов: от подготовительных работ и до технической
            поддержки
          </Box>
        </Typography>
        <Typography variant="h5" align="center">
          <Box
            sx={{ color: mainTheme.palette.secondary.main, fontWeight: "700" }}
          >
            <Box sx={{ mb: "0.6rem" }}> sales@erker-it.ru </Box>
            <Box> +7 (861) 944-0585 </Box>
          </Box>
        </Typography>
      </Container>
    </section>
  );
};
