import Bar from "./Bar";
import Foot from "./Foot";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function TestPage({ name, goal, questions, options, result }) {
  return (
    <Box sx={{ backgroundColor: "#DCECF0" }}>
      <Bar></Bar>
      <Box
        sx={{
          border: "25px solid white",
          borderRadius: "50px",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
          width: "70%",
          margin: "30px auto",
          backgroundColor: "text.dark",
        }}
      >
        <Typography variant="h3" sx={{ color: "secondary.default" }}>
          {name}
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "secondary.default", padding: "30px 0" }}
        >
          {goal}
        </Typography>
      </Box>
      <Box sx={{ margin: "30px 0" }}>
        {questions.map((question, index) => (
          <Accordion
            key={index}
            sx={{
              width: "70%",
              margin: "15px auto",
              padding: "10px",
              borderRadius: "50px",
              backgroundColor: "#77777726",
              boxShadow: " 5px 5px 5px 0px #00000040",
              "&:before": {
                display: "none",
              },
              "&.Mui-expanded": {
                margin: "15px auto",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <Typography
                sx={{
                  padding: "5px 10px",
                  backgroundColor: "#7777774D",
                  color: "white",
                  borderRadius: "5px",
                  marginLeft: "10px",
                }}
              >
                {question.id}
              </Typography>
              <Typography>{question.text}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                {options.map((option, idx) => (
                  <Button
                    key={idx}
                    sx={{
                      backgroundColor: "secondary.main",
                      color: "white",
                      width: "30%",
                      borderRadius: "5px",
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Button
        sx={{
          padding: " 15px 20px",
          borderRadius: "50px",
          margin: "0 13% 30px",
          color: "white",
          backgroundColor: "text.skyblue",
          display: "flex",
          justifySelf: "right",
        }}
      >
        عرض تحليل النتائج
      </Button>
      <Box
        sx={{
          backgroundColor: "#dcecf0",
          color: "secondary.main",
          width: "70%",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "10px",
          fontSize: "24px",
          boxShadow: " 5px 5px 10px 10px #00000060",
        }}
      >
        {result}
      </Box>
      <Foot></Foot>
    </Box>
  );
}
