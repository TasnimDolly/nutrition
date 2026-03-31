import Typography from "@mui/material/Typography";
import Box from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export default function Notifications({ status, title, info, time }) {
  return (
    <>
      <Box
        sx={{
          margin: "20px 0",
          borderRadius: "20px",
          padding: "20px 40px",
          backgroundColor: status ? "#0D6F7340" : "#FF00044D",
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          gap: "10px",
        }}
      >
        {status ? (
          <IconButton sx={{ color: "#23AD51" }}>
            <CheckCircleIcon />
          </IconButton>
        ) : (
          <IconButton sx={{ color: "#FF1E65" }}>
            <ReportProblemIcon />
          </IconButton>
        )}
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h4" sx={{ fontSize: "20px" }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "primary.main" }}>
            {info}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: "14px" }}
          >
            {time}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
