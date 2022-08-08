import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <Container fixed>
      <Grid container spacing={{ xs: 1, md: 3 }}>
        <Grid
          item
          xs={12}
          md={6}
          container
          justify="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Box sx={{}}>
            <Typography variant="h3" component="h1">
              Meet the ALL-New
            </Typography>
            <Typography variant="h3" component="h1" sx={{ paddingTop: "1rem" }}>
              MediCare.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ paddingTop: "1rem" }}
            >
              Let's kickstart the journey towards an better YOU.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{}}>
              Consult your doctor anytime & anywhere
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "black" }}
            >
              Chat with us
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Hero.png?auto=format"
              alt=""
              className="img"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
