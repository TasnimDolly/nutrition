import Nav from "./Nav";
import DashBar from "./DashBar";
import DashPagesTitle from "./DashPagesTitle";
import { Button, IconButton, Typography } from "@mui/material";
import { Box, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import NavLogo from "./imgs/NavLogo.png";

const days = [
  "السبت",
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
];

export default function Settings() {
  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content" sx={{ textAlign: "right" }}>
          <DashPagesTitle
            title="ملف العيادة"
            description="قم بتحديث معلومات العيادة والتفاصيل العامة التي يراها المرضى."
            notDisplayAddButton="none"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              backgroundColor: "rgb(255, 255, 255,40%)",
              padding: "0 30px",
              width: "90%",
              margin: "40px auto",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "0 30px",
                  margin: "40px 0",
                  borderRadius: "20px",
                  textAlign: "center",
                  width: "49%",
                }}
              >
                <Typography variant="h2" sx={{ color: "secondary.main" }}>
                  شعار العيادة
                </Typography>
                <img
                  src={NavLogo}
                  alt="logo"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "#d0ebe5",
                    margin: "0 auto",
                  }}
                />
                <IconButton
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "rgb(255, 255, 255,60%)",
                    marginRight: "35%",
                    marginTop: "-65px",
                  }}
                >
                  <CameraAltOutlinedIcon sx={{ color: "secondary.main" }} />
                </IconButton>
                <Typography variant="h5">
                  الحد الأقصى 2 ميجابايت. JPG أو PNG.
                </Typography>
                <Button
                  sx={{
                    border: "2px dashed #06363D",
                    padding: "10px 20px",
                    width: "fit-content",
                    margin: "0 auto",
                  }}
                >
                  رفع شعار جديد
                </Button>
              </Box>
              <Box sx={{ width: "49%" ,display:"flex", flexDirection:"column", gap:"20px"}}>
                <label
                  style={{
                    color: "#06363D",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  اسم العيادة
                </label>
                <input
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    height: "50px",
                    background: "transparent",
                    borderRadius: "5px",
                    borderWidth: "1px ",
                  }}
                />
                <label
                  style={{
                    color: "#06363D",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  البريد الإلكتروني
                </label>
                <input
                  className="settingsPageInput "
                  style={{
                    marginTop: "10px",
                    width: "100%",
                  }}
                />
                <label
                  style={{
                    color: "#06363D",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  رقم الهاتف
                </label>
                <input
                  className="settingsPageInput "
                  style={{
                    marginTop: "10px",
                    width: "100%",
                  }}
                />
              </Box>
            </Box>
            <hr
              style={{
                width: "95%",
                margin: "0px auto 30px",
              }}
            ></hr>
            <Typography
              variant="h4"
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <AccessTimeIcon sx={{ fontSize: "30px" }} />
              ساعات العمل الرسمية
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {days.map((day) => (
                <Box
                  key={day}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h2"
                    margin={0}
                    sx={{ color: "secondary.main" }}
                  >
                    {day}
                  </Typography>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="مفتوح"
                    name="radio-buttons-group"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <FormControlLabel
                      value="مفتوح"
                      control={<Radio />}
                      label="مفتوح"
                    />
                    <FormControlLabel
                      value="مغلق"
                      control={<Radio />}
                      label="مغلق"
                    />
                  </RadioGroup>
                  <Typography variant="h5">من</Typography>
                  <input
                    className="settingsPageInput "
                    style={{
                      width: "20%",
                    }}
                  />
                  <Typography variant="h5">إلى</Typography>
                  <input
                    className="settingsPageInput "
                    style={{
                      width: "20%",
                    }}
                  />
                </Box>
              ))}
            </Box>
            <hr
              style={{
                width: "95%",
                margin: "30px auto",
              }}
            ></hr>{" "}
            <Typography
              variant="h4"
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <VideocamOutlinedIcon sx={{ fontSize: "30px" }} />
              توافر الجلسات عبر الإنترنت
            </Typography>
            <Typography
              variant="h2"
              margin={0}
              sx={{ color: "secondary.main" }}
            >
              أيام العمل للجلسات عبر الإنترنت
            </Typography>
            <FormGroup
              sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
            >
              {days.map((day) => (
                <FormControlLabel control={<Checkbox />} label={day} />
              ))}
            </FormGroup>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h2"
                margin={0}
                sx={{ color: "secondary.main" }}
              >
                الفترة الصباحية
              </Typography>
              <FormControlLabel
                label="تفعيل"
                control={<Switch defaultChecked />}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" marginTop={1}>
                من
              </Typography>
              <input
                className="settingsPageInput "
                style={{
                  width: "40%",
                }}
              />
              <Typography variant="h5" marginTop={1}>
                إلى
              </Typography>
              <input
                className="settingsPageInput "
                style={{
                  width: "40%",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h2"
                margin={0}
                sx={{ color: "secondary.main" }}
              >
                الفترة المسائية
              </Typography>
              <FormControlLabel
                label="تفعيل"
                control={<Switch defaultChecked />}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" marginTop={1}>
                من
              </Typography>
              <input
                className="settingsPageInput "
                style={{
                  width: "40%",
                }}
              />
              <Typography variant="h5" marginTop={1}>
                إلى
              </Typography>
              <input
                className="settingsPageInput "
                style={{
                  width: "40%",
                }}
              />
            </Box>
            <hr
              style={{
                width: "95%",

                margin: "30px auto",
              }}
            ></hr>
            <Typography
              variant="h4"
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <MapOutlinedIcon sx={{ fontSize: "30px" }} />
              موقع العيادة
            </Typography>
            <Typography
              variant="h5"
              margin={0}
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <InfoOutlinedIcon sx={{ fontSize: "20px" }} />
              يمكنك الحصول على الإحداثيات من خرائط جوجل بالنقر مطولاً على
              العنوان المراد.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "2%",
              }}
            >
              <Box>
                <label
                  style={{
                    color: "#06363D",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  خط العرض (Latitude)
                </label>
                <input
                  className="settingsPageInput "
                  style={{ width: "100%", marginTop: "20px" }}
                />
              </Box>
              <Box>
                <label
                  style={{
                    color: "#06363D",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  خط الطول (Longitude)
                </label>
                <input
                  className="settingsPageInput "
                  style={{ width: "100%", marginTop: "20px" }}
                />
              </Box>
            </Box>
            <hr
              style={{
                width: "95%",
                margin: "30px auto",
              }}
            ></hr>
            <Box sx={{ alignSelf: "flex-end" }}>
              <Button variant="outlind" color="primary" sx={{ width: "100px" }}>
                الغاء
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "200px" }}
              >
                حفظ التغييرات
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
