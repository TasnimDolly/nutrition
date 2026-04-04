import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import icon from "../imgs/FrequentlyAskedQuestionsIcon.png";

export default function FrequentlyAskedQuestions({ questions }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        textAlign: "right",
        gap: "30px",
        margin: "40px 0",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            margin: "0 20px 0 20px",
          }}
        >
          الأسئلة الشائعة
        </Typography>
        <Box sx={{ width: "100%" }}>{questions}</Box>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <img
          src={icon}
          alt="icon"
          style={{
            width: "250px",
            height: "250px",
            alignSelf: "flex-end",
          }}
        />
      </Box>
    </Box>
  );
}
