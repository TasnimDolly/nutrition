import { Box,Button,Card, Container, Grid, Link, Stack, Typography } from "@mui/material";
import Bar from "./Bar";
import Foot from "./Foot";
import Avatar from "@mui/material/Avatar";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import logoimg from '../imgs/productsLogo.png'
import CheckIcon from '@mui/icons-material/Check';
import PendingIcon from '@mui/icons-material/Pending';  
import ErrorIcon from '@mui/icons-material/Error';
import DetailsNotFound from "./DetailsNotFound";
import PatientPackages from "./PatientPackages";
import PatientAppointment from "./PatientAppointment";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
export default function Profile() { 
  let isExist=true
    const user = {
        name: 'اسم المريض',
        phone: '0960093305',
        address: 'سوريا- حماة - الشريعة - دوار البغدادي',
      email: 'user@gmail.com',
      gender: "انثى",
      birthdate: "12-11-2004",
      
        // there is additional data to be added
  }
  const payments = [{ paymentNumber:10,paymentStatus:'pending',amount:10,createdAt:'12-10-2090'}]
   const lastpayment=payments.map((payment) => {
             return(     
                        <>
                          <Typography className="typo" variant="h4">رقم العملية: {payment.paymentNumber}</Typography>
                          <Typography variant="h4" className="typo">حالة العملية: <Typography display='inline' variant="h2">{(payment.paymentStatus === 'confirmed') ? <CheckIcon /> : (payment.paymentStatus === 'pending') ? <><PendingIcon /> <Typography variant="h2" color="orange" display='inline'>بانتظار التاكيد</Typography></> : <ErrorIcon />}</Typography></Typography>
                          <Typography variant="h4" className="typo">المبلغ: {payment.amount}</Typography>
                          <Typography variant="h4" className="typo">تاريخ الدفع :{payment.createdAt}</Typography>
                        </>
                       )                    } )
                         
                              
    return (
        <>
        <Bar />
        <Container>
            <Stack direction='column'>
   <Box
                    sx={{
                        display: "flex",
                     
                boxShadow: "2px 0px 4px 4px #00000040",
                backgroundColor: "#DCECF0",
                padding: "10px",
                borderRadius: "5px",
                        margin: "10px",
              gap: 5,
              display: "flex",
              alignItems:'center'
                    }}>
            <Avatar sx={{ width:'100px',height:'100px'}} />                    <Box sx={{ display: "flex", flexDirection: "column", gap: 5, justifyContent:"center"}}>
                        <Typography variant="h4" sx={{ textAlign: "right", color: "#0D6F73" ,marginTop:'20px'}}>
                        اسم المريض    
                        </Typography>
                        <Box>
                             <Stack
            direction={{xs:'column',sm:'column',md:'row'}}
            justifyContent="space-between"
                                gap={4}
          >
                <Typography variant="h2" fontSize={{ xs:22, sm:24 }}
              sx={{ marginBottom:10,display: "flex", alignItems: "center", }}
            >
              <LocalPhoneIcon  />
                                          {user.phone}          </Typography>
            <Typography fontSize={{ xs:22, sm:24 }} variant="h2"
              sx={{ marginBottom:10,display: "flex", alignItems: "center"}}
            >
              <LocationPinIcon  />
{user.address}            </Typography>
            <Typography fontSize={{ xs:22, sm:24 }} variant="h2"
              sx={{ marginBottom:10,display: "flex", alignItems: "center", }}
            >
              <EmailIcon />
                                                { user.email}                                            </Typography>
                            </Stack>

                        </Box>
                    </Box>
                                                                    <Button sx={{alignSelf:"flex-end",width:'50px',height :'50px'} } variant="contained">تعديل </Button>

          </Box>
          
          <Stack direction='row' gap={3} justifyContent='center' alignItems='center' flexWrap='wrap'>
                 <Box
            sx={{
              width: "350px",
              height:"300px",
                boxShadow: "2px 0px 4px 4px #00000040",
                        backgroundColor: "#DCECF0",
                        padding: "20px",
                borderRadius: "5px",
                margin: "10px",
                    }}>
                    <Typography variant="h4" sx={{ textAlign: "right", color: "#0D6F73" }}>
             اخر دفعة
                </Typography> 
                {payments.length == 0 ? <Typography variant="h4" sx={{margin:"90px !important" ,lineHeight:'1.9'}} className="typo">لم تقم بأي عملية دفع بعد!</Typography>  :
                 <>{lastpayment}</>
                 } </Box>
            
                    <Box
            sx={{
              width: "350px",
              height:"300px",
                boxShadow: "2px 0px 4px 4px #00000040",
                        backgroundColor: "#DCECF0",
                        padding: "20px",
                borderRadius: "5px",
                margin: "10px",
                    }}>
                    <Typography variant="h4" sx={{ textAlign: "right", color: "#0D6F73" }}>
         الموعد القادم            </Typography>
              {localStorage.getItem("AppointmentDate") && localStorage.getItem('AppointmentTime') ? <PatientAppointment/> :<> <DetailsNotFound title='لم يتم تحديد موعد بعد!' button='احجز موعدك الان'/> </> }
            </Box>
            
                  <Box
              sx={{
                boxShadow: "2px 0px 4px 4px #00000040",
                        backgroundColor: "#DCECF0",
                        padding: "20px",
                borderRadius: "5px",
                margin: "10px",
                    }}>
                    <Typography variant="h4" sx={{ textAlign: "right", color: "#0D6F73" }}>
خطتك الغذائية                    </Typography>   
    
              <Link href="../imgs/BarLogo.png" target="_blank" class='link' sx={{ display: 'block',margin:'20px 0px'}}>

                <Box sx={{
                  borderRadius:'10px',padding:'10px',color:'#F8F8F8', margin: "80px auto", width: '200px', height: '50px', backgroundColor:' #0D6F73', display: "flex", justifyContent: 'space-between'
                  , ':hover': { color: '#EF7261'} }}>

              <Typography >
                  الخطة الغذائية . pdf
               
              </Typography>
              <PictureAsPdfIcon />
            </Box>

              <Button href="../imgs/BarLogo.png" download='../imgs/BarLogo.png' variant="contained" color="primary">تحميل</Button>
              </Link>

              {/* </Box> */}
            </Box>
              <Box
            sx={{
              // width: "350px",
              // height:"300px",
                boxShadow: "2px 0px 4px 4px #00000040",
                        backgroundColor: "#DCECF0",
                        padding: "20px",
                borderRadius: "5px",
                margin: "10px",
                    }}>
                    <Typography variant="h4" sx={{ textAlign: "right", color: "#0D6F73" }}>
                باقاتك           </Typography>
              {!isExist ? <DetailsNotFound title='لم تشترك بباقات بعد!' button='احجز باقتك الان'/> : <PatientPackages/> }
            </Box>   
            </Stack>
        
            <Box sx={{
                        margin: '20px 0px', background: '#A0D7E2', padding: 2, borderRadius: 6, boxShadow: ' 4px 5px 5px 0px #00000040'
                      }} display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography variant="h4" sx={{ textAlign: 'right' }}> لتعديل المعلومات الشخصية اضغط على زر “التعديل” في الأعلى</Typography>
                        <img src={logoimg}></img>
          </Box>
          </Stack>
          </Container>
          <Foot />
          
    </>
)}