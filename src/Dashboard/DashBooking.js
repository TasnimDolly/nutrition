import Nav from "./Nav";
import DashBar from "./DashBar";
import DashPagesTitle from "./DashPagesTitle";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import DashHomePg from "./imgs/DashHomePg.png";
import DashTable from "./DashTable.js";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

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
          <DashTable
            columns={BookingColumns}
            rows={BookingRows}
            renderRow={(row) => (
              <TableRow className="table-body" key={row.id}>
                <TableCell className="table-body-cell" >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 ,justifyContent:'center'}}>
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
                  {row.date} / {row.time}
                </TableCell>
                <TableCell className="table-body-cell">{row.type}</TableCell>
                <TableCell className="table-body-cell">{row.status}</TableCell>
                <TableCell className="table-body-cell"><Button>{row.actions}</Button></TableCell>
              </TableRow>
            )}
          />
        </Box>
      </Box>
    </>
  );
}
