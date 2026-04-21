import { Typography } from "@mui/material"
export default function PatientAppointment() {
    
    return (
        <>
            
            <Typography className="typo" variant="h4">
                
                تاريخ الموعد
                     <Typography margin={5} variant="h5">   {localStorage.getItem("AppointmentDate") ?  localStorage.getItem('AppointmentDate'): 'لم يتم تحديد موعد بعد!'}</Typography>

            </Typography>
             <Typography className="typo" variant="h4">
                وقت الموعد
                <Typography margin={2} variant="h5">   {    localStorage.getItem("AppointmentTime") ?  localStorage.getItem('AppointmentTime'): 'لم يتم تحديد وقت بعد!'}</Typography> 
                </Typography>
  </>
    )
}