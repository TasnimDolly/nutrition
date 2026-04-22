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
    plan: "متابعة التثبيت",
    status: "متوقف (مريض)",
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
                <TableCell className="table-body-cell">{row.plan}</TableCell>
                <TableCell className="table-body-cell">{row.status}</TableCell>
                <TableCell className="table-body-cell">
                  <IconButton
                    onClick={() =>
                      setOpenRow(openRow === row.id ? null : row.id)
                    }
                  >
                    {openRow === row.id ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                                    <IconButton onClick={() => setOpenEditPackage(true)}>
                    <EditNoteIcon />
                  </IconButton>
                  <IconButton onClick={() => setOpenDeleteDialog(true)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )}
          />
        </Box>
      </Box>
    </>
  );
}
