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
import DietsPackages from "./Components/DietsPackages.js";
import TreatmentPackages from "./Components/TreatmentPackages.js";
import Products from "./Components/Products.js";
import Cart from "./Components/Cart.js";
import Workshops from "./Components/Workshops.js";
import Booking from './Components/Booking.js'
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
            path="/DietsPackages"
            element={<DietsPackages />}
          />
          <Route path="/TreatmentPackages Packages" element={<TreatmentPackages />} />
          <Route path="/Products" element={<Products />} />
          {/* //for hanooooon  */} {/* ولك كبييييرة */}
          {/*يا ويلكممممممممممممممممممممممممم كم حنون عنا */}
          {/* <Route path="/Products" element={<Products/>} /> */}
          <Route path="/cart" element={<Cart />} />

          <Route path="/Workshops" element={<Workshops/>} />
          <Route path="/Booking" element={<Booking/>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
