import "./App.css";
import "leaflet/dist/leaflet.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Components/Home";
import Test1 from "../src/Components/Test1.js";
import Test2 from "../src/Components/Test2.js";
import Test3 from "../src/Components/Test3.js";
import ForgetPassword from "../src/Components/ForgetPassword.js";
import ResetPassword from "../src/Components/ResetPassword.js";
import Login from "../src/Components/Login.js";
import Contact from "../src/Components/Contact.js";
import CreateAccount from "../src/Components/CreateAccount.js";
import Profile from "../src/Components/Profile.js";
import Notifications from "./Components/Notifications.js";
import DietsPackages from "./Components/DietsPackages.js";
import TreatmentPackages from "./Components/TreatmentPackages.js";
import Products from "./Components/Products.js";
import Cart from "./Components/Cart.js";
import Workshops from "./Components/Workshops.js";
import Booking from "./Components/Booking.js";
import DashHome from "./Dashboard/DashHome.js";
import OTP from "./Components/OTP.js";
import DashPackages from "./Dashboard/DashPackages.js";
import DashProducts from "./Dashboard/DashProducts.js";
import DashBooking from "./Dashboard/DashBooking.js";
import DashPatients from "./Dashboard/DashPatients.js";
import DashContact from "./Dashboard/DashContact.js";
import Settings from "./Dashboard/Settings.js";
import DashNotifications from "./Dashboard/DashNotifications.js";
import DashPayments from "./Dashboard/DashPayments.js";
import DashWorkshops from "./Dashboard/DashWorkshops.js";

import DashPosts from "./Dashboard/DashPosts.js";
function App() {
  return (
    <div className="App" style={{ direction: "rtl" }}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* just now  */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/Home" element={<Home />} />

          {/* just for nom  */}
          <Route path="/" element={<DashHome />} />
          <Route path="/dash-notifications" element={<DashNotifications />} />
          <Route path="/dash-Payments" element={<DashPayments />} />
          <Route path="/managePackages" element={<DashPackages />} />
          <Route path="/manage-products" element={<DashProducts />} />
          <Route path="/manage-appointments" element={<DashBooking />} />
          <Route path="/manage-patients" element={<DashPatients />} />
          <Route path='/manage-workshops' element={<DashWorkshops />} />
          <Route path="/manage-contact" element={<DashContact />} />
          <Route path="/settings" element={<Settings />} />
          {/* just for nom  */}

          <Route path="/manage-posts" element={<DashPosts />} />
          {/* just for nom  */}

          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
          <Route path="/DietsPackages" element={<DietsPackages />} />
          <Route path="/TreatmentPackages" element={<TreatmentPackages />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Workshops" element={<Workshops />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/otp" element={<OTP />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
