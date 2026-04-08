import Bar from "./Bar";
import Foot from "./Foot";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Contact() {
  return (
    <>
      <Bar />
      <Stack className="contactPage" sx={{ }}>
       
        <Typography
          sx={{ fontSize: 28, margin: "40px 40px 0px 0px", fontWeight: "bold" ,textAlign:"right"}}
          color="text.dark"
        >
          تواصل معنا
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "43px 78px 18px 59px",
          }}
          color="text.dark"
        >
          <Typography sx={{ fontSize: "24px" ,textAlign:"right"}} color="text.primary">
            نحن هنا لمساعدتك تواصل معنا عبر هذا النموذج أو عبر الإتصال مباشرة
          </Typography>
          <Stack
            direction={{xs:'column',sm:'column',md:'row'}}
            justifyContent="space-between"
            sx={{ marginTop: "46px" }}
          >
            <Typography fontSize={{ xs:22, sm:24 }}
              sx={{ marginBottom:10,display: "flex", alignItems: "center", }}
            >
              <LocalPhoneIcon className="icon" />
              الهاتف : 0960093305
            </Typography>
            <Typography fontSize={{ xs:22, sm:24 }}
              sx={{ marginBottom:10,display: "flex", alignItems: "center"}}
            >
              <LocationPinIcon className="icon" />
              سوريا- حماة - الشريعة - دوار البغدادي
            </Typography>
            <Typography fontSize={{ xs:22, sm:24 }}
              sx={{ marginBottom:10,display: "flex", alignItems: "center", }}
            >
              <EmailIcon className="icon" />
              البريد الإلكتروني: Salammuty@gmail.com
            </Typography>
          </Stack>
          <form>
            <Stack direction="column" alignItems="center">
              <Grid container spacing={2}>
                <Grid item size={{md:6 ,sm:6, xs:12}} >
                  <TextField
                    fullWidth
                    className="textfield"
                    placeholder="ادخل اسمك الكامل"
                    label="الاسم الكامل "
                    slotProps={{
                      htmlInput: {
                        sx: {
                          "&::placeholder": { fontSize: 20 },
                        },
                      },
                    }}
                    sx={{
                      "& ": { marginTop: "41px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "text.primary",
                      },
                      "& .MuiInputBase-input": { fontSize: "19px" },
                    }}
                    variant="filled"
                  />
                </Grid>
                <Grid item size={{md:6 ,sm:6, xs:12}} >
                  <TextField
                    fullWidth
                    className="textfield"
                    placeholder="ادخل بريدك الالكتروني"
                    label="البريد الالكتروني"
                    slotProps={{
                      htmlInput: {
                        sx: {
                          "&::placeholder": { fontSize: 20 },
                        },
                      },
                    }}
                    sx={{
                      "& ": { marginTop: "41px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "text.primary",
                      },
                      "& .MuiInputBase-input": { fontSize: "19px" },
                    }}
                    variant="filled"
                  />
                </Grid>
                <Grid size={{md:12 ,sm:12, xs:12}}  item>
                  <TextField
                    fullWidth
                    className="textfield"
                    placeholder="ادخل الموضوع هنا "
                    label="الموضوع"
                    slotProps={{
                      htmlInput: {
                        sx: {
                          "&::placeholder": { fontSize: 20 },
                        },
                      },
                    }}
                    sx={{
                      "& ": { marginTop: "41px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "text.primary",
                      },
                      "& .MuiInputBase-input": { fontSize: "19px" },
                    }}
                    variant="filled"
                  />
                </Grid>
                <Grid size={{md:12 ,sm:12, xs:12}}  item fullWidth>
                  <TextField
                    multiline
                    row={4}
                    fullWidth
                    className="textfield"
                    placeholder="اكتب مالا يزيد عن 600 حرف "
                    label="ادخل رسالتك"
                    slotProps={{
                      htmlInput: {
                        sx: {
                          "&::placeholder": { fontSize: 20 },
                        },
                      },
                    }}
                    sx={{
                      "& ": { marginTop: "41px" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "text.primary",
                      },
                      "& .MuiInputBase-input": { fontSize: "19px" },
                    }}
                    variant="filled"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  width: "230px",
                  margin: "31px 18px",
                }}
                color={"primary"}
                variant="contained"
              >
                ارسال
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Foot />
    </>
  );
}
