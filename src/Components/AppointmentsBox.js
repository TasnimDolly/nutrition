import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
export default function AppointmentsBox({ handleTime, AppointmentTime, clickone }) {
    const times = [{ time: '9:00', disabled: false }
        , { time: '9:30', disabled: true }, { time: '10:00', disabled: false }, { time: '10:30', disabled: true }, { time: '11:00', disabled: true }, { time: '11:30', disabled: false }, { time: '12:00', disabled: true }, { time: '12:30', disabled: false }, { time: '1:00', disabled: false }, { time: '1:30', disabled: false }, { time: '2:00', disabled: false }, { time: '2:30', disabled: false }, { time: '3:00', disabled: false }, { time: '3:30', disabled: false }, { time: '4:00', disabled:false }, { time: '4:30', disabled: false }, { time: '5:00', disabled: true }]
     return (
        times.map((t) => {
            return (
                <Grid item size={3}>
                    <Button variant={AppointmentTime == t.time? 'contained' : 'outlined'} disabled={t.disabled} color={'primary'} onClick={(e) => {
                        handleTime(e.target.textContent);
                    }} sx={{ display: "block", width: "100%", margin: "5px 0px 22px", fontWeight: "bold" }}
                    >{t.time}</Button>
                </Grid>
            )
        })
   
)}