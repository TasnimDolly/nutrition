import "./App.css";
import "leaflet/dist/leaflet.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Components/Home";
import ForgetPassword from "../src/Components/ForgetPassword.js";
import ResetPassword from "../src/Components/ResetPassword.js";
import Login from "../src/Components/Login.js";
import Contact from "../src/Components/Contact.js";
import CreateAccount from "../src/Components/CreateAccount.js";
import Notifications from "./Components/Notifications.js";
import NutritionalPackages from "./Components/NutritionalPackages.js";
import DevicePackages from "./Components/DevicePackages.js";
import InjectionPackages from "./Components/InjectionPackages.js";
import Products from "./Components/Products.js";
import Cart from "./Components/Cart.js";
import Workshops from "./Components/Workshops.js";
function App() {
  return (
    <div className="App" style={{ direction: "rtl" }}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* just now  */}
          {/* <Route path="/" element={<ResetPassword />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/r" element={<ResetPassword />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/NutritionalPackages"
            element={<NutritionalPackages />}
          />
          <Route path="/DevicePackages Packages" element={<DevicePackages />} />
          <Route path="/InjectionPackages" element={<InjectionPackages />} />
          <Route path="/Products" element={<Products />} />
          {/* //for hanooooon  */} {/* ولك كبييييرة */}
          {/*يا ويلكممممممممممممممممممممممممم كم حنون عنا */}
          {/* <Route path="/Products" element={<Products/>} /> */}
          <Route path="/cart" element={<Cart />} />

          <Route path="/Workshops" element={<Workshops/>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
