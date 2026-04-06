import { Dialog } from '@mui/material';
import { DialogContent } from '@mui/material';
import {DialogActions} from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

export default function POPup({ open, onClose, content ,lastsen}) {
  return (
    <Dialog PaperProps={{sx:{background:"#FFFFFF"}}} open={open} onClose={onClose} fullWidth maxWidth="sm" dir="rtl">
      <DialogContent>
              <Typography variant='h2' sx={{ marginTop: 5 }}>      {content }</Typography>
              <Typography variant='h2' sx={{ marginTop: 5 }}>     { lastsen}</Typography>
         
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="inherit">
          تم
        </Button>
      </DialogActions>
    </Dialog>
  );
}