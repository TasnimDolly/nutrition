import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import EditDialog from './EditDialog';
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, Box, Collapse,Button } from '@mui/material';
import TimelineAccordion from './TimelineAccordion';
import DeleteDialog from './DeleteDialog';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DisplayPackagePatients from './DisplayPackagePatients.js'
export default function DashPackagesTable() {
  const [openEditPackage, setOpenEditPackage] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
        const [openPatients,setOpenPatients]=useState (false)

  const handleConfirm = () => {
    setOpenDeleteDialog(false);
    setOpenPatients(false);
  };

  const rows = [
    { id: 1, name: 'باقة الجمال والدلال', price: 100, duration: 'شهرين','status':'نشطة' },
    { id: 2, name: 'باقة الجمال والدلال', price: 100, duration: 'شهرين','status':'نشطة' },
    { id: 3, name: 'باقة الجمال والدلال', price: 100, duration: 'شهرين','status':'نشطة' },
    { id: 4, name: 'باقة الجمال والدلال', price: 100, duration: 'شهرين','status':'نشطة' },
  ];

  return (
    <TableContainer sx={{ textAlign: "center" }}>
      <Table sx={{ background: '#FFFFFF', maxWidth: 850, direction: "rtl" }}>
        
        <TableHead >
          <TableRow sx={{ background: '#A0D7E24D' }}>
            <TableCell sx={{ border: '1px solid #777', textAlign: "center", fontSize: "24px", color: "#0D6F73" }}>اسم الباقة</TableCell>
            <TableCell sx={{ border: '1px solid #777', textAlign: "center", fontSize: "24px", color: "#0D6F73" }}>السعر</TableCell>
        
            <TableCell sx={{ border: '1px solid #777', textAlign: "center", fontSize: "24px", color: "#0D6F73" }}>المدة</TableCell>
                    <TableCell sx={{ border: '1px solid #777', textAlign: "center", fontSize: "24px", color: "#0D6F73" }}>الحالة</TableCell>
            <TableCell sx={{ border: '1px solid #777', textAlign: "center", fontSize: "24px", color: "#0D6F73" }}>الإجراءات</TableCell>

          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <>
              <TableRow key={row.id} sx={{ height: 'auto', display:'table-row'}}>
                <TableCell sx={{ maxWidth:'50px',border: '1px solid #777', fontWeight: 800 ,textAlign:"center"}}>{row.name}</TableCell>
                <TableCell sx={{ border: '1px solid #777', fontWeight: 800,textAlign:'center' }}>{row.price}</TableCell>
                <TableCell sx={{ border: '1px solid #777', fontWeight: 800 ,textAlign:'center'}}>{row.duration}</TableCell>
                <TableCell sx={{ border: '1px solid #777', fontWeight: 800,textAlign:"center" }}>{row.status}</TableCell>
                <TableCell sx={{ border: '1px solid #777', fontWeight: 800,textAlign:"center" }}> 
                
<Button variant='contained' onClick={() => setOpenPatients (true)}>عرض المشتركين</Button>
              
                  <IconButton sx={{color:'rgb(230, 82, 82)', margin:'0px 40px'}} onClick={()=>setOpenDeleteDialog(true)}>
                    <DeleteIcon  />
                  </IconButton>
                  <IconButton onClick={()=>setOpenEditPackage(true)}>
                    <EditNoteIcon />
                  </IconButton>
            </TableCell>
              </TableRow>

            </>
          ))}
        </TableBody>

      </Table>
      <DeleteDialog
            open={openDeleteDialog}
            onClose={() => setOpenDeleteDialog(false)}
            content="هل انت متأكد من حذف هذه الباقة؟ لا يمكن التراجع عن هذا الإجراء."
        title="حذف الباقة؟"
        icon={<DeleteIcon sx={{fontSize:50,borderRadius:'50%',padding:'10px',color:'red',background:"#fe9494"}} />}
        onConfirm={handleConfirm}
        
      />
      <DisplayPackagePatients open={openPatients} onClose={() => setOpenPatients(false)} onConfirm={handleConfirm} />
      <EditDialog open={openEditPackage} onClose={() => setOpenEditPackage(false)} onConfirm={handleConfirm} title='تعديل تفاصيل الباقة ' caption='تحديث معلومات الباقة' confirm='حفظ التغييرات'/>
    </TableContainer>
  );
}