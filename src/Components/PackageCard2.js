import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";

export default function PackageCard2({
  num,
  name,
  details,
  oldprice,
  newprice,
  steps,
}) {
  return (
    <Card
      sx={{
        width: "900px",
        height: { sx: "350px", md: "250px", lg: "200px" },
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "20px",
        border: "1px solid #E0E0E0",
        "&:hover": {
          transition: "0.3s",
          borderTop: "5px solid #06363D !important",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "right", marginBottom: "10px" }}
        >
          {name}
        </Typography>
        <Typography variant="h2">{num}</Typography>
      </Box>
      <Box>
        {details.map((detail, index) => (
          <Box
            key={index}
            display="flex"
            gap={"10px"}
            sx={{ textAlign: "right" }}
          >
            <CheckIcon />
            <Typography variant="body1">{detail}</Typography>
          </Box>
        ))}
      </Box>
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", textAlign: "right", margin: "10px 0" }}
      >
        تفاصيل الدفع: {steps}
      </Typography>
      <Box
        sx={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" margin="0px">
          <Typography
            component="span"
            sx={{
              color: "text.secondary",
              textDecoration: "line-through",
              margin: "0 5px",
              position: "relative",
              top: "10px",
              fontSize: 18,
            }}
          >
            {oldprice}
          </Typography>
          {newprice}
        </Typography>
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
