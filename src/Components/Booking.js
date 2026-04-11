import Bar from "./Bar.js";
import Foot from "./Foot.js";
import Box from "@mui/material/Box";
import AppointmentsBox from "./AppointmentsBox.js";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import syriatelcash from "../imgs/Syriatelcash.png";
import dayjs from "dayjs";
//Calendar
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
//
import Divider from "@mui/material/Divider";
import PayDialog from "./PayDialog";
import Button from "@mui/material/Button";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { Alert } from "@mui/material";
export default function Booking() {
  const [AppointmentTime, setAppointmentTime] = useState("");
  const [AppointmentDate, setAppointmentDate] = useState(null);
  function handleAppointmentTime(time) {
    setAppointmentTime(time);
    // console.log(time);
  }
  function handleclickOnlyOne() {
    setAppointmentTime("");
  }
  const [open, setOpen] = useState(false);
  const [payAlert, setPayAlert] = useState(false);
  const handleConfirm = () => {
    setOpen(false);
    setPayAlert(true);
  };

  return (
    <div className="bookingpage">
      <Bar />
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ padding: "20px", margin: "20px" }}
        >
          <Typography variant="h4" sx={{ textAlign: "right" }}>
            حجز المواعيد
            <Typography variant="h2" sx={{ marginTop: 5, color: "#0D6F73" }}>
              احجز الموعد المناسب لزيارتك القادمة واطلع على سياسات العيادة{" "}
            </Typography>
          </Typography>
        </Stack>
      </Box>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ padding: "20px", margin: "20px" }}
      >
        <Grid item size={{md: 8, xs: 12}} className="booking-grid">
          <Stack>
            <Box display="flex" alignItems="center">
              <QueryBuilderIcon />
              <Typography
                variant="h2"
                sx={{ marginRight: "10px", textAlign: "right" }}
              >
                اختيار التاريخ
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            >
              <LocalizationProvider
                adapterLocale="ar"
                dateAdapter={AdapterDayjs}
              >
                <DateCalendar
                  onChange={(Date) => {
                    setAppointmentDate(Date);
                  }}
                  sx={{
                    width: "100%",
                    margin: 0,
                    "& .MuiPickerDay-root": {
                      width: "100%",
                      margin: "2px",
                      fontSize: "25px",
                    },
                  }}
                  minDate={dayjs().startOf("month")}
                  maxDate={dayjs().endOf("year")}
                />
              </LocalizationProvider>
            </Box>

            <Box display="flex" alignItems="center">
              <EventAvailableIcon />
              <Typography
                variant="h2"
                sx={{ marginRight: "10px", textAlign: "right" }}
              >
                اختيار المواعيد
              </Typography>
            </Box>

            <Box
              sx={{
                boxShadow: "2px 0px 4px 4px #00000040",
                backgroundColor: "#DCECF0",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                margin: "10px",
              }}
            >
              <Grid container spacing={2}>
                <AppointmentsBox
                  handleTime={handleAppointmentTime}
                  AppointmentTime={AppointmentTime}
                />
              </Grid>
            </Box>
          </Stack>
        </Grid>

        <Grid
          sx={{
            "@media (min-width:900px) and (max-width:1200px)": {
              flexBasis: "100%",
            },
          }}
          item
          className="cart-grid"
          size={{ md: 4, xs: 12 }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              borderRadius: "20px",
              padding: "20px 20px",
              background: "#E0EDE9D4",
              margin: 0,
              boxShadow: "4px 5px 5px 0px #00000040",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="h2" sx={{ textAlign: "center" }}>
                ادخل رقم عملية الدفع لتاكيد الحجز{" "}
              </Typography>
              <Box
                justifyContent="space-around"
                margin="10px"
                display="flex"
                alignItems="center"
              >
                <Typography variant="h4" textAlign="right">
                  التاريخ المختار
                </Typography>
                <Typography variant="h4">
                  {" "}
                  {AppointmentDate ? AppointmentDate.format("YYYY-M-D") : null}
                </Typography>
              </Box>
              <Box
                justifyContent="space-around"
                margin="10px"
                display="flex"
                alignItems="center"
              >
                <Typography variant="h4">الوقت المختار</Typography>
                <Typography variant="h4" sx={{ marginRight: 2 }}>
                  {AppointmentTime}
                </Typography>
              </Box>
              <Divider />

              <Typography variant="h5" sx={{ margin: "30px" }}>
                {" "}
                يرجى دفع مبلغ جزئي لتامين الحجز علما ان المبلغ 20 الف ليرة
                سورية{" "}
              </Typography>
              <Button
                sx={{
                  width: "100%",
                  marginTop: "20px",
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
                color={"primary"}
                variant="contained"
                onClick={() => setOpen(true)}
              >
                تاكيد الحجز{" "}
              </Button>
              <PayDialog
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={handleConfirm}
                title="ادخل رقم الدفع"
                content="ادخل الرقم الذي استلمته للتو!"
              />
              <Snackbar
                open={payAlert}
                onClose={() => {
                  setPayAlert(false);
                }}
                autoHideDuration={6000}
              >
                {/* there is here an alert for error message too! */}
                <Alert
                  sx={{ fontSize: "1.5rem" }}
                  severity="success"
                  variant="filled"
                >
                  تم الدفع بنجاح
                </Alert>
              </Snackbar>
              <img src={syriatelcash} />
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Foot />
    </div>
  );
}
