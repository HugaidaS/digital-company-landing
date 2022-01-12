import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";

export const Feature = ({
  showOptions,
  key,
  title,
  description,
  delay,
  image,
}) => {
  return (
    <Grow in={showOptions} timeout={delay}>
      <Grid item key={key} xs={12} md={6} lg={3}>
        <Paper
          key={1}
          elevation={3}
          sx={{ height: "500px", padding: "1rem", boxSizing: "border-box" }}
        >
          <Grid container direction="row" alignItems="center">
            <Box sx={{ marginRight: "1rem" }}>
              <Grid item xs={2}>
                <Avatar alt={title} src={image} variant="square" />
              </Grid>
            </Box>
            <Grid item xs={9}>
              <Typography>
                <Box sx={{ fontWeight: "700" }}>{title}</Box>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ height: "90%", overflow: "auto" }}>
            <List component="div" disablePadding>
              {description.map((string) => {
                return (
                  <Box sx={{ fontSize: "15px", marginTop: "10px" }}>
                    <ListItem>&bull; {string}</ListItem>
                  </Box>
                );
              })}
            </List>
          </Box>
        </Paper>
      </Grid>
    </Grow>
  );
};
