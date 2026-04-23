import Nav from "./Nav";
import DashBar from "./DashBar";
import DashPagesTitle from "./DashPagesTitle";
import { Button, Typography } from "@mui/material";
import { Box, TextField, Stack, InputAdornment } from "@mui/material";
import DashHomePg from "./imgs/DashHomePg.png";
import DashTable from "./DashTable.js";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EmailIcon from "@mui/icons-material/Email";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useState } from "react";

const BookingColumns = [
  { id: 1, label: "اسم المريض" },
  { id: 2, label: "التاريخ والوقت" },
  { id: 3, label: "النوع" },
  { id: 4, label: "الحالة" },
  { id: 5, label: "الإجراءات" },
];

const BookingRows = [
  {
    id: 1,
    img: (
      <img src={DashHomePg} alt="profile-photo" className="patient-photo"></img>
    ),
    name: "سارة أحمد",
    email: "sara@example.com",
    date: "15 أكتوبر 2023",
    time: "10:00 AM",
    type: "عبر الإنترنت",
    status: "مكتمل",
    actions: "رؤية ملف المريض",
  },
  {
    id: 2,
    img: (
      <img src={DashHomePg} alt="profile-photo" className="patient-photo"></img>
    ),
    name: "محمد علي",
    email: "mohamed@example.com",
    date: "16 أكتوبر 2023",
    time: "11:00 AM",
    type: "حضوري",
    status: "قادم",
    actions: "رؤية ملف المريض",
  },
  {
    id: 3,
    img: (
      <img src={DashHomePg} alt="profile-photo" className="patient-photo"></img>
    ),
    name: "سارة أحمد",
    email: "sara@example.com",
    date: "15 أكتوبر 2023",
    time: "10:00 AM",
    type: "عبر الإنترنت",
    status: "ملغى",
    actions: "رؤية ملف المريض",
  },
  {
    id: 2,
    img: (
      <img src={DashHomePg} alt="profile-photo" className="patient-photo"></img>
    ),
    name: "محمد علي",
    email: "mohamed@example.com",
    date: "16 أكتوبر 2023",
    time: "11:00 AM",
    type: "حضوري",
    status: "قادم",
    actions: "رؤية ملف المريض",
  },
];

