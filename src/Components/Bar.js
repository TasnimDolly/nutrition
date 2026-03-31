import { useState } from "react";
import logo from "../imgs/BarLogo.png";

// mui library Component
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// mui library Component

import { Link as RouterLink } from "react-router-dom";

// icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { colors } from "@mui/material";
// icons

export default function Bar() {
  const pages = [
    { name: "الرئيسية", path: "/" },
    { name: "باقات الإشتراك", path: "/" },
    { name: "الورشات", path: "/" },
    { name: "المنتجات", path: "/" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  const [anchorElNav, setAnchorElNav] = useState(false);

  const showNavMenu = () => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          // margin: "2.5% 2.5% 0 ",
          // borderRadius: "35px",
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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
                // fontFamily: "Almarai";
                size: "20px",
                width: 500,
              }}
            >
              {pages.map((page) => (
                <RouterLink
                  style={{ color: "#A0D7E2", textDecoration: "none" }}
                  to={page.path}
                >
                  <Button
                    key={page.name}
                    // onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "inherit",
                      display: "block",
                      "&:hover": { color: "text.hover" },
                    }}
                  >
                    {page.name}
                  </Button>
                </RouterLink>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                direction: "ltr",
              }}
            >
              <IconButton
                size="large"
                aria-label="search"
                color="inherit"
                sx={{ "&:hover": { color: "text.hover" } }}
              >
                <SearchIcon />
              </IconButton>
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
              <RouterLink
                to="/notifications"
                style={{ color: "inherit"}}
              >
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
            </Box>
            {/* large screens */}

            {/* small screems */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                direction: "ltr",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
                onClick={showNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={anchorElNav}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name}>
                    <Typography sx={{ textAlign: "center" }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* small screems */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
