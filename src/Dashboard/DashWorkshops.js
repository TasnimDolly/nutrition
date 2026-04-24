import { Box, Stack } from "@mui/material";
import Nav from "./Nav";
import DashBar from "./DashBar";
import DashPagesTitle from "./DashPagesTitle";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import PayDialog from "../Components/PayDialog";
// import PostPopup from "./PostPopup";
import Grid from "@mui/material/Grid";
// import Bar from "./Bar";
// import Foot from "./Foot";
import LocationPinIcon from "@mui/icons-material/LocationPin";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// imgs
import img1 from "../imgs/postimg.png";
import eventimg1 from "../imgs/salamimg.jpg";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
export default function DashWorkshops() {
  const [openEventForm, setOpenEventForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const handleConfirm = () => {
    setOpenEventForm(false);
  };
  const eventsarr = [
    {
      title: "ورشة تطبيقات التغذية العلاجية ",
      id: 1,
      img: img1,
      overview: `
         ورشة عملية تقدّم أساسيات التغذية العلاجية وكيفية تطبيقها على الحالات الصحية بطريقة مبسّطة وواضحة.
          `,
      time: "الساعة العاشرة صباحا ",
      date: "15-4-2026",
      place: "حضورية",

      status: "opened",
    },
    {
      title: "ورشة تطبيقات التغذية العلاجية ",
      id: 2,
      img: img1,
      overview: `
         ورشة عملية تقدّم أساسيات التغذية العلاجية وكيفية تطبيقها على الحالات الصحية بطريقة مبسّطة وواضحة.
          `,
      time: "الساعة العاشرة صباحا ",
      date: "15-4-2026",
      place: "الورشةاونلاين عبر غوغل ميت",
      status: "closed",
    },
  ];
  let events = eventsarr.map((event) => {
    return (
      <Grid container>
        <Grid item size={10} spacing={2} key={event.id}>
          <Card className={event.status == "opened" ? "card" : "closed"}>
            <Typography variant="h2" sx={{ margin: "10px" }}>
              {event.title}
            </Typography>
            <CardMedia component="img" height="300" image={eventimg1} />
            <CardContent>
              <Typography
                variant="h2"
                sx={{ margin: "20px", lineHeight: "50px" }}
              >
                {event.overview}
              </Typography>
              <Stack direction="row" sx={{ margin: "5px" }}>
                <LocationPinIcon sx={{ marginLeft: "10px" }} />
                <Typography>{event.place}</Typography>
              </Stack>
              <Stack direction="row" sx={{ margin: "5px" }}>
                <EventAvailableIcon sx={{ marginLeft: "10px" }} />
                <Typography>{event.date} </Typography>
              </Stack>
              <Stack direction="row" sx={{ margin: "5px" }}>
                <QueryBuilderIcon sx={{ marginLeft: "10px" }} />
                <Typography>{event.time} </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  });
  const [openCreateDialog, setOpenCreateDialog] = useState(false);

  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <DashPagesTitle
            title="
   ادارة الورش التدريبية"
            description="
ادارة ومتابعة الورش التدريبية الحالية"
            addButtonLebal="+ 
 إضافة ورشة جديدة "
            onAddButtonClick={() => setOpenCreateDialog(true)}
          />
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Typography marginTop="50px" textAlign="right" variant="h4">
              الورش الحالية
            </Typography>
            <Box display="flex" gap={1} marginTop={{ xs: 10 }}>
              <Button
                variant={activeFilter == "type" ? "contained" : "outlined"}
                onClick={(e) => {
                  setActiveFilter("type");
                }}
              >
                اونلاين
              </Button>
              <Button
                variant={activeFilter == "quantity" ? "contained" : "outlined"}
                onClick={(e) => {
                  setActiveFilter("quantity");
                }}
              >
                حضورية{" "}
              </Button>
              <Button
                variant={activeFilter == "price" ? "contained" : "outlined"}
                onClick={(e) => {
                  setActiveFilter("price");
                }}
              >
                الكل
              </Button>
            </Box>
          </Stack>
          <Stack direction="row" marginTop="30px">
            {events}
          </Stack>
          <Box>
            <Typography variant="h4">انشاء ورشة عمل جديدة</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
