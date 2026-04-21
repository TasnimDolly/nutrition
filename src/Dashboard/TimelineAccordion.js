import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Timeline from "./Timeline";
import Timeline from "./Timeline";
export default function TimelineAccordion() {
  return (
    <Accordion sx={{ borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      {/* <AccorSummary
        expandIcon={
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        }
        sx={{
          flexDirection: "row-reverse",
          "& .MuiAccordionSummary-content": {
            marginLeft: 1,
          },
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>عرض الجدول الزمني</Typography>
      </AccordionSummary> */}

      <AccordionDetails sx={{ background: "#fafafa" }}>
        <Timeline />
      </AccordionDetails>
    </Accordion>
  );
}