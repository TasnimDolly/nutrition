import { Typography ,Box, Stack} from "@mui/material";

export default function PatientPackages() {
    const supscription = [{
        status: 'active',
        startDate: '12-2-2026',
        endDate: '12-3-2026',
        // there is additional data to be added
    },{    status: 'active',
        startDate: '12-2-2026',
        endDate: '12-3-2026',
        // there is additional data to be added
        },
    {    status: 'active',
        startDate: '12-2-2026',
        endDate: '12-3-2026',
        // there is additional data to be added
    },{    status: 'active',
        startDate: '12-2-2026',
        endDate: '12-3-2026',
        // there is additional data to be added
    },{    status: 'active',
        startDate: '12-2-2026',
        endDate: '12-3-2026',
        // there is additional data to be added
        }
    ,{    status: 'active',
        startDate: '12-2-2026',
        endDate: '12-3-2026',
        // there is additional data to be added
    }];
    const Package = {
        name: 'الباقة الذهبية',
    };
    let sup = supscription.map((s) => {
        return (
    
 <Box sx={{marginTop:'10px' ,borderRadius: '10px', padding: '10px', color: '#F8F8F8', backgroundColor: ' #0D6F73' }}>
        <Typography>{Package.name}</Typography> 
        
        <Typography>حالة الاشتراك: {s.status}</Typography>
        <Typography>تاريخ البدء: {s.startDate}</Typography>
        <Typography>تاريخ الانتهاء: {s.endDate}</Typography>
        </Box>


    )})
    return (<>
        <Stack direction='row' gap={5} alignItems='center'>
            {sup}
            </Stack>
       </>)
}