import Timeline from './Timeline.js'
import { DialogTitle, Divider, Grid, Stack } from '@mui/material';
import Switch from '@mui/material/Switch';
import {FormControlLabel} from '@mui/material';
import {TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DialogContent } from '@mui/material';
import {DialogActions} from '@mui/material';
import { Button,Box } from '@mui/material';
import { Typography } from '@mui/material';
import DashPackagesTable from './DashPackagesTable.js'
// import PatientsList from './PatientsList.js'
import {useState }from 'react';

export default function DisplayPackagePatients({title,caption,confirm,open,onClose,onConfirm}) {
const [active,setActive]=useState ('timeline')
function PatientsList (){
     const rows = [
    { id: 1, name: 'مريض1', status:'فعال' },
    { id: 2, name:'مريض2', status:'فعال' },

  ];
    return (
        <>
          <TableContainer sx={{ textAlign: "center" }}>
              <Table sx={{ background: '#FFFFFF', maxWidth: 850, direction: "rtl" }}>
                
                <TableHead >
                  <TableRow sx={{ background: '#A0D7E24D' }}>
                    <TableCell sx={{ border: '1px solid #777', textAlign: "center", fontSize: "24px", color: "#0D6F73" }}>الاسم</TableCell>
                    <TableCell sx={{ border: '1px solid #777', textAlign: "center", fontSize: "24px", color: "#0D6F73" }}>حالة الاشتراك</TableCell>
                
                    <TableCell sx={{ border: '1px solid #777', textAlign: "center", fontSize: "24px", color: "#0D6F73" }}>الإجراءات</TableCell>
        
                  </TableRow>
                    </TableHead>
                     <TableBody>
                              {rows.map((row) => (
                                <>
                                  <TableRow key={row.id} sx={{ height: 'auto', display:'table-row'}}>
                                    <TableCell sx={{ maxWidth:'50px',border: '1px solid #777', fontWeight: 800 ,textAlign:"center"}}>{row.name}</TableCell>
                                    <TableCell sx={{ border: '1px solid #777', fontWeight: 800,textAlign:'center' }}>{row.status}</TableCell>

                                    <TableCell sx={{ border: '1px solid #777', fontWeight: 800,textAlign:"center" }}> 
                                    
                    <Button variant='contained' >عرض ملف المريض</Button>
                                  
                                      
                                </TableCell>
                                  </TableRow>
                    
                                </>
                              ))}
                            </TableBody>
                    
                    </Table>
        </TableContainer>
            </>
    )
}
    return (
<>
<Dialog PaperProps={{sx:{background:"#FFFFFF",padding:'10px'}}} open={open} onClose={onClose} fullWidth maxWidth="sm" dir="rtl">
          <Stack  direction='row' justifyContent='space-between'>
          <DialogTitle>
           <Typography variant='h4'> عرض المشتركين
</Typography>
                  
          </DialogTitle>
<Box ><Button onClick={()=>setActive('timeline')} variant={  active =='timeline'   ?  'contained' : 'standard'}>خط زمني</Button> <Button onClick={()=>setActive (' ')} variant={active !='timeline' ?'contained' : 'standard'}>قائمة</Button></Box>
</Stack>
          <Divider />
 <DialogContent>
  {active =='timeline' ?  <Timeline/> : <PatientsList/>}
    </DialogContent>

      <DialogActions>
 
        <Button onClick={onClose} color="inherit">
اغلاق        </Button>
        
      </DialogActions>
          <Box display={true ? 'block' :'none'}>
        
</Box>
    </Dialog>
  

  
    </>
)}