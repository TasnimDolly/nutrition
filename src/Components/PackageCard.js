import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Card, Typography, Button } from "@mui/material";

export default function PackageCard({ num, name, details, price }) {
  return (
    <Card
      sx={{
        width: "300px",
        height: "430px",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid #E0E0E0",
        "&:hover": {
          borderTop: "5px solid #06363D !important",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          marginBottom: "15px",
        }}
      >
        <CalendarTodayIcon />
        <Typography variant="body1">{num}</Typography>
      </Box>
      <Typography
        variant="h4"
        sx={{ textAlign: "right", marginBottom: "30px" }}
      >
        {name}
      </Typography>
      <Box>
        {details.map((detail, index) => (
          <Box
            key={index}
            display="flex"
            gap={"10px"}
            alignItems="right"
            sx={{ marginBottom: "5px",textAlign:'right' }}
          >
            <CheckIcon />
            <Typography variant="body1">{detail}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">{price}</Typography>
        <Button
        className="adding-to-cart"
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            padding: "10px 20px",
          }}
        >
          إضافة الى السلة
        </Button>
      </Box>
    </Card>
  );
}
