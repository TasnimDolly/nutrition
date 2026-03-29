import "./App.css";
import {  ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Bar from "./Bar";
import Home from "./Home";
import Foot from "./Foot";

function App() {
  return (
    <div className="App" style={{ direction: "rtl" }}>
      <ThemeProvider theme={theme}>
        <Bar></Bar>
        <Home></Home>
        {/* <div style={{ height: "1500px" }}></div> */}
        <Foot></Foot>
      </ThemeProvider>
    </div>
  );
}
export default App;
