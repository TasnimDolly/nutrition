import Nav from "./Nav.js";
import DashBar from "./DashBar.js";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import DashPagesTitle from "./DashPagesTitle.js";
import DashStatisticsCard from "./DashStatisticsCard.js";
import PaymentsIcon from "@mui/icons-material/Payments";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import { TextField, Stack, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DashTable from "./DashTable.js";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Typography } from "@mui/material";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { DialogTitle } from "@mui/material";
import { Dialog, Divider } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { useState } from "react";

const data = [
  {
    id: 1,
    item: "اوزان",
    quantity: 2,
    price: "150$",
  },
  {
    id: 2,
    item: "بروتين بار",
    quantity: 1,
    price: "100$",
  },
  { id: 3, item: "ميزان", quantity: 3, price: "50$" },
];

const PaymentsColumns = [
  { id: 1, label: "اسم المشتري" },
  { id: 2, label: "رقم الايصال" },
  { id: 3, label: "المبلغ الإجمالي" },
  { id: 4, label: "العنوان" },
  { id: 5, label: "رقم الهاتف" },
  { id: 6, label: "الحالة" },
  { id: 7, label: "الإجراءات" },
];

const PaymentsRows = [
  {
    id: 1,
    name: "سارة أحمد",
    invoice: "#INV-4592",
    address: "الرياض، السعودية",
    phone: "0501234567",
    total: "450$",
    status: "مؤكد",
  },
  {
    id: 2,
    name: "محمد علي",
    invoice: "#INV-4592",
    address: "الرياض، السعودية",
    phone: "0501234567",
    total: "450$",
    status: "مرفوض",
  },

  {
    id: 3,
    name: "سارة أحمد",
    invoice: "#INV-4592",
    address: "الرياض، السعودية",
    phone: "0501234567",
    total: "450$",
    status: "معلق",
  },
  {
    id: 4,
    name: "سارة أحمد",
    invoice: "#INV-4592",
    address: "الرياض، السعودية",
    phone: "0501234567",
    total: "450$",
    status: "مؤكد",
  },
  {
    id: 5,
    name: "محمد علي",
    invoice: "#INV-4592",
    address: "الرياض، السعودية",
    phone: "0501234567",
    total: "450$",
    status: "مرفوض",
  },
];

