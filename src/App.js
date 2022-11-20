import { AcUnit } from "@mui/icons-material";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import "./App.css";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <Photo */}
          <AcUnit></AcUnit>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