export default function DashBooking() {
  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <DashPagesTitle
            title="إدارة المواعيد"
            description="قم بإدارة جدولك اليومي وتنبيهات المرضى"
            addButtonLebal="إضافة موعد جديد"
          ></DashPagesTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "20px auto 0",
              gap: "3%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "43%",
                padding: "20px",
                backgroundColor: "rgb(255, 255, 255,40%)",
                borderRadius: "20px",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <EmailIcon
                  sx={{
                    color: "secondary.main",
                    backgroundColor: "rgb(6, 54, 61,20%)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                />
                <Typography variant="h4">تنبيهات البريد التلقائية</Typography>
              </Box>
              <Typography variant="h5" color="secondary.main">
                التنبيه قبل (ساعة)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                <input
                  style={{
                    width: "300px",
                    height: "55px",
                    background: "transparent",
                    borderRadius: "5px",
                    borderWidth: "1px",
                  }}
                ></input>
                <Button variant="contained">حفظ الإعدادات</Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "43%",
                padding: "20px",
                backgroundColor: "rgb(255, 255, 255,40%)",
                borderRadius: "20px",
                gap: 3.5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <InfoOutlinedIcon
                  sx={{
                    color: "secondary.main",
                    backgroundColor: "rgb(6, 54, 61,20%)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                />
                <Typography variant="h4">نظام التنبيه الآلي</Typography>
              </Box>
              <Typography variant="h5" sx={{ fontSize: "18px", width: "100%" }}>
                سيتم إرسال إشعار تلقائي للمرضى عبر البريد الإلكتروني لتذكيرهم
                بموعدهم بناءً على المدة المحددة. كما سيتم إخطار المريض فوراً عند
                إضافة موعد جديد أو إلغاء موعد قائم لضمان دقة التواصل.
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            width="95%"
            margin="0px auto"
            mb="10px"
          >
            <TextField
              className="textfield"
              label="بحث عن اسم المريض"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ fontSize: 30 }} />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
              sx={{
                "& .Mui-focused fieldset": {
                  "& .MuiInputLabel-root.Mui-focused": { marginTop: "0px" },
                  "&.MuiOutlinedInput-notchedOutline legend": {
                    textAlign: "right",
                  },
                  width: "310px",
                },
              }}
            />
            <input
              type="time"
              style={{
                width: "150px",
                height: "60px",
                background: "transparent",
                borderRadius: "5px",
                borderWidth: "1px",
                padding: "0 10px",
              }}
            ></input>
            <Box sx={{ gap: "10px" }}>
              <Button
              // variant={activeFilter == "type" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("type");
              // }}
              >
                حضوري
              </Button>
              <Button
              // variant={activeFilter == "quantity" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("quantity");
              // }}
              >
                عبر الانترنت
              </Button>
              <Button
                variant="contained"
                // variant={activeFilter == "price" ? "contained" : "outlined"}
                // onClick={(e) => {
                //   setActiveFilter("price");
                // }}
              >
                الكل
              </Button>
            </Box>
            <Box sx={{ gap: "10px" }}>
              <Button
              // variant={activeFilter == "type" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("type");
              // }}
              >
                قادم
              </Button>
              <Button
              // variant={activeFilter == "quantity" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("quantity");
              // }}
              >
                مكتمل
              </Button>
              <Button
              // variant={activeFilter == "price" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("price");
              // }}
              >
                ملغي
              </Button>
              <Button
                variant="contained"
                // variant={activeFilter == "price" ? "contained" : "outlined"}
                // onClick={(e) => {
                //   setActiveFilter("price");
                // }}
              >
                الكل
              </Button>
            </Box>
          </Stack>

          <DashTable
            columns={BookingColumns}
            rows={BookingRows}
            renderRow={(row) => (
              <TableRow className="table-body" key={row.id}>
                <TableCell className="table-body-cell">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      justifyContent: "center",
                    }}
                  >
                    {row.img}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h2">{row.name}</Typography>
                      <Typography variant="h2">{row.email}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell className="table-body-cell">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Typography variant="h2">{row.date}</Typography>
                    <Typography variant="h2">{row.time}</Typography>
                  </Box>
                </TableCell>
                <TableCell className="table-body-cell">
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    {row.type === "حضوري" ? (
                      <PersonIcon />
                    ) : (
                      <VideocamOutlinedIcon />
                    )}
                    {row.type}
                  </Box>
                </TableCell>
                <TableCell className="table-body-cell">
                  {row.status === "قادم" ? (
                    <Typography
                      variant="h2"
                      sx={{
                        color: "info.main",
                        backgroundColor: "rgb(6, 54, 61,20%)",
                        borderRadius: "50px",
                        padding: "10px",
                      }}
                    >
                      {row.status}
                    </Typography>
                  ) : row.status === "مكتمل" ? (
                    <Typography
                      variant="h2"
                      sx={{
                        color: "success.main",
                        backgroundColor: "rgb(10, 150, 10,20%)",
                        borderRadius: "50px",
                        padding: "10px",
                      }}
                    >
                      {row.status}
                    </Typography>
                  ) : (
                    <Typography
                      variant="h2"
                      sx={{
                        color: "error.main",
                        backgroundColor: "rgb(200, 10, 10,20%)",
                        borderRadius: "50px",
                        padding: "10px",
                      }}
                    >
                      {row.status}
                    </Typography>
                  )}
                </TableCell>
                <TableCell className="table-body-cell">
                  <Button variant="contained">{row.actions}</Button>
                </TableCell>
              </TableRow>
            )}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "90%",
              margin: "20px auto",
              padding: "50px",
              backgroundColor: "rgb(255, 255, 255,40%)",
              borderRadius: "20px",
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <TextSnippetIcon
                sx={{
                  color: "secondary.main",
                  backgroundColor: "rgb(6, 54, 61,20%)",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              />
              <Typography variant="h4">ملاحظات الجلسة</Typography>
            </Box>
            <Typography variant="h2" color="secondary.main">
              ايميل المريض
            </Typography>
            <TextField
              fullWidth
              className="textfield"
              placeholder="ادخل بريدك الالكتروني"
              label="البريد الالكتروني"
              slotProps={{
                htmlInput: {
                  sx: {
                    "&::placeholder": { fontSize: 20 },
                  },
                },
              }}
              sx={{
                "& ": { marginTop: "0px" },
              }}
              variant="filled"
            />

            <Typography variant="h2" color="secondary.main">
              أضف تفاصيل الجلسة أو الملاحظات الطبية هنا...
            </Typography>
            <TextField
              fullWidth
              className="textfield"
              placeholder="ادخل الموضوع هنا "
              label="الموضوع"
              slotProps={{
                htmlInput: {
                  sx: {
                    "&::placeholder": { fontSize: 20 },
                  },
                },
              }}
              sx={{
                "& ": { marginTop: "0px" },
              }}
              variant="filled"
            />
            <Button
              variant="contained"
              aria-label="ارسال الملاحظات"
              sx={{ alignSelf: "flex-end" }}
            >
              ارسال الملاحظات
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
