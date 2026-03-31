import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Components/Home";
import ForgetPassword from "../src/Components/ForgetPassword.js";
import ResetPassword from "../src/Components/ResetPassword.js";
import Login from "../src/Components/Login.js";
import Contact from "../src/Components/Contact.js";
import CreateAccount from "../src/Components/CreateAccount.js";

function App() {
  return (
    <div className="App" style={{ direction: "rtl" }}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          {/* just now  */}

          {/* <Route path="/" element={<ResetPassword />} /> */}
          <Route path="/contact" element={<Contact />} />
                <Route path='/' element={<Home/>}/>
                <Route path='/r' element={<ResetPassword/>}/>
                <Route path='/createaccount' element={<CreateAccount/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
