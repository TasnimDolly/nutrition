import Nav from "./Nav";
import DashBar from "./DashBar";
import DashPagesTitle from "./DashPagesTitle";
import { Button, IconButton, Typography } from "@mui/material";
import { Box, TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, Toolbar } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Badge from "@mui/material/Badge";

const massages = [
  {
    id: 1,
    time: " 12:30 PM",
    name: "د. خالد المنصور",
    subject: "استفسار عن الحجز",
    date: "2024-06-12",
    state: "unread",
    content:
      "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن إمكانية حجز موعد معكم في الأسبوع المقبل. هل لديكم أي مواعيد متاحة؟ شكراً جزيلاً.",
  },
  {
    id: 2,
    time: " 12:30 PM",
    name: "د. خالد المنصور",
    subject: "استفسار عن الحجز",
    date: "2024-06-12",
    state: "unread",
    content:
      "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن إمكانية حجز موعد معكم في الأسبوع المقبل. هل لديكم أي مواعيد متاحة؟ شكراً جزيلاً.",
  },
  {
    id: 3,
    time: " 12:30 PM",
    name: "د. خالد المنصور",
    subject: "استفسار عن الحجز",
    date: "2024-06-12",
    state: "unread",
    content:
      "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن إمكانية حجز موعد معكم في الأسبوع المقبل. هل لديكم أي مواعيد متاحة؟ شكراً جزيلاً.",
  },
  {
    id: 4,
    state: "read",
    name: "د. خالد المنصور",
    subject: "استفسار عن الحجز",
    date: "2024-06-12",
    content:
      "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن إمكانية حجز موعد معكم في الأسبوع المقبل. هل لديكم أي مواعيد متاحة؟ شكراً جزيلاً.",
    time: " 12:30 PM",
  },
  {
    id: 5,
    state: "read",
    name: "د. خالد المنصور",
    subject: "استفسار عن الحجز",
    date: "2024-06-12",
    content:
      "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن إمكانية حجز موعد معكم في الأسبوع المقبل. هل لديكم أي مواعيد متاحة؟ شكراً جزيلاً.",
    time: " 12:30 PM",
  },
  {
    id: 6,
    state: "read",
    name: "د. خالد المنصور",
    subject: "استفسار عن الحجز",
    date: "2024-06-12",
    content:
      "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن إمكانية حجز موعد معكم في الأسبوع المقبل. هل لديكم أي مواعيد متاحة؟ شكراً جزيلاً.",
    time: " 12:30 PM",
  },
  {
    id: 7,
    state: "read",
    name: "د. خالد المنصور",
    subject: "استفسار عن الحجز",
    date: "2024-06-12",
    content:
      "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن إمكانية حجز موعد معكم في الأسبوع المقبل. هل لديكم أي مواعيد متاحة؟ شكراً جزيلاً.",
    time: " 12:30 PM",
  },
];

const massagesBox = massages.map((m) => (
  <Box
    key={m.id}
    sx={{
      width: "94%",
      height: "80px",
      padding: "10px",
      display: "flex",
      alignItems: "right",
      flexDirection: "column",
      borderBottom: "1px solid #ccc",
      gap: 0.5,
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        variant="h3"
        sx={{
          color: m.state === "unread" ? "text.primary" : "text.secondary",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {m.state === "unread" ? (
          <CircleIcon sx={{ color: "green", fontSize: "10px" }} />
        ) : null}
        {m.name}
      </Typography>
      <Typography variant="h5">{m.time}</Typography>
    </Box>
    <Typography
      variant="h3"
      sx={{
        color: m.state === "unread" ? "text.primary" : "text.secondary",
      }}
    >
      {m.subject}
    </Typography>
    <Typography variant="h5" sx={{ textAlign: "justify" }}>
      {m.content}
    </Typography>
  </Box>
));

export default function DashContact() {
  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box
          className="Dash-content"
          sx={{
            textAlign: "right",
            position: "relative",
            height: "calc(100vh - 110px)",
          }}
        >
          <Drawer
            variant="permanent"
            anchor="left"
            PaperProps={{
              sx: {
                height: "100%",
                width: "400px",
                position: "absolute",
              },
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "text.skyblue",
                }}
              >
                صندوق الوارد
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  backgroundColor: "text.primary",
                  padding: "10px",
                  borderRadius: "50px",
                }}
              >
                3 رسائل جديدة
              </Typography>
            </Toolbar>
            <Box sx={{ display: "flex", gap: "20px", margin: "0 10px -10px" }}>
              <Button
                variant="contained"
                // variant={activeFilter == "price" ? "contained" : "outlined"}
                // onClick={(e) => {
                //   setActiveFilter("price");
                // }}
              >
                الكل
              </Button>
              <Button
              // variant={activeFilter == "price" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("price");
              // }}
              >
                غير المقروء
              </Button>
            </Box>
            <List>
              <ListItemText
                sx={{
                  "& .MuiTypography-root": {
                    width: "fit-content",
                    fontSize: "20px",
                  },
                }}
                primary={massagesBox}
              />
            </List>
          </Drawer>
          <Box
            sx={{
              marginLeft: "400px",
              height: "100%",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 3,
                width: "400px",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "100px",
              }}
            >
              <Badge
                badgeContent={"+"}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "text.skyblue",
                    color: "white",
                    fontSize: "40px",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    bottom: "20px",
                    right: "20px",
                  },
                }}
              >
                <QuestionAnswerIcon
                  sx={{
                    fontSize: "100px",
                    color: "text.skyblue",
                    backgroundColor: "rgb(255, 255, 255,40%)",
                    padding: "30px",
                    borderRadius: "50%",
                  }}
                />
              </Badge>
              <Typography
                sx={{
                  color: "secondary.main",

                  fontSize: "50px",
                  fontWeight: 600,
                  marginTop: "10px",
                }}
              >
                ابدأ المحادثة
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "20px",
                }}
              >
                اختر رسالة من القائمة الجانبية لعرض تفاصيلها والرد على استفسارات
                زوار موقع العيادة الاكتروني
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
