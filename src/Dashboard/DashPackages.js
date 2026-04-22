import Nav from "./Nav";
import DashBar from "./DashBar";
import DashPagesTitle from "./DashPagesTitle.js";
import {
  TextField,
  Box,
  Typography,
  Stack,
  Card,
  Button,
  InputAdornment,
  Container,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import DashTable from "./DashTable.js";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Collapse } from "@mui/material";
import TimelineAccordion from "./TimelineAccordion";
import DeleteDialog from "./DeleteDialog";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EditDialog from "./EditDialog.js";
import DisplayPackagePatients from "./DisplayPackagePatients.js";

export default function DashPackages() {
  const [openEditPackage, setOpenEditPackage] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openPatients, setOpenPatients] = useState(false);

  const handleConfirm = () => {
    setOpenDeleteDialog(false);
    setOpenPatients(false);
  };

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  const data = [
    { value: 5, label: "A" },
    { value: 10, label: "B" },
    { value: 15, label: "C" },
    { value: 20, label: "D" },
  ];

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));
  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  const pcolumns = [
    { id: 1, label: "اسم الباقة" },
    { id: 2, label: "السعر" },
    { id: 3, label: "المدة" },
    { id: 4, label: "الحالة" },
    { id: 5, label: "الإجراءات" },
  ];

  const prows = [
    {
      id: 1,
      name: "باقة الجمال والدلال",
      price: 100,
      duration: "شهرين",
      status: "نشطة",
    },
    {
      id: 2,
      name: "باقة الجمال والدلال",
      price: 100,
      duration: "شهرين",
      status: "نشطة",
    },
    {
      id: 3,
      name: "باقة الجمال والدلال",
      price: 100,
      duration: "شهرين",
      status: "نشطة",
    },
    {
      id: 4,
      name: "باقة الجمال والدلال",
      price: 100,
      duration: "شهرين",
      status: "نشطة",
    },
  ];

  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <Container>
            <DashPagesTitle
              title="
          لوحة تحكم الباقات"
              description="
          قم بادارة خطط الإشتراك و المميزات و الأسعار من هنا"
              addButtonLebal="
        إضافة باقة جديدة"
              onAddButtonClick={() => setOpenCreateDialog(true)}
            />

            <Stack
              sx={{ background: "linear-gradient(to right, #f4f4f4, #DCEECF)" }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
              marginTop={3}
            >
              <Stack direction="column" gap={2} borderRadius={2}>
                <Typography variant="h6" padding={1} textAlign="center">
                  الباقات الاكثر مبيعا{" "}
                </Typography>

                <Card className="card">
                  <Typography variant="h2" sx={{ margin: "10px" }}>
                    الباقة الاكثر مبيعا للشهر السابق هي باقة الشباب
                  </Typography>

                  <CardContent>
                    <Typography>
                      نسبة المبيع هي 60% من اجمالي الباقات المباعة
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="card">
                  <Typography variant="h2" sx={{ margin: "10px" }}>
                    الباقة التي انخفض فيها الاشتراك خلال الفترة السابقة{" "}
                  </Typography>
                  <CardContent>
                    <Typography>
                      باقة السعادة وانخفض فيها الاشتراك بنسبة 20%
                    </Typography>
                  </CardContent>
                </Card>
                <Button
                  onClick={() => setOpenCreateDialog(true)}
                  variant="contained"
                  color="primary"
                  sx={{ margin: "10px" }}
                >
                  اضافة باقة جديدة{" "}
                </Button>
              </Stack>
              <Box sx={{ width: "500px", height: "400px", borderRadius: 9 }}>
                <PieChart series={[{ data, innerRadius: 80 }]}>
                  <PieCenterLabel>احصائيات الباقات </PieCenterLabel>
                </PieChart>
              </Box>
            </Stack>
            <Container
              sx={{
                background: "linear-gradient(to right, #f4f4f4, #DCEECF)",
                borderRadius: 3,
                marginTop: 5,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
                mb="100px"
              >
                <TextField
                  className="textfield"
                  label="بحث عن اسم الباقة"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          {" "}
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
                      width: "300px",
                    },
                  }}
                />
                {/* <Button variant="contained" color="primary"  >
                    بحث                           </Button> */}
                <Box display="flex" gap={1} marginTop={{ xs: 10 }}>
                  <Button
                    variant={activeFilter == "type" ? "contained" : "outlined"}
                    onClick={(e) => {
                      setActiveFilter("type");
                    }}
                  >
                    حميات صحية
                  </Button>
                  <Button
                    variant={
                      activeFilter == "quantity" ? "contained" : "outlined"
                    }
                    onClick={(e) => {
                      setActiveFilter("quantity");
                    }}
                  >
                    اجراءات علاجية
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
              <DashTable
                columns={pcolumns}
                rows={prows}
                renderRow={(row) => (
                  <TableRow className="table-body" key={row.id}>
                    <TableCell className="table-body-cell">
                      {row.name}
                    </TableCell>
                    <TableCell className="table-body-cell">
                      {row.price}
                    </TableCell>
                    <TableCell className="table-body-cell">
                      {row.duration}
                    </TableCell>
                    <TableCell className="table-body-cell">
                      {row.status}
                    </TableCell>
                    <TableCell className="table-body-cell">
                      <Button
                        variant="contained"
                        onClick={() => setOpenPatients(true)}
                      >
                        عرض المشتركين
                      </Button>
                      <IconButton
                        sx={{ margin: "0px 40px" }}
                        onClick={() => setOpenEditPackage(true)}
                      >
                        <EditNoteIcon />
                      </IconButton>
                      <IconButton
                        sx={{ color: "rgb(230, 82, 82)" }}
                        onClick={() => setOpenDeleteDialog(true)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )}
              />
              <DeleteDialog
                open={openDeleteDialog}
                onClose={() => setOpenDeleteDialog(false)}
                content="هل انت متأكد من حذف هذه الباقة؟ لا يمكن التراجع عن هذا الإجراء."
                title="حذف الباقة؟"
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
              <DisplayPackagePatients
                open={openPatients}
                onClose={() => setOpenPatients(false)}
                onConfirm={handleConfirm}
              />
              <EditDialog
                title="اضافة باقة جديدة "
                caption="اادخل تفاصيل باقتك الجديدة"
                confirm="انشاء باقة"
                open={openCreateDialog}
                onClose={() => setOpenCreateDialog(false)}
                onConfirm={handleConfirm}
              />
              <EditDialog
                open={openEditPackage}
                onClose={() => setOpenEditPackage(false)}
                onConfirm={handleConfirm}
                title="تعديل تفاصيل الباقة "
                caption="تحديث معلومات الباقة"
                confirm="حفظ التغييرات"
              />
            </Container>
          </Container>
        </Box>
      </Box>
    </>
  );
}
