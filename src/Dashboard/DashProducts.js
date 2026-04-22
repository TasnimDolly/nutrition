import Nav from "./Nav";
import DashBar from "./DashBar";
import DashPagesTitle from "./DashPagesTitle";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";



export default function DashProducts() {
  return (
    <>
      <Nav />

      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <DashPagesTitle
            title="
          لوحة تحكم المنتجات"
            description="
          قم بادارة المنتجات و المميزات و الأسعار من هنا"
            addButtonLebal="إضافة منتج جديد"
          ></DashPagesTitle>
        </Box>
      </Box>
    </>
  );
}
