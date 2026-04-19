import Nav from "./Nav.js";
import DashBar from "./DashBar.js";
import { Box, Typography } from "@mui/material";
import DashHomePg from "./imgs/DashHomePg.png";
import DashStatisticsCard from "./DashStatisticsCard.js";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Button } from "@mui/material";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function DashHome() {
  //for  bar
  const [mode, setMode] = useState("week");
  const [type, setType] = useState("clinic");

  const weekData = {
    labels: ["سبت", "أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"],
    values: [5, 18, 16, 7, 14, 9, 3],
  };

  const monthData = {
    labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    values: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20)),
  };

  const currentData = mode === "week" ? weekData : monthData;

  //for pie
  const data = [
    { id: 0, value: 35, label: "منتج A", color: "#1976d2" },
    { id: 1, value: 25, label: "منتج B", color: "#e91e63" },
    { id: 2, value: 20, label: "منتج C", color: "#4caf50" },
    { id: 3, value: 20, label: "منتج D", color: "#ff9800" },
  ];

  return (
    <>
      <Nav />
      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <Box
            sx={{
              display: "flex",
              gap: 5,
              alignItems: "center",
              textAlign: "start",
            }}
          >
            <img src={DashHomePg} alt="Dashboard Home" />
            <Box>
              <Typography variant="h4" padding={1}>
                مرحباً د.سلام{" "}
              </Typography>
              <Typography variant="h5">
                إليك ملخص نشاط العيادة و المهام المطلوبة .
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
            <DashStatisticsCard
              bg="#A125C333"
              icon={<MailIcon sx={{ marginRight: 1 }} />}
              title="المواعيد اليومية"
              value="12 موعد"
              description="باقي 4 مواعيد اليوم"
            />
            <DashStatisticsCard
              bg="#23AD5153"
              icon={<MailIcon sx={{ marginRight: 1 }} />}
              title="استشارات الأسبوع"
              value="58 حالة"
              description="+2% عن الأسبوع الماضي"
            />
            <DashStatisticsCard
              bg="#EF726133"
              icon={<MailIcon sx={{ marginRight: 1 }} />}
              title="رسائل جديدة"
              value="3 رسائل"
              description="تتطلب الرد"
            />
            <DashStatisticsCard
              bg="#0088FF33"
              icon={<MailIcon sx={{ marginRight: 1 }} />}
              title="إجمالي أرباح المنتجات"
              value="1,450"
              description="+5% عن الشهر الماضي"
            />
            <DashStatisticsCard
              bg="#FF1E6533"
              icon={<MailIcon sx={{ marginRight: 1 }} />}
              title="منتجات نفذت من المخزون"
              value="12 منتج"
              description="-2%"
            />
            <DashStatisticsCard
              bg="#23AD5153"
              icon={<MailIcon sx={{ marginRight: 1 }} />}
              title="المواعيد الملغية"
              value="2 موعد"
              description="0% تغيير"
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "rgb(255, 255, 255,40%)",
              width: "95%",
              height: "530px",
              margin: "40px auto",
              borderRadius: "20px",
            }}
          >
            <Typography variant="h4" padding={3} sx={{ textAlign: "right" }}>
              احصائيات مواعيد الأسبوع السابق
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box
                sx={{
                  height: "350px",
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  gap: 4,
                  padding: 3,
                }}
              >
                <DashStatisticsCard
                  sx={{
                    width: "400px !important",
                    backgroundColor: "#A125C333",
                  }}
                  icon={<MailIcon sx={{ marginRight: 1 }} />}
                  title="المواعيد الملغية"
                  value="2 موعد"
                  w="240px"
                  h="80px"
                />
                <DashStatisticsCard
                  sx={{
                    width: "400px !important",
                    backgroundColor: "#A125C333",
                  }}
                  icon={<MailIcon sx={{ marginRight: 1 }} />}
                  title="المواعيد المؤكدة"
                  value="23 موعد"
                  w="240px"
                  h="80px"
                />
              </Box>
              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div>
                    <Button
                      onClick={() => setType("clinic")}
                      variant={type === "clinic" ? "contained" : "outlined"}
                    >
                      عيادة
                    </Button>
                    <Button
                      sx={{ marginRight: 1 }}
                      onClick={() => setType("online")}
                      variant={type === "online" ? "contained" : "outlined"}
                    >
                      أونلاين
                    </Button>
                  </div>
                  <FormControl>
                    <RadioGroup
                      row
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                    >
                      <FormControlLabel
                        value="week"
                        control={<Radio />}
                        label="أسبوع"
                      />
                      <FormControlLabel
                        value="month"
                        control={<Radio />}
                        label="شهر"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <BarChart
                  margin={{ left: 40, top: 30 }}
                  xAxis={[
                    {
                      scaleType: "band",
                      data: currentData.labels,
                      label: "اليوم",
                    },
                  ]}
                  yAxis={[
                    {
                      min: 0,
                      max: 20,
                      label: "موعد",
                      tickLabelStyle: { fontSize: 12, dx: -10 },
                    },
                  ]}
                  series={[
                    {
                      data: currentData.values,
                    },
                  ]}
                  width={700}
                  height={400}
                />
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgb(255, 255, 255,40%)",
              width: "95%",
              height: "530px",
              margin: "40px auto",
              borderRadius: "20px",
            }}
          >
            <Typography variant="h4" padding={3} sx={{ textAlign: "right" }}>
              نسب أرباح المنتجات خلال الشهر الماضي
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <PieChart
                series={[
                  {
                    data,
                    innerRadius: 0,
                    outerRadius: 200,
                    cornerRadius: 10,
                    arcLabel: (item) => `${item.label}: ${item.value}%`,
                    arcLabelMinAngle: 5,
                  },
                ]}
                width={700}
                height={400}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
