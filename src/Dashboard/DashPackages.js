import Nav from './Nav'
import DashBar from './DashBar'
import { TextField,Box, Typography, Stack, Card, Button,InputAdornment, Container } from '@mui/material'
import CardContent from "@mui/material/CardContent";
import SearchIcon from '@mui/icons-material/Search';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks'
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import {useState } from 'react';
import { styled } from '@mui/material/styles';
import './DashPackagesTable.js'
import DashPackagesTable from './DashPackagesTable.js';
export default function DashPackages() {
      
     
      const [activeFilter, setActiveFilter] = useState('');
    const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
    ];
    
const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));
    function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
    return (
        <>
            <Nav />
                  <Box className="Dash-container">
                    <DashBar></DashBar>
                <Box className="Dash-content">
                    <Container >
                  <Box textAlign='right'>
              <Typography variant="h4" marginBottom='30px'>
لوحة تحكم الباقات               </Typography>
              <Typography variant="h5">

قم بادارة خطط الإشتراك و المميزات و الأسعار من هنا                        </Typography>
                    </Box>
                    <Stack  sx={{ background: 'linear-gradient(to right, #f4f4f4, #DCEECF)' }} direction ='row' justifyContent='space-between' alignItems='center' gap={2} marginTop={3}>
                        <Stack direction='column' gap={2} borderRadius={2}>
                            
                                <Typography variant='h6' padding={1} textAlign='center'>
الباقات الاكثر مبيعا                                 </Typography>
                              
 <Card className="card">
          <Typography variant="h2" sx={{ margin: "10px" }}>
           الباقة الاكثر مبيعا للشهر السابق هي باقة الشباب 
          </Typography>

                                    <CardContent>
                                         <Typography>
                                        نسبة المبيع هي 60% من اجمالي الباقات المباعة
                                    </Typography> 
                                    </CardContent>
                                </Card>    
           <Card className="card">
          <Typography variant="h2" sx={{ margin: "10px" }}>
الباقة التي انخفض فيها الاشتراك خلال الفترة السابقة         </Typography>
                                    <CardContent>
                                        <Typography>
                               باقة السعادة وانخفض فيها الاشتراك بنسبة 20%
       </Typography>
                                    </CardContent>
          </Card>                         
                            <Button variant="contained" color="primary" sx={{ margin: "10px" }}>
                                اضافة باقة جديدة                            </Button>
                            
                        </Stack>
                        <Box sx={{width:'500px',height:'400px',borderRadius:9}}>
<PieChart series={[{ data, innerRadius: 80 }]} >
                                <PieCenterLabel>
                                    احصائيات الباقات </PieCenterLabel>
    
                            </PieChart>
                        </Box>
                         
   </Stack>
                        <Container sx={{background:'linear-gradient(to right, #f4f4f4, #DCEECF)',borderRadius:3,marginTop:5}}>
                        <Stack direction='row' justifyContent='space-between' alignItems='baseline' mb='100px'>
                             <TextField
                                              
                                    className="textfield"
                                    label="بحث عن اسم الباقة"
                            
                                    slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {" "}
                                                    <SearchIcon sx={{ fontSize: 30 }} />
                                                </InputAdornment>
                                            ),
                                        },
                                         
                                    }}
                                    variant="outlined" sx={{'& .Mui-focused fieldset': { "& .MuiInputLabel-root.Mui-focused": { marginTop: '0px' }, '&.MuiOutlinedInput-notchedOutline legend':{ textAlign:'right'}, width: "300px" } }}
                            />
                                                        {/* <Button variant="contained" color="primary"  >
                    بحث                           </Button> */}
                    <Box display='flex' gap={1}  marginTop={{ xs: 10}}  >
                            
                           
                                <Button variant={activeFilter=='type' ? 'contained' : 'outlined'} onClick={(e) => {
                                  setActiveFilter('type')
                                }
                                }>حميات صحية</Button>
                              
                             
                                <Button variant={activeFilter=='quantity' ? 'contained' : 'outlined'} onClick={(e) => {
                                  setActiveFilter('quantity')
                                }}>اجراءات علاجية</Button>
                    
                              
                                <Button variant={activeFilter =='price'? 'contained' : 'outlined'} onClick={(e) => {
                                  setActiveFilter('price')
                    
                                }}>الكل</Button>
                    
                                
                                </Box>
                            </Stack>
                            <DashPackagesTable />
                            
</Container>

       </Container>          
            </Box>
 </Box>           
        </>
    )
}