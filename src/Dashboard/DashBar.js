import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Paper from "@mui/material/Paper";

export default function DashBar() {
  return (
    <AppBar
      color="bg"
      sx={{
        backgroundColor: "white",
        position: "sticky",
        left: "0px",
        top: "0px",
        boxShadow: "0px 3px 15px 0px #00000040",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: "40px",
            width: 400,
            backgroundColor: "rgb(160, 215, 226,40%)",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <SearchIcon sx={{ p: "10px" }} />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="بحث عن مريض , موعد ..."
          />
        </Paper>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          sx={{
            justifySelf: "flex-end",
            color: "secondary.default",
          }}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
