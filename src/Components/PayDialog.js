
import { DialogTitle } from '@mui/material';

import {TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogContent } from '@mui/material';
import {DialogActions} from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
export default function PayDialog({open,onClose,onConfirm,title,content}) { 

  return (
    <Dialog PaperProps={{sx:{background:"#FFFFFF",padding:'10px'}}} open={open} onClose={onClose} fullWidth maxWidth="sm" dir="rtl">
      <DialogTitle >{ title}</DialogTitle>

      <DialogContent>
                          <Typography variant='h2'sx={{ marginTop: 5 }}>  {content}
</Typography>
         

             <TextField
            fullWidth
                  variant='standard'
                  sx={{ paddingTop: '10px',borderRadius:'5px'}}
  
                  />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="inherit">
          إلغاء
        </Button>
        <Button onClick={()=>{onConfirm()}} variant="contained">
          تأكيد 
        </Button>
      </DialogActions>
    </Dialog>
  );
}