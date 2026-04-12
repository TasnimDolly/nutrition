import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function FRQuestion({ question, answer }) {
  return (
    <Accordion
      sx={{
        margin: "10px 0",
        width: "100%",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span" sx={{ color: "text.skyblue" }}>
          <QuestionMarkIcon sx={{ color: "red" }}></QuestionMarkIcon>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ color: "text.primary", marginRight: "10px" }}>
        {answer}
      </AccordionDetails>
    </Accordion>
  );
}
