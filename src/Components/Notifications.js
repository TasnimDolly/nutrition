import Bar from "./Bar";
import Foot from "./Foot";
import NotificationsAlert from "./NotificationsAlert";

// mui library Component
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
// mui library Component

const data = [
  {
    id: 1,
    status: true,
    title: "تم شراء منتج بنجاح (لانش بوكس)",
    info: "تمت معالجة الدفع وتأكيد رمز عملية الدفع بنجاح",
    time: "منذ 5 دقائق",
  },
  {
    id: 2,
    status: true,
    title: "تم باقة إلى سلّتك (باقات السعادة)",
    info: "تمت معالجة الدفع وتأكيد رمز عملية الدفع بنجاح",
    time: "منذ 15 دقيقة",
  },
  {
    id: 3,
    status: false,
    title: "تذكير : موعد جلستك الإستشارية سيبدأ خلال 15 دقيقة",
    info: "يرجى تسجيل الدخول في قائمة  الإنتظار",
    time: "اليوم الساعة 11 صباحاً",
  },
  {
    id: 4,
    status: true,
    title: "تم تأكيد حجز موعدك ليوم الثلاثاء الساعة 10:00 صباحاً",
    info: "سيتم إرسال تذكير بموعدك قبل 24 ساعة",
    time: "أمس",
  },
];

export default function Notifications() {
  return (
    <>
      <Bar />
      <Box sx={{ margin: "20px 30px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">الإشعارات</Typography>
          <Button
            sx={{
              backgroundColor: "text.skyblue",
              color: "text.lightwhite",
              padding: "10px 15px",
              borderRadius: "4px",
            }}
          >
            تحديد الكل كمقروء
          </Button>
        </Box>
        <FormControl
          sx={{
            m: 1,
            width: "100ch",
            direction: "ltr",
          }}
          variant="outlined"
        >
          <OutlinedInput
            id="بحث في الإشعارات"
            type="text"
            sx={{
              "& filedset": { direction: "rtl" },
              "& .MuiOutlinedInput-notchedOutline": {
                direction: "rtl",
              },
              "& .MuiOutlinedInput-notchedOutline legend": {
                textAlign: "right",
                marginRight: "50px",
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="بحث في الإشعارات">
                  <SearchIcon></SearchIcon>
                </IconButton>
              </InputAdornment>
            }
            label="بحث في الإشعارات"
          />
          <InputLabel
            htmlFor="بحث في الإشعارات "
            sx={{ left: "auto", right: "80px", transformOrigin: "top right" }}
          >
            بحث في الإشعارات
          </InputLabel>
        </FormControl>
        {data.map((alart) => (
          <NotificationsAlert
            status={alart.status}
            title={alart.title}
            info={alart.info}
            time={alart.time}
          ></NotificationsAlert>
        ))}
      </Box>
      <Foot />
    </>
  );
}
