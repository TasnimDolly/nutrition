import Nav from "./Nav";
import DashBar from "./DashBar";
import { Button, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, Toolbar } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const exmMassages = [
  {
    id: 1,
    time: " 12:30 PM",
    name: "د. خالد المنصور",
    email: "dr.khaled@example.com",
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
    email: "dr.khaled@example.com",
    subject: "استفسار عن الحجز",
    date: "2024-06-12",
    state: "unread",
    content:
      "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن إمكانية حجز موعد معكم في الأسبوع المقبل. هل لديكم أي مواعيد متاحة؟ شكراً جزيلاً.",
  },
  {
    id: 3,
    time: " 12:30 PM",
    email: "dr.khaled@example.com",
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
    email: "dr.khaled@example.com",
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
    email: "dr.khaled@example.com",
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
    email: "dr.khaled@example.com",
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
    email: "dr.khaled@example.com",
    subject: "استفسار عن الحجز",
    date: "2024-06-12",
    content:
      "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن إمكانية حجز موعد معكم في الأسبوع المقبل. هل لديكم أي مواعيد متاحة؟ شكراً جزيلاً.",
    time: " 12:30 PM",
  },
];

export default function DashContact() {
  const [messages, setMessages] = useState(exmMassages);
  const [selectedMessage, setSelectedMessage] = useState(false);

  const handleClick = (m) => {
    const updated = messages.map((msg) =>
      msg.id === m.id ? { ...msg, state: "read" } : msg,
    );
    setMessages(updated);
    setSelectedMessage(m);
  };

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
            minHeight: "calc(100vh - 110px)",
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
              {messages.map((m) => (
                <ListItemButton key={m.id} onClick={() => handleClick(m)}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        width: "fit-content",
                        fontSize: "18px",
                      },
                    }}
                    primary={
                      <Box
                        key={m.id}
                        sx={{
                          width: "94%",
                          height: "100px",
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
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="h3"
                            sx={{
                              color:
                                m.state === "unread"
                                  ? "text.primary"
                                  : "text.secondary",
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            {m.state === "unread" ? (
                              <CircleIcon
                                sx={{ color: "green", fontSize: "10px" }}
                              />
                            ) : null}
                            {m.name}
                          </Typography>
                          <Typography variant="h5">{m.time}</Typography>
                        </Box>
                        <Typography variant="h5">{m.email}</Typography>
                        <Typography
                          variant="h3"
                          sx={{
                            color:
                              m.state === "unread"
                                ? "text.primary"
                                : "text.secondary",
                          }}
                        >
                          {m.subject}
                        </Typography>
                        <Typography variant="h5" sx={{ textAlign: "justify" }}>
                          {m.content}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
          <Box
            sx={{
              marginLeft: "400px",
              height: "100%",
            }}
          >
            {/* عرض تفاصيل الرسالة أو رسالة افتراضية إذا لم يتم اختيار أي رسالة */}
            {!selectedMessage ? (
              // رسالة افتراضية عند عدم اختيار أي رسالة
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
                  تفاصيل الرسالة
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "20px",
                  }}
                >
                  اختر رسالة من القائمة الجانبية لعرض تفاصيلها والرد على
                  استفسارات زوار موقع العيادة الاكتروني
                </Typography>
              </Box>
            ) : (
              //عرض تفاصيل الرسالة المحددة
              <Box>
                <Typography variant="h4" sx={{ mt: 2, padding: 3 }}>
                  {selectedMessage.subject}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingInlineStart: 3,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    {selectedMessage.name}
                    <br></br>
                    {selectedMessage.email}
                  </Typography>
                  <Typography variant="h5">{selectedMessage.time}</Typography>
                </Box>
                <Typography variant="h5" sx={{ mt: 3, padding: 3 }}>
                  {selectedMessage.content}
                </Typography>
                <Stack>
                  <Typography
                    sx={{
                      fontSize: 28,
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                    color="text.dark"
                  >
                    الرد على هذه الرسالة
                  </Typography>
                  <Typography variant="h5">
                    سيتم إرسال ردك مباشرة إلى البريد الإلكتروني الشخصي للمرسل
                    عبر نظامنا الآمن.
                  </Typography>
                  <TextField
                    fullWidth
                    className="textfield"
                    value={selectedMessage.email}
                    InputProps={{
                      readOnly: true,}}
                    slotProps={{
                      htmlInput: {
                        sx: {
                          "&::placeholder": { fontSize: 20 },
                        },
                      },
                    }}
                    sx={{
                      "& ": { marginTop: "41px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "text.primary",
                      },
                      "& .MuiInputBase-input": { fontSize: "19px" },
                    }}
                    variant="filled"
                  />
                  <TextField
                    fullWidth
                    className="textfield"
                    value={selectedMessage.subject}
                    InputProps={{
                      readOnly: true,}} 
                    slotProps={{
                      htmlInput: {
                        sx: {
                          "&::placeholder": { fontSize: 20 },
                        },
                      },
                    }}
                    sx={{
                      "& ": { marginTop: "41px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "text.primary",
                      },
                      "& .MuiInputBase-input": { fontSize: "19px" },
                    }}
                    variant="filled"
                  />
                  <TextField
                    fullWidth
                    className="textfield"
                    placeholder="رسالتك"
                    label="الرسالة"
                    slotProps={{
                      htmlInput: {
                        sx: {
                          "&::placeholder": { fontSize: 20 },
                        },
                      },
                    }}
                    sx={{
                      "& ": { marginTop: "41px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "text.primary",
                      },
                      "& .MuiInputBase-input": { fontSize: "19px" },
                    }}
                    variant="filled"
                  />
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    margin: 1,
                    justifyContent: "flex-end",
                  }}
                >
                  <Button variant="contained" sx={{ mt: 3 }}>
                    إرسال الرد
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={() => setSelectedMessage(null)}
                  >
                    رجوع
                  </Button>
                </Box>
              </Box>
            )}
          </Box>

          {/* عرض تفاصيل الرسالة أو رسالة افتراضية إذا لم يتم اختيار أي رسالة */}
        </Box>
      </Box>
    </>
  );
}
