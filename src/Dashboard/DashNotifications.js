import Nav from "./Nav.js";
import DashBar from "./DashBar.js";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import DashPagesTitle from "./DashPagesTitle.js";
import NotificationsAlert from "../Components/NotificationsAlert.js";

const data = [
  {
    id: 1,
    status: true,
    title: "رسالة جديدة من مريض",
    info: "وصلت استفسارات جديدة من السيدة سارة بخصوص نتائج التحاليل المخبرية الأخيرة.",
    time: "اليوم، 10:30 صباحاً",
    type: "message",
  },
  {
    id: 2,
    status: true,
    title: "موعد جديد محجوز",
    info: "قام المريض أحمد محمد بحجز موعد جديد لاستشارة عامة يوم الخميس القادم الساعة 10:00 صباحاً.",
    time: "منذ 15 دقيقة",
    type: "appointment",
  },
  {
    id: 3,
    status: false,
    title: "مخزون منخفض: أوميغا 3",
    info: 'لقد وصل مخزون "أوميغا 3 - عالي التركيز" إلى الحد الأدنى (5 علب متبقية). يرجى إعادة الطلب قريباً.',
    time: "أمس، 04:15 مساءً",
    type: "stock",
  },
  {
    id: 4,
    status: true,
    title: "تم استلام دفعة مالية",
    info: "تمت تسوية الفاتورة رقم #INV-4592 بمبلغ 450 ريال سعودي من قبل المريض خالد العتيبي.",
    time: "أمس، 09:00 صباحاً",
    type: "payment",
  },
];

export default function DashNotifications() {
  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <DashPagesTitle
            title="مركز الإشعارات"
            description="ابقَ على اطلاع بأحدث التحديثات والنشاطات في عيادتك"
            addButtonLebal="تحديد الكل كمقروء"
          />
          <Box sx={{ margin: "20px 0", display: "flex", gap: "20px" }}>
            <Button
              variant="contained"
              // variant={activeFilter == "type" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("type");
              // }}
            >
              الكل
            </Button>
            <Button
            // variant={activeFilter == "quantity" ? "contained" : "outlined"}
            // onClick={(e) => {
            //   setActiveFilter("quantity");
            // }}
            >
              المواعيد
            </Button>
            <Button
            // variant={activeFilter == "price" ? "contained" : "outlined"}
            // onClick={(e) => {
            //   setActiveFilter("price");
            // }}
            >
              الرسائل
            </Button>
            <Button
            // variant={activeFilter == "price" ? "contained" : "outlined"}
            // onClick={(e) => {
            //   setActiveFilter("price");
            // }}
            >
              المخزون
            </Button>
            <Button
            // variant={activeFilter == "price" ? "contained" : "outlined"}
            // onClick={(e) => {
            //   setActiveFilter("price");
            // }}
            >
              المدفوعات
            </Button>
          </Box>
          {data.map((alart) => (
            <NotificationsAlert
              status={alart.status}
              title={alart.title}
              info={alart.info}
              time={alart.time}
            ></NotificationsAlert>
          ))}
        </Box>
      </Box>
    </>
  );
}
