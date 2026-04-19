import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Drawer, Toolbar, Typography } from "@mui/material";

//icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StyleIcon from "@mui/icons-material/Style";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import NavLogo from "./imgs/NavLogo.png";

const pages = [
  "الرئيسية",
  "إدارة المرضى",
  "إدارة المواعيد",
  "إدارة الباقات",
  "إدارة المنتجات",
  "إدارة الورشات",
  "إدارة المحتوى التثقيفي",
  "التواصل",
  "الإعدادات",
  "تسجيل الخروج",
];
const pagesicons = [
  <HomeIcon />,
  <PersonIcon />,
  <CalendarMonthIcon />,
  <StyleIcon />,
  <ShoppingBagIcon />,
  <CastForEducationIcon />,
  <LibraryBooksIcon />,
  <EmailIcon />,
  <SettingsIcon />,
  <LogoutIcon />,
];

export default function Nav() {
  return (
    <>
      <Drawer variant="permanent" anchor="right">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={NavLogo}
            alt="logo"
            style={{ width: "80px", height: "80px" }}
          />
          <Typography
            variant="h4"
            sx={{
              color: "text.skyblue",
            }}
          >
            عافية وسلام
          </Typography>
        </Toolbar>
        <List
          sx={{
            width: 260,
          }}
        >
          {pages.map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                marginTop: index === pages.length - 2 ? "80px" : 0,
              }}
            >
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                  "&:hover .Nav-icon": {
                    color: "white",
                  },
                  "&:hover .MuiTypography-root": {
                    color: "white",
                  },
                }}
              >
                <ListItemIcon
                  className="Nav-icon"
                  sx={{
                    color: "primary.main",
                  }}
                >
                  {pagesicons[index]}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      color: "text.primary",
                      width: "fit-content",
                      fontSize: "20px",
                    },
                  }}
                  primary={text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
