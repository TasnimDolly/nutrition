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
import { IconButton } from "@mui/material";
import DeleteDialog from "./DeleteDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import { DialogTitle } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Dialog, Divider } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Grid from "@mui/material/Grid";
import PatientProfile from "./PatientProfile.js";
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
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openShowProfile, setOpenShowProfile] = useState(false);

  const handleConfirm = () => {
    setOpenDeleteDialog(false);
    setOpenAddDialog(false);
    setOpenShowProfile(false);
  };

  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <DashPagesTitle
            title="إدارة المواعيد"
            description="قم بإدارة جدولك اليومي وتنبيهات المرضى"
            addButtonLebal=" +
            إضافة موعد جديد "
            onAddButtonClick={() => setOpenAddDialog(true)}
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => setOpenShowProfile(true)}
                    >
                      عرض ملف المريض
                    </Button>
                    <IconButton
                      sx={{ color: "rgb(230, 82, 82)" }}
                      onClick={() => setOpenDeleteDialog(true)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
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
              width: "87%",
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
          <DeleteDialog
            open={openDeleteDialog}
            onClose={() => setOpenDeleteDialog(false)}
            content="هل انت متأكد من حذف هذه الموعد؟ لا يمكن التراجع عن هذا الإجراء."
            title="حذف الموعد؟"
            icon={
              <DeleteIcon
                sx={{
                  fontSize: 50,
                  borderRadius: "50%",
                  padding: "10px",
                  color: "red",
                  background: "#fe9494",
                }}
              />
            }
            onConfirm={handleConfirm}
          />
          <Dialog
            PaperProps={{ sx: { background: "#FFFFFF", padding: "10px" } }}
            open={openAddDialog}
            onClose={() => setOpenAddDialog(false)}
            fullWidth
            maxWidth="sm"
            dir="rtl"
          >
            <DialogTitle>
              <Typography variant="h4">"إضافة موعد"</Typography>
              <Typography variant="caption">
                املأ المعلومات التالية لإضافة موعد جديد
              </Typography>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <Grid container spacing={0.2} sx={{ marginTop: 0 }}>
                <Grid item size={12}>
                  <TextField
                    className="textfield"
                    label=" الاسم الكامل"
                    fullWidth
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused":
                        {
                          width: "100%",
                        },
                      "& .MuiOutlinedInput-root": {
                        width: "100%",
                      },
                      "& .Mui-focused fieldset": {
                        "& .MuiInputLabel-root.Mui-focused": {
                          marginTop: "0px",
                        },
                        "&.MuiOutlinedInput-notchedOutline legend": {
                          textAlign: "right",
                        },
                      },
                    }}
                  />
                </Grid>
                <Box sx={{ display: "flex", gap: 4 }}>
                  <Grid item size={6} sx={{}}>
                    <TextField
                      className="textfield"
                      label=" التاريخ"
                      fullWidth
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused":
                          {
                            width: "100%",
                          },
                        "& .MuiOutlinedInput-root": { width: "100%" },
                        "& .Mui-focused fieldset": {
                          "&.MuiOutlinedInput-notchedOutline legend": {
                            textAlign: "right",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item size={6}>
                    <TextField
                      className="textfield"
                      label=" الوقت"
                      fullWidth
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused":
                          {
                            width: "100%",
                          },
                        "& .MuiOutlinedInput-root": { width: "100%" },
                        "& .Mui-focused fieldset": {
                          "& .MuiInputLabel-root.Mui-focused": {
                            marginTop: "0px",
                          },
                          "&.MuiOutlinedInput-notchedOutline legend": {
                            textAlign: "right",
                          },
                        },
                      }}
                    />
                  </Grid>
                </Box>
                <Grid item size={12} sx={{}}>
                  <Typography variant="h6" sx={{ margin: 1 }}>
                    التصنيف
                  </Typography>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="حضوري"
                    name="radio-buttons-group"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      margin: 1,
                    }}
                  >
                    <FormControlLabel
                      value="حضوري"
                      control={<Radio />}
                      label="حضوري"
                    />
                    <FormControlLabel
                      value="عبر الانترنت"
                      control={<Radio />}
                      label="عبر الانترنت"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Typography variant="h2" sx={{ marginTop: 5 }}></Typography>
            </DialogContent>
            <DialogActions>
              <Button
                sx={{}}
                onClick={() => {
                  handleConfirm();
                }}
                variant="contained"
              >
                إضافة موعد
              </Button>
              <Button onClick={handleConfirm} color="inherit">
                الغاء الامر
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
      <PatientProfile
        openShowProfile={openShowProfile}
        onClose={() => setOpenShowProfile(false)}
        handleConfirm={handleConfirm}
      />
    </>
  );
}
