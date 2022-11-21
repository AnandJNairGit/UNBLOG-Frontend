import { AcUnit } from "@mui/icons-material";
import { AppBar, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <Photo */}
          <AcUnit></AcUnit>
          <Typography variant="h6">UNBLOG</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color={"primary"}>
              Welcome To Unblog !
            </Typography>
            <Typography variant="h5" align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              doloribus reiciendis, laborum aspernatur a optio iste ab
              architecto harum, cupiditate numquam ut sint facilis maiores
              necessitatibus aliquam nobis voluptatum cum nulla, dicta aperiam
              nemo esse! Modi non neque inventore incidunt qui accusantium
              obcaecati expedita cupiditate officia, quisquam aspernatur fugiat
              corporis.
            </Typography>
            <div>
              <Grid container spacing={2} jus>

              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
