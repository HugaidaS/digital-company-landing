import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import toChunk from "../../../App/Utils/toChunk";

function Item(props) {
  return (
    <Grid container spacing={2}>
      {props.chunk.map((item, i) => {
        return (
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Paper>
              <Box sx={{ height: "150px" }}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </Box>
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
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #1",
      description: "Hello World!",
    },
    {
      name: "Random Name #1",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
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
