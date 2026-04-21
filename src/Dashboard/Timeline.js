 import { useState } from "react";
import { Card, Box, Typography, Button } from "@mui/material";

function parseISODateLocal(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function generateMonths(year) {
  const months = [];
  for (let m = 0; m < 12; m++) {
    const days = [];
    const date = new Date(year, m, 1);
    while (date.getMonth() === m) {
      const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      days.push(formatted);
      date.setDate(date.getDate() + 1);
    }
    months.push(days);
  }
  return months;
}

export default function Timeline() {
  const year = 2026;
  const dayWidth = 120;
  const dayGap = 12;
  const rowHeight = 60;
  const rowGap = 20;

  const months = generateMonths(year);
  const [currentMonth, setCurrentMonth] = useState(3); 
  const monthIndex = currentMonth - 1;
  const days = months[monthIndex] ?? [];
  const totalTimelineWidth = days.length > 0 ? days.length * dayWidth + (days.length - 1) * dayGap : 0;

  const patients = [
    { name: "مريض 1", start: "2026-03-1", end: "2026-03-3" },
    { name: "مريض 2", start: "2026-03-4", end: "2026-03-6" },
    { name: "مريض 3", start: "2026-03-7", end: "2026-03-9" },
    // { name: "سارة", start: "2026-03-18", end: "2026-03-8" }
  ];

  const monthStartDate = new Date(year, monthIndex, 1);
  const monthEndDate = new Date(year, monthIndex + 1, 0); // آخر يوم في الشهر

  const filteredPatients = patients.filter((p) => {
    const startDate = parseISODateLocal(p.start);
    const endDate = parseISODateLocal(p.end);
    return startDate <= monthEndDate && endDate >= monthStartDate;
  });
  // console.log(days)

  return (
    <Box sx={{ p: 2 }}>
      {/* Navigation */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Button variant="contained" onClick={() => setCurrentMonth((m) => Math.max(1, m - 1))}>
          الشهر السابق
        </Button>

        <Typography variant="h6">الشهر رقم {currentMonth}</Typography>

        <Button variant="contained" onClick={() => setCurrentMonth((m) => Math.min(12, m + 1))}>
          الشهر التالي
        </Button>
      </Box>

      <Box
        sx={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          border: "1px solid #ddd",
          borderRadius: 2,
          p: 2,
          bgcolor: "#fafafa"
        }}
      >
        <Box display="flex" sx={{ minWidth: `${totalTimelineWidth}px`, gap: `${dayGap}px`}}>
          {days.map((day) => (
            <Box
              key={day}
              sx={{
                width: `${dayWidth}px`,
                minWidth: `${dayWidth}px`,
                maxWidth: `${dayWidth}px`,
                boxSizing: "border-box",
                textAlign: "center",
                py: 1.5,
                border: "1px solid #dcdcdc",
                borderRadius: 2,
                fontSize: "14px",
                fontWeight: 600,
                bgcolor: "white",
                boxShadow: 1
              }}
            >
              {day}
            </Box>
          ))}
        </Box>

       

        <Box
          sx={{
            position: "relative",
            mt: 4,
            minWidth: `${totalTimelineWidth}px`,
            height: filteredPatients.length * (rowHeight + rowGap),
            // direction: "ltr"
          }}
        >
          {filteredPatients.map((p, i) => {
            const startDate = parseISODateLocal(p.start);
            const endDate = parseISODateLocal(p.end);

            const startIndex = Math.max(0, Math.floor((startDate - monthStartDate) / (24 * 60 * 60 * 1000)));
            const endIndex = Math.min(
              days.length - 1,
              Math.floor((endDate - monthStartDate) / (24 * 60 * 60 * 1000))
            );

            const span = Math.max(0, endIndex - startIndex + 1);
            const right = startIndex * (dayWidth + dayGap);
            const width = span * dayWidth + (span - 1) * dayGap;

            return (
              <Card
                key={i}
                sx={{
                  position: "absolute",
                  right: `${right}px`,
                  top: `${i * (rowHeight + rowGap)}px`,
                  width: `${width}px`,
                  height: `${rowHeight}px`,
                  boxSizing: "border-box",
                  // bgcolor: "primary.light",
                  p: 1,
                  borderRadius: 2,
                  boxShadow: 3
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>{p.name}</Typography>
                <Typography variant="caption">
                  {p.start} الى {p.end}
                </Typography>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
        )
}