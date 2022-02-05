import { Box, Typography } from "@mui/material";
import { mainTheme } from "../../../App/Theme/mainTheme";

export const FooterComponent = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: mainTheme.palette.primary.main,
        minHeight: "50px",
        padding: "12px",
      }}
    >
      <Box sx={{ padding: "5px" }}>
        <Typography color="default.main">@{currentYear} ООО "Эркер"</Typography>
      </Box>
      <Box sx={{ padding: "5px" }}>
        <Typography color="default.main">
          Thanks to{" "}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://www.pexels.com/ru-ru/"
            rel="noreferrer"
          >
            Pexels
          </a>
          ,<a href="https://www.vecteezy.com/free-vector/modern"> Vecteezy</a>
        </Typography>
      </Box>
    </footer>
  );
};
