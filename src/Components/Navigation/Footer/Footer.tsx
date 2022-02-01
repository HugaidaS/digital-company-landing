import { Box, Typography } from "@mui/material";

export const FooterComponent = () => {
  let currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        minHeight: "100px",
        padding: "12px",
      }}
    >
      <footer>
        <Box sx={{ width: "fit-content" }}>
          <Box sx={{ padding: "5px" }}>
            <Typography color="default.main">
              Icons by{" "}
              <a target="_blank" href="https://icons8.com" rel="noreferrer">
                Icons8
              </a>{" "}
            </Typography>
          </Box>
          <Box sx={{ padding: "5px" }}>
            <Typography color="default.main">
              <a target="_blank" href="http://www.freepik.com" rel="noreferrer">
                Designed by Freepik
              </a>{" "}
              &{" "}
              <a
                target="_blank"
                href="https://www.pexels.com/ru-ru/"
                rel="noreferrer"
              >
                Pexels
              </a>
            </Typography>
          </Box>
          <Box sx={{ padding: "5px" }}>
            <Typography color="default.main">
              <a href="https://www.vecteezy.com/free-vector/modern">
                Modern Vectors by Vecteezy
              </a>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "fit-content" }}>
          <Box sx={{ padding: "5px" }}>
            <Typography color="default.main">
              Краснодарский край, г. Кореновск, Янтарный пер., д. 4, 2
            </Typography>
          </Box>
          <Box sx={{ padding: "5px" }}>
            <Typography color="default.main">
              ИНН: 2335010780, КПП: 233501001
            </Typography>
          </Box>
          <Box sx={{ padding: "5px" }}>
            <Typography color="default.main">
              @{currentYear} ООО "Эркер"
            </Typography>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};
