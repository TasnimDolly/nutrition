import Nav from "./Nav";
import DashBar from "./DashBar";
import DashPagesTitle from "./DashPagesTitle";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import DashHomePg from "./imgs/DashHomePg.png";
import DashTable from "./DashTable.js";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import { TextField, Stack, InputAdornment } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";

const BookingColumns = [
  { id: 1, label: "اسم المريض" },
  { id: 2, label: "خطة التغذية" },
  { id: 3, label: "الحالة" },
  { id: 4, label: "الإجراءات" },
];

const BookingRows = [
  {
    id: 1,
    img: (
      <img src={DashHomePg} alt="profile-photo" className="patient-photo"></img>
    ),
    name: "سارة أحمد",
    email: "sara@example.com",
    plan: "خطة كيتو - الأسبوع 4",
    status: "متوقف (طبيب)",
  },
  {
    id: 2,
    img: (
      <img src={DashHomePg} alt="profile-photo" className="patient-photo"></img>
    ),
    name: "محمد علي",
    email: "mohamed@example.com",
    plan: "رفع خطة جديدة",
    status: "نشط",
  },
  {
    id: 3,
    img: (
      <img src={DashHomePg} alt="profile-photo" className="patient-photo"></img>
    ),
    name: "سارة أحمد",
    email: "sara@example.com",
    plan: "خطة الصيام المتقطع2",
    status: "متوقف (مريض)",
  },
  {
    id: 4,
    img: (
      <img src={DashHomePg} alt="profile-photo" className="patient-photo"></img>
    ),
    name: "سارة أحمد",
    email: "sara@example.com",
    plan: "متابعة التثبيت",
    status: "نشط",
  },
];

export default function DashPatients() {
  const [openEditPackage, setOpenEditPackage] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const handleConfirm = () => {
    setOpenDeleteDialog(false);
  };
  const [openRow, setOpenRow] = useState(null);
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <DashPagesTitle
            title="إدارة المرضى"
            description="قم بإدارة ملفات المرضى وبياناتهم"
            addButtonLebal="إضافة مريض جديد"
          ></DashPagesTitle>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            width="95%"
            margin="20px auto"
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
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button
              // variant={activeFilter == "type" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("type");
              // }}
              >
                نشط
              </Button>
              <Button
              // variant={activeFilter == "quantity" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("quantity");
              // }}
              >
                متوقف (طبيب)
              </Button>
              <Button
              // variant={activeFilter == "price" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("price");
              // }}
              >
                متوقف (مريض)
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
                  {row.plan === "رفع خطة جديدة" ? (
                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#777",
                        justifyContent: "center",
                        border: "3px dashed #777",
                        padding: "10px",
                        margin: "auto",
                      }}
                    >
                      <AddCircleOutlineOutlinedIcon />
                      {row.plan}
                    </Button>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        justifyContent: "center",
                      }}
                    >
                      <PictureAsPdfIcon />
                      {row.plan}
                    </Box>
                  )}
                </TableCell>
                <TableCell className="table-body-cell">
                  {row.status === "متوقف (طبيب)" ? (
                    <Typography
                      variant="h2"
                      sx={{
                        color: "info.main",
                        backgroundColor: "rgb(6, 54, 61,20%)",
                        borderRadius: "50px",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      <CircleIcon sx={{ fontSize: "13px" }} /> {row.status}
                    </Typography>
                  ) : row.status === "نشط" ? (
                    <Typography
                      variant="h2"
                      sx={{
                        color: "success.main",
                        backgroundColor: "rgb(10, 150, 10,20%)",
                        borderRadius: "50px",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      <CircleIcon sx={{ fontSize: "13px" }} /> {row.status}
                    </Typography>
                  ) : (
                    <Typography
                      variant="h2"
                      sx={{
                        color: "error.main",
                        backgroundColor: "rgb(200, 10, 10,20%)",
                        borderRadius: "50px",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      <CircleIcon sx={{ fontSize: "13px" }} /> {row.status}
                    </Typography>
                  )}
                </TableCell>
                <TableCell className="table-body-cell">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      alignContent: "center",
                    }}
                  >
                    <Button variant="contained">عرض ملف المريض</Button>
                    <IconButton>
                      <EditNoteIcon />
                    </IconButton>
                    <IconButton sx={{ color: "rgb(230, 82, 82)" }}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          />
          <Box
            sx={{
              margin: "40px auto 10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "95%",
              padding: "40px",
              backgroundColor: "secondary.main",
              borderRadius: "20px",
              color: "white",
              gap: 4,
            }}
          >
            <Typography variant="h4" color="white">
              مركز رفع الخطط الغذائية الذكي
            </Typography>
            <Typography variant="h2">
              - قم بإدخال بريد المريض الالكتروني ورفع ملف PDF لتحديث الخطة
              الغذائية الخاصة بمرضاك بسهولة
            </Typography>
            <TextField
              fullWidth
              className="textfield"
              placeholder="ادخل بريدك الالكتروني"
              label="البريد الالكتروني"
              slotProps={{
                htmlInput: {
                  sx: {
                    "&::placeholder": { fontSize: 20, color: "white" },
                  },
                },
              }}
              sx={{
                "& ": {
                  marginTop: "0px",
                  backgroundColor: "rgb(255, 255, 255,20%)",
                  borderRadius: "10px",
                  border: "1px solid rgb(255, 255, 255,50%)",
                  color: "white",
                },
              }}
              variant="filled"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  gap: "10px",
                  padding: "10px 20px",
                  backgroundColor: "white",
                  color: "secondary.main",
                  borderRadius: "10px",
                }}
              >
                <PictureAsPdfIcon sx={{ color: "secondary.main" }} />
                رفع الخطة الغذائية (PDF)
              </Button>
              <Typography
                variant="h5"
                color="white"
                mt={2}
                sx={{ fontSize: 14 }}
              >
                بصيغة PDF فقط الحد الأقصى للملف: 10 ميجابايت
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
