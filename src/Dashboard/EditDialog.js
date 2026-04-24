import { DialogTitle, Divider, Grid, Stack } from "@mui/material";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { Button, Box } from "@mui/material";
import { Typography } from "@mui/material";

export default function EditDialog({
  title,
  caption,
  confirm,
  open,
  onClose,
  onConfirm,
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
      <DialogTitle sx={{}}>
        <Typography variant="h4"> {title}</Typography>
        <Typography variant="caption">{caption}</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item size={12} sx={{}}>
            <TextField
              className="textfield"
              label=" اسم الباقة"
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused": {
                  width: "100%",
                },
                "& .MuiOutlinedInput-root": { width: "100%" },
                "& .Mui-focused fieldset": {
                  "& .MuiInputLabel-root.Mui-focused": { marginTop: "0px" },
                  "&.MuiOutlinedInput-notchedOutline legend": {
                    textAlign: "right",
                  },
                },
              }}
            />
          </Grid>
          <Grid item size={12} sx={{}}>
            <TextField
              className="textfield"
              label=" وصف الباقة"
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused": {
                  width: "100%",
                },
                "& .MuiOutlinedInput-root": { width: "100%" },
                "& .Mui-focused fieldset": {
                  "& .MuiInputLabel-root.Mui-focused": { marginTop: "0px" },
                  "&.MuiOutlinedInput-notchedOutline legend": {
                    textAlign: "right",
                  },
                },
              }}
            />
          </Grid>
          <Grid item size={6} sx={{}}>
            <TextField
              className="textfield"
              label=" مدة الباقة (بالشهور)"
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused": {
                  width: "100%",
                },
                "& .MuiOutlinedInput-root": { width: "100%" },
                "& .Mui-focused fieldset": {
                  "& .MuiInputLabel-root.Mui-focused": { marginTop: "0px" },
                  "&.MuiOutlinedInput-notchedOutline legend": {
                    textAlign: "right",
                  },
                },
              }}
            />
          </Grid>
          <Grid item size={6} sx={{}}>
            <TextField
              className="textfield"
              label=" سعر الباقة"
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused": {
                  width: "100%",
                },
                "& .MuiOutlinedInput-root": { width: "100%" },
                "& .Mui-focused fieldset": {
                  "& .MuiInputLabel-root.Mui-focused": { marginTop: "0px" },
                  "&.MuiOutlinedInput-notchedOutline legend": {
                    textAlign: "right",
                  },
                },
              }}
            />
          </Grid>
          <Grid item size={12} sx={{}}>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              {" "}
              التصنيف{" "}
            </Typography>
            <Button
              sx={{ display: "block", width: "100%", margin: "5px 0px 22px" }}
              color={"primary"}
              variant="contained"
            >
              اجراءات طبية{" "}
            </Button>
            <Button
              sx={{ display: "block", width: "100%", margin: "5px 0px 22px" }}
              color={"primary"}
              variant="contained"
            >
              حمية غذائية{" "}
            </Button>
          </Grid>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              {" "}
              الحالة
              <Typography variant="caption" sx={{ display: "block" }}>
                {" "}
                تفعيل او تعطيل ظهور الباقة للمشتركين{" "}
              </Typography>
            </Typography>
            <FormControlLabel control={<Switch defaultChecked />} />
          </Stack>
        </Grid>
        <Typography variant="h2" sx={{ marginTop: 5 }}></Typography>
      </DialogContent>

      <DialogActions>
        <Button
          sx={{}}
          onClick={() => {
            onConfirm();
          }}
          variant="contained"
        >
          {confirm}{" "}
        </Button>
        <Button onClick={onClose} color="inherit">
          الغاء الامر
        </Button>
      </DialogActions>
    </Dialog>
  );
}
