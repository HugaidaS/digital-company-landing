import Carousel from "react-material-ui-carousel";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import toChunk from "../../../App/Utils/toChunk";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

function Item(props) {
  return (
    <Grid container spacing={2}>
      {props.chunk.map((item, i) => {
        return (
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Paper>
              <Box
                sx={{
                  height: "150px",
                  backgroundImage: `url(${item.url})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

const Customers = () => {
  var items = [
    {
      url: "./imgs/customers/rn-tyapse.png",
    },
    {
      url: "./imgs/customers/gazprom.jpg",
    },
    {
      url: "./imgs/customers/glt.png",
    },
    {
      url: "./imgs/customers/arnest.png",
    },
    {
      url: "./imgs/customers/mso-pan.jpg",
    },
    {
      url: "./imgs/customers/Radezh.jpg",
    },
    {
      url: "./imgs/customers/SKFNKC.jpg",
    },
    {
      url: "./imgs/customers/volma.jpg",
    },
    {
      url: "./imgs/customers/zgazprom-transgaz.jpg",
    },
  ];

  let chunkedItems = toChunk(items, 3);

  return (
    <Box
      sx={{
        height: "auto",
        minHeight: "50vh",
        display: "grid",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h5" align="center">
          <Box sx={{ fontWeight: "500", margin: "1rem" }}>Наши заказчики</Box>
          <Typography variant="caption" align="center" color="textSecondary">
            <Box
              sx={{
                fontSize: "15px",
                margin: "1rem",
              }}
            >
              Компания “Эркер” на рынке уже более 10 лет и успешно решает
              проблемы как крупного, так и малого бизнеса
            </Box>
          </Typography>
        </Typography>
        <Carousel
          animation="fade"
          duration={1000}
          cycleNavigation={true}
          fullHeightHover={true}
          navButtonsAlwaysInvisible={true}
          IndicatorIcon={<HorizontalRuleIcon />}
          indicatorIconButtonProps={{
            style: {
              height: "20px",
              width: "20px",
              margin: "0 5px",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "darkblue",
            },
          }}
        >
          {chunkedItems.map((chunk) => {
            return <Item chunk={chunk} />;
          })}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Customers;