export default function DashPayments() {
  const [cartVisible, setCartVisible] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState({ PaymentsRows });
  const [chosenReceipt, setChosenReceipt] = useState("");

  const showReceipt = (id) => {
    const chosen = receiptDetails.PaymentsRows.find(
      (receipt) => receipt.id === id,
    );
    setChosenReceipt(chosen);
    setCartVisible(true);
  };

  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <DashPagesTitle
            title="مراجعة إيصالات الدفع"
            description="هنا يمكنك مراجعة جميع إيصالات الدفع التي تم استلامها من المرضى."
            notDisplayAddButton="none"
          />
          <Box
            sx={{
              margin: "20px 0",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <DashStatisticsCard
              icon={
                <PaymentsIcon
                  sx={{ fontSize: "40px", color: "secondary.main" }}
                ></PaymentsIcon>
              }
              title="إجمالي الإيرادات هذا الشهر"
              value="4580 $"
              description="+12% عن الشهر الماضي"
              bg="rgb(10, 150, 10,40%)"
            ></DashStatisticsCard>

            <DashStatisticsCard
              icon={
                <HourglassTopOutlinedIcon
                  PaymentsIcon
                  sx={{ fontSize: "40px", color: "secondary.main" }}
                ></HourglassTopOutlinedIcon>
              }
              title="إيصالات قيد الانتظار"
              value="18"
              bg="rgb(200, 10, 10,20%)"
            ></DashStatisticsCard>
            <DashStatisticsCard
              icon={
                <PointOfSaleOutlinedIcon
                  PaymentsIcon
                  sx={{ fontSize: "40px", color: "secondary.main" }}
                ></PointOfSaleOutlinedIcon>
              }
              title="تحصيلات اليوم"
              value="185$"
              bg="rgb(6, 54, 61,20%)"
            ></DashStatisticsCard>
          </Box>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            width="95%"
            margin="0px auto"
            mb="10px"
            gap={5}
          >
            <TextField
              className="textfield"
              label="بحث عن اسم المشتري أو رقم الفاتورة"
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
                الكل
              </Button>
              <Button
              // variant={activeFilter == "quantity" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("quantity");
              // }}
              >
                معلق
              </Button>
              <Button
              // variant={activeFilter == "price" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("price");
              // }}
              >
                مؤكد
              </Button>
              <Button
                variant="contained"
                // variant={activeFilter == "price" ? "contained" : "outlined"}
                // onClick={(e) => {
                //   setActiveFilter("price");
                // }}
              >
                مرفوض
              </Button>
            </Box>
          </Stack>
          <DashTable
            columns={PaymentsColumns}
            rows={PaymentsRows}
            renderRow={(row) => (
              <TableRow className="table-body" key={row.id}>
                <TableCell className="table-body-cell">{row.name}</TableCell>
                <TableCell className="table-body-cell">{row.invoice}</TableCell>
                <TableCell className="table-body-cell">{row.total}</TableCell>
                <TableCell className="table-body-cell">{row.address}</TableCell>
                <TableCell className="table-body-cell">{row.phone}</TableCell>
                <TableCell className="table-body-cell">
                  {row.status === "معلق" ? (
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
                      {" "}
                      {row.status}
                    </Typography>
                  ) : row.status === "مؤكد" ? (
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
                        alignItems: "center",
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
                      justifyContent: "center",
                      gap: 1,
                      alignContent: "center",
                    }}
                  >
                    <IconButton>
                      <VisibilityIcon
                        onClick={showReceipt.bind(this, row.id)}
                        sx={{ color: "secondary.main" }}
                      ></VisibilityIcon>
                    </IconButton>
                    <Button
                      variant="contained"
                      // onClick={() => setOpenShowProfile(true)}
                    >
                      تأكيد
                    </Button>
                    <Button
                      variant="contained"
                      // onClick={() => setOpenShowProfile(true)}
                    >
                      رفض
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          ></DashTable>
          <Box
            sx={{
              margin: "20px auto 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              padding: "40px",
              backgroundColor: "secondary.main",
              borderRadius: "20px",
              color: "white",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "70%",
                gap: 2,
              }}
            >
              <Typography variant="h3">إرشادات التحقق من الإيصالات</Typography>
              <Typography variant="h2" sx={{ textAlign: "justify" }}>
                - يرجى التحقق من مطابقة رقم الايصال مع رقم الفاتورة العملية في
                حسابك الشخصي
                <br />- عند رفض إيصال، سيتم إرسال إشعار تلقائي للمريض لمراجعة
                قسم المحاسبة أو إعادة رفع الإيصال الصحيح.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "20%",
                padding: "40px 0",
                borderRadius: "10px",
                background: "rgb(255, 255, 255,40%)",
              }}
            >
              <GppGoodOutlinedIcon
                sx={{ color: "secondary.main", fontSize: "100px" }}
              />
            </Box>
          </Box>
          {/* //show the details of the receipt  */}
          <Dialog
            PaperProps={{ sx: { background: "#FFFFFF", padding: "10px" } }}
            open={cartVisible}
            onClose={() => setCartVisible(false)}
            fullWidth
            maxWidth="sm"
            dir="rtl"
          >
            <Box id="for-print">
              <DialogTitle  >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4">تفاصيل إيصال الدفع</Typography>
                  {chosenReceipt.status === "معلق" ? (
                    <Typography
                      variant="h2"
                      sx={{
                        color: "info.main",
                        backgroundColor: "rgb(6, 54, 61,20%)",
                        borderRadius: "50px",
                        padding: "10px",
                        margin: "0",
                        justifySelf: "flex-end",
                      }}
                    >
                      الحالة: {chosenReceipt.status}
                    </Typography>
                  ) : chosenReceipt.status === "مؤكد" ? (
                    <Typography
                      variant="h2"
                      sx={{
                        color: "success.main",
                        backgroundColor: "rgb(10, 150, 10,20%)",
                        borderRadius: "50px",
                        padding: "10px",
                      }}
                    >
                      الحالة: {chosenReceipt.status}
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
                      الحالة: {chosenReceipt.status}
                    </Typography>
                  )}
                </Box>
                <Typography variant="h5">
                  {" "}
                  رقم الايصال: {chosenReceipt.invoice}{" "}
                </Typography>
                <Divider />
                {/* // هون رح نجيب الوقت  */}
                <Typography variant="h2" marginTop={2}>
                  التاريخ: {chosenReceipt.date}
                </Typography>
                <Typography variant="h5">
                  {" "}
                  اسم المشتري: {chosenReceipt.name}{" "}
                </Typography>
                <Typography variant="h5">
                  {" "}
                  العنوان: {chosenReceipt.address}{" "}
                </Typography>
                <Typography variant="h5" marginBottom={2}>
                  {" "}
                  رقم الهاتف: {chosenReceipt.phone}{" "}
                </Typography>
              </DialogTitle>
              <DialogContent >
                <Typography variant="h5">تفاصيل المعاملة</Typography>
                <DashTable
                  columns={[
                    { id: 1, label: "الصنف" },
                    { id: 2, label: "الكمية" },
                    { id: 3, label: "السعر" },
                  ]}
                  rows={data}
                  renderRow={(row) => (
                    <TableRow className="table-body" key={row.id}>
                      <TableCell className="table-body-cell">
                        {row.item}
                      </TableCell>
                      <TableCell className="table-body-cell">
                        {row.quantity}
                      </TableCell>
                      <TableCell className="table-body-cell">
                        {row.price}
                      </TableCell>
                    </TableRow>
                  )}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 0",
                  }}
                >
                  <Typography variant="h4">إجمالي المبلغ المدفوع</Typography>
                  <Typography variant="h4">{chosenReceipt.total}</Typography>
                </Box>
              </DialogContent>
            </Box>
            <DialogActions>
              <Button
                sx={{}}
                onClick={() => {
                  setCartVisible(false);
                  window.print();
                }}
                variant="contained"
              >
                طباعة الايصال
              </Button>
              <Button
                onClick={() => {
                  setCartVisible(false);
                }}
                color="inherit"
              >
                إغلاق
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}
