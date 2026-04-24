import { Button, Typography } from "@mui/material";
import { Box, TextField } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Dialog, Divider } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function PatientProfile({
  openShowProfile,
  setOpenShowProfile,
  handleConfirm,
}) {
  return (
    <Dialog
      PaperProps={{ sx: { background: "#FFFFFF", padding: "10px" } }}
      open={openShowProfile}
      onClose={() => setOpenShowProfile(false)}
      fullWidth
      maxWidth="sm"
      dir="rtl"
    >
      <DialogTitle>
        <Typography variant="h4">ملف المريض</Typography>
        <Typography variant="caption">
          هنا يمكنك عرض وتعديل معلومات المريض الشخصية
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={0.2} sx={{ marginTop: 0 }}>
          <Grid item size={12}>
            <TextField
              className="textfield"
              label=" الاسم الكامل"
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused": {
                  width: "100%",
                },
                "& .MuiOutlinedInput-root": {
                  width: "100%",
                },
                "& .Mui-focused fieldset": {
                  "& .MuiInputLabel-root.Mui-focused": {
                    marginTop: "0px",
                  },
                  "&.MuiOutlinedInput-notchedOutline legend": {
                    textAlign: "right",
                  },
                },
              }}
            />
          </Grid>
          <Box sx={{ display: "flex", gap: 4 }}>
            <Grid item size={6} sx={{}}>
              <TextField
                className="textfield"
                label=" العمر"
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused": {
                    width: "100%",
                  },
                  "& .MuiOutlinedInput-root": { width: "100%" },
                  "& .Mui-focused fieldset": {
                    "&.MuiOutlinedInput-notchedOutline legend": {
                      textAlign: "right",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item size={6}>
              <TextField
                className="textfield"
                label=" الجنس"
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused": {
                    width: "100%",
                  },
                  "& .MuiOutlinedInput-root": { width: "100%" },
                  "& .Mui-focused fieldset": {
                    "& .MuiInputLabel-root.Mui-focused": {
                      marginTop: "0px",
                    },
                    "&.MuiOutlinedInput-notchedOutline legend": {
                      textAlign: "right",
                    },
                  },
                }}
              />
            </Grid>
          </Box>
          <Grid item size={12}>
            <TextField
              className="textfield"
              label=" رقم الهاتف"
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused": {
                  width: "100%",
                },
                "& .MuiOutlinedInput-root": {
                  width: "100%",
                },
                "& .Mui-focused fieldset": {
                  "& .MuiInputLabel-root.Mui-focused": {
                    marginTop: "0px",
                  },
                  "&.MuiOutlinedInput-notchedOutline legend": {
                    textAlign: "right",
                  },
                },
              }}
            />
          </Grid>
          <Grid item size={12}>
            <TextField
              className="textfield"
              label=" العنوان"
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused": {
                  width: "100%",
                },
                "& .MuiOutlinedInput-root": {
                  width: "100%",
                },
                "& .Mui-focused fieldset": {
                  "& .MuiInputLabel-root.Mui-focused": {
                    marginTop: "0px",
                  },
                  "&.MuiOutlinedInput-notchedOutline legend": {
                    textAlign: "right",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <Typography variant="h2" sx={{ marginTop: 5 }}></Typography>
      </DialogContent>
      <DialogActions>
        <Button sx={{}} onClick={handleConfirm} variant="contained">
          "حفظ التغييرات"
        </Button>
        <Button onClick={handleConfirm} color="inherit">
          الغاء الامر
        </Button>
      </DialogActions>
    </Dialog>
  );
}
