import { useState } from "react";
import logo from "../imgs/BarLogo.png";

// mui library Component
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

import Popover from "@mui/material/Popover";
import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// mui library Component

import { Link as RouterLink } from "react-router-dom";

// icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
// icons

export default function Bar() {
  const pages = [
    { name: "الرئيسية", path: "/Home" },
    { name: "المواعيد و الحجز", path: "/Booking" },
    { name: "باقات الإشتراك", path: "/Packages" },
    { name: "الورشات", path: "/Workshops" },
    { name: "المنتجات", path: "/Products" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  //for popover
  const [anchorElPackages, setAnchorElPackages] = useState(null);
  const open = Boolean(anchorElPackages);
  const showPackagesMenu = (event) => {
    setAnchorElPackages(event.currentTarget);
  };

  const handleClosePackagesMenu = () => {
    setAnchorElPackages(null);
  };

  //for drawer
  const [opendrawer, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          width: "100%",
          backgroundColor: "secondary.main",
          color: "secondary.default",
        }}
      >
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            {/* large screens */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
              <img src={logo} alt="LOGO"></img>
            </Box>

            {/* pages  */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
              }}
            >
              {pages.map((page) =>
                page.name === "باقات الإشتراك" ? (
                  <>
                    <Button
                      key={page.name}
                      sx={{
                        my: 2,
                        color: "inherit",
                        display: "block",
                        "&:hover": { color: "text.hover" },
                        margin: "0 5px",
                        fontSize: { md: "17px", lg: "20px" },
                      }}
                      onClick={showPackagesMenu}
                    >
                      {page.name}
                    </Button>
                    <Popover
                      open={open}
                      anchorEl={anchorElPackages}
                      onClose={handleClosePackagesMenu}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    >
                      <RouterLink
                        style={{ color: "#06363D", textDecoration: "none" }}
                        to="/NutritionalPackages"
                      >
                        <MenuItem onClick={handleClosePackagesMenu}>
                          باقات استشارة تغذية
                        </MenuItem>
                      </RouterLink>
                      <RouterLink
                        style={{ color: "#06363D", textDecoration: "none" }}
                        to="/InjectionPackages"
                      >
                        <MenuItem onClick={handleClosePackagesMenu}>
                          باقات الحقونات
                        </MenuItem>
                      </RouterLink>
                      <RouterLink
                        style={{ color: "#06363D", textDecoration: "none" }}
                        to="/DevicePackages Packages"
                      >
                        <MenuItem onClick={handleClosePackagesMenu}>
                          باقات الاجهزة
                        </MenuItem>
                      </RouterLink>
                    </Popover>
                  </>
                ) : (
                  <RouterLink
                    style={{ color: "#A0D7E2", textDecoration: "none" }}
                    to={page.path}
                  >
                    <Button
                      key={page.name}
                      sx={{
                        my: 2,
                        color: "inherit",
                        display: "block",
                        "&:hover": { color: "text.hover" },
                        margin: "0 5px",
                        fontSize: { md: "17px", lg: "20px" },
                      }}
                    >
                      {page.name}
                    </Button>
                  </RouterLink>
                ),
              )}
            </Box>
            {/* pages  */}

            {/* icons  */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                direction: "ltr",
              }}
            >
              <RouterLink to="/createaccount" style={{ color: "inherit" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  sx={{ "&:hover": { color: "text.hover" } }}
                >
                  <AccountCircle />
                </IconButton>
              </RouterLink>
              <RouterLink to="/cart" style={{ color: "inherit" }}>
              <IconButton
                size="large"
                aria-label="shoppingcart"
                color="inherit"
                sx={{ "&:hover": { color: "text.hover" } }}
              >
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon fontSize="small" />
                </Badge>
                </IconButton>
                </RouterLink>
              <RouterLink to="/notifications" style={{ color: "inherit" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  sx={{ "&:hover": { color: "text.hover" } }}
                >
                  <Badge badgeContent={17} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </RouterLink>
              {/* icons  */}
            </Box>
            {/* large screens */}

            {/* small screems */}

            <Box
              sx={{
                display: { md: "none" },
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={opendrawer} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    width: 250,
                    backgroundColor: "secondary.main",
                    height: "100%",
                    padding: "20px 0",
                  }}
                  role="presentation"
                >
                  {pages.map((page) =>
                    page.name === "باقات الإشتراك" ? (
                      <>
                        <Button
                          key={page.name}
                          sx={{
                            my: 2,
                            color: "inherit",
                            display: "block",
                            "&:hover": { color: "text.hover" },
                            margin: "0 10px",
                            fontSize: { md: "17px", lg: "20px" },
                          }}
                        ></Button>
                        <Accordion
                          sx={{
                            width: "100%",
                            backgroundColor: "secondary.main",
                            boxShadow: "none",
                            color: "inherit",
                            margin:"-10px 0 0"
                          }}
                        >
                          <AccordionSummary
                            sx={{
                              fontSize: "20px",
                              color: "secondary.default",
                              fontFamily: "Almarai",
                            }}
                            expandIcon={
                              <ExpandMoreIcon onClick={toggleDrawer(true)} />
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            {page.name}
                          </AccordionSummary>
                          <AccordionDetails
                            sx={{
                              fontSize: "20px",
                              color: "secondary.default",
                              fontFamily: "Almarai",
                              padding: "0",
                            }}
                          >
                            {" "}
                            <RouterLink
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                              to="/NutritionalPackages"
                            >
                              <MenuItem onClick={toggleDrawer(true)}>
                                باقات استشارة تغذية
                              </MenuItem>
                            </RouterLink>
                            <RouterLink
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                              to="/InjectionPackages"
                            >
                              <MenuItem onClick={toggleDrawer(true)}>
                                باقات الحقونات
                              </MenuItem>
                            </RouterLink>
                            <RouterLink
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                              to="/DevicePackages Packages"
                            >
                              <MenuItem onClick={toggleDrawer(true)}>
                                باقات الاجهزة
                              </MenuItem>
                            </RouterLink>
                          </AccordionDetails>
                        </Accordion>
                      </>
                    ) : (
                      <RouterLink
                        style={{ color: "#A0D7E2", textDecoration: "none" }}
                        to={page.path}
                      >
                        <Button
                          key={page.name}
                          sx={{
                            my: 2,
                            color: "inherit",
                            display: "block",
                            "&:hover": { color: "text.hover" },
                            margin: "0px 10px",
                            fontSize: { md: "17px", lg: "20px" },
                          }}
                          onClick={toggleDrawer(false)}
                        >
                          {page.name}
                        </Button>
                      </RouterLink>
                    ),
                  )}
                </Box>
              </Drawer>
            </Box>

            {/* small screems */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
