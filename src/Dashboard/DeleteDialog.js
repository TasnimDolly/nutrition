import { DialogTitle } from "@mui/material";

import { TextField } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
export default function DeleteDialog({
  icon,
  open,
  onClose,
  onConfirm,
  title,
  content,
}) {
  return (
    <Dialog
      PaperProps={{ sx: { background: "#FFFFFF", padding: "10px" } }}
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      dir="rtl"
    >
      <DialogTitle
        sx={{
          margin: "5px auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box> {icon}</Box>
        <Typography variant="h4"> {title}</Typography>{" "}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h2" sx={{ marginTop: 5 }}>
          {" "}
          {content}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button
          sx={{ background: "red" }}
          onClick={() => {
            onConfirm();
          }}
          variant="contained"
        >
          تأكيد
        </Button>
        <Button onClick={onClose} color="inherit">
          إلغاء
        </Button>
      </DialogActions>
    </Dialog>
  );
}
