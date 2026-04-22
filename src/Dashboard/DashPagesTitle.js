import { Box, Typography, Button } from "@mui/material";
export default function DashPagesTitle({
  title,
  description,
  addButtonLebal,
  notDisplayAddButton,
  onAddButtonClick,
}) {
  return (
    <Box
      sx={{
        textAlign: "right",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4" paddingBottom={0.5}>
          {title}
        </Typography>
        <Typography variant="h5">{description}</Typography>
      </Box>
      <Button
        onClick={onAddButtonClick}
        variant="contained"
        sx={{ display: notDisplayAddButton || "block" }}
      >
        +{addButtonLebal}
      </Button>
    </Box>
  );
}
