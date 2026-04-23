import Nav from './Nav.js'
import  DashBar from './DashBar.js'
import img1 from '../imgs/postimg.png'
import {Card,CardMedia,CardContent, TextField,Stack, Box, Typography, Container ,Button} from '@mui/material'
import { useState } from 'react'
import Divider from '@mui/material/Divider';
import EditNoteIcon from '@mui/icons-material/EditNote';
// import VisuallyHiddenInput from '@mui/utils/VisuallyHiddenInput';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function DashPosts() {
  const [visiblePost, setVisiblePost] = useState(2);

    const postsarr = [
        {
          id: 1,
          img: img1,
          content: `عجلة المشاعر والأكل العاطفي
    
    هل بتاكل لأنك جوعان… ولا لأنك متضايق؟
    
    أحيانًا ما نكون محتاجين أكل، بل محتاجين:
    
    راحة
    
    أمان
    
    تفريغ مشاعر
    
    🔄 عجلة المشاعر بتورجينا إنو:
    
    الحزن → أكل سكريات
    
    التوتر → أكل سريع
    
    الملل → بلع بدون وعي
    
    🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
    الوحيدة للتعامل مع المشاعر.
    
    🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
    تاكل اسأل نفسك:
    
    شو الشعور اللي حاسس فيه هلأ؟
    
    إذا عرفت الشعور، نص الحل صار موجود ✨
    `,
          lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
          title: "عجلة المشاعر والاكل العاطفي",
          overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
        },
        {
          id: 2,
          img: img1,
          content: `عجلة المشاعر والأكل العاطفي
    
    هل بتاكل لأنك جوعان… ولا لأنك متضايق؟
    
    أحيانًا ما نكون محتاجين أكل، بل محتاجين:
    
    راحة
    
    أمان
    
    تفريغ مشاعر
    
    🔄 عجلة المشاعر بتورجينا إنو:
    
    الحزن → أكل سكريات
    
    التوتر → أكل سريع
    
    الملل → بلع بدون وعي
    
    🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
    الوحيدة للتعامل مع المشاعر.
    
    🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
    تاكل اسأل نفسك:
    
    شو الشعور اللي حاسس فيه هلأ؟
    
    إذا عرفت الشعور، نص الحل صار موجود ✨
    `,
          lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
          title: "عجلة المشاعر والاكل العاطفي",
          overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
        },
        {
          id: 3,
          img: img1,
          content: `عجلة المشاعر والأكل العاطفي
    
    هل بتاكل لأنك جوعان… ولا لأنك متضايق؟
    
    أحيانًا ما نكون محتاجين أكل، بل محتاجين:
    
    راحة
    
    أمان
    
    تفريغ مشاعر
    
    🔄 عجلة المشاعر بتورجينا إنو:
    
    الحزن → أكل سكريات
    
    التوتر → أكل سريع
    
    الملل → بلع بدون وعي
    
    🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
    الوحيدة للتعامل مع المشاعر.
    
    🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
    تاكل اسأل نفسك:
    
    شو الشعور اللي حاسس فيه هلأ؟
    
    إذا عرفت الشعور، نص الحل صار موجود ✨
    `,
          lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
          title: "عجلة المشاعر والاكل العاطفي",
          overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
        },
        ,
        {
          id: 4,
          img: img1,
          content: `عجلة المشاعر والأكل العاطفي
    
    هل بتاكل لأنك جوعان… ولا لأنك متضايق؟
    
    أحيانًا ما نكون محتاجين أكل، بل محتاجين:
    
    راحة
    
    أمان
    
    تفريغ مشاعر
    
    🔄 عجلة المشاعر بتورجينا إنو:
    
    الحزن → أكل سكريات
    
    التوتر → أكل سريع
    
    الملل → بلع بدون وعي
    
    🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
    الوحيدة للتعامل مع المشاعر.
    
    🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
    تاكل اسأل نفسك:
    
    شو الشعور اللي حاسس فيه هلأ؟
    
    إذا عرفت الشعور، نص الحل صار موجود ✨
    `,
          lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
          title: "عجلة المشاعر والاكل العاطفي",
          overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
        },
        {
          id: 5,
          img: img1,
          content: `عجلة المشاعر والأكل العاطفي
    
    هل بتاكل لأنك جوعان… ولا لأنك متضايق؟
    
    أحيانًا ما نكون محتاجين أكل، بل محتاجين:
    
    راحة
    
    أمان
    
    تفريغ مشاعر
    
    🔄 عجلة المشاعر بتورجينا إنو:
    
    الحزن → أكل سكريات
    
    التوتر → أكل سريع
    
    الملل → بلع بدون وعي
    
    🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
    الوحيدة للتعامل مع المشاعر.
    
    🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
    تاكل اسأل نفسك:
    
    شو الشعور اللي حاسس فيه هلأ؟
    
    إذا عرفت الشعور، نص الحل صار موجود ✨
    `,
          lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
          title: "عجلة المشاعر والاكل العاطفي",
          overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
        },
        {
          id: 6,
          img: img1,
          content: `عجلة المشاعر والأكل العاطفي
    
    هل بتاكل لأنك جوعان… ولا لأنك متضايق؟
    
    أحيانًا ما نكون محتاجين أكل، بل محتاجين:
    
    راحة
    
    أمان
    
    تفريغ مشاعر
    
    🔄 عجلة المشاعر بتورجينا إنو:
    
    الحزن → أكل سكريات
    
    التوتر → أكل سريع
    
    الملل → بلع بدون وعي
    
    🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
    الوحيدة للتعامل مع المشاعر.
    
    🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
    تاكل اسأل نفسك:
    
    شو الشعور اللي حاسس فيه هلأ؟
    
    إذا عرفت الشعور، نص الحل صار موجود ✨
    `,
          lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
          title: "عجلة المشاعر والاكل العاطفي",
          overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
        },
    ];
    const [openPost, setOpenPost] = useState(false)
    let posts = postsarr.slice(0,visiblePost).map((post) => {
return (
                             <Card className="card">
          <Typography variant="h2" sx={{ margin: "10px" }}>
            {post.title}{" "}
          </Typography>

          <CardMedia component="img" height="300" image={post.img} />
          <CardContent>
            <Typography>{post.overview} </Typography>
          </CardContent>
          <Button
            sx={{
              width: "100%",
              marginTop: "20px",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            color={"primary"}
            variant="contained"
            onClick={() => {
           
              setOpenPost(true);
            }}
          >
            اقرا المزيد
          </Button>  </Card>)
    })
    return (

  <>
            <Nav />
                  <Box className="Dash-container">
                    <DashBar></DashBar>
                <Box className="Dash-content">
                    <Container >
                  <Box textAlign='right'>
              <Typography variant="h4" marginBottom='30px'>
ادارة المنشورات التثقيفية               </Typography>
              <Typography variant="h5">

قم بانشاء وتحرير المحتوى التعليمي لعملائك بطريقة مهنية وجذابة                        </Typography>
                            </Box>
                                                  
</Container>
                   
            <Stack  direction='row'  borderRadius={2} marginTop={3} justifyContent='space-between'>
                <Stack sx={{flexBasis:'60%'}} gap ={5}direction='column' >
                           <Typography varient='h4'> <EditNoteIcon/>محرر المنشورات </Typography>
             <Divider />
                            <Stack alignItems='center' border='1px dashed #777' direction='column' justifyContent='center' background='green' width='100%' height='200px' >
                                <CloudUploadIcon/>
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
    >
      رفع صورة الغلاف
                                    <input
                                        hidden
        type="file"
        onChange={(event) => console.log(event.target.files)}
                                        sx={{
                                            clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
                                              height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
                                        }}
                                        
      />
    </Button>
<Typography varient='h2'>
    يفضل استخدام صور عالية الجودة بنسبة 16:9
</Typography>
                            </Stack>
                            <Typography variant='h4' textAlign='right'  margin='0px 10px'>
                                العنوان
                            </Typography>
                                         <TextField
                                                            
                                placeholder='ادخل عنوانا جذابا'
                                fullWidth
                                variant="outlined" sx={{
                                    margin:'10px 0px !important',
                 '& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused': {
            minHeight: 'unset !important',
            width:'100%  !important',
            padding: 'unset !important',
                                    }, '& .MuiOutlinedInput-root': { width: '100% !important' }
                                }}
                                                        />
                            <Typography variant='h4' textAlign='right' margin='0px 10px'>
                                لمحة
                            </Typography>
                                        <TextField
                                                            
                                placeholder='وصف قصير للمنشور '
                                fullWidth
                                variant="outlined" sx={{
                                    margin: '10px 0px !important',
                                    '& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused': {
                                        minHeight: 'unset !important',
                                        width: '100% !important',
                                        padding: 'unset !important',

                                    }, '& .MuiOutlinedInput-root': { width: '100% !important' }
                                }}                                                />
                                
                            <Typography variant='h4' textAlign='right' margin='0px 10px'>
                                المحتوى
                            </Typography>
                                                                    <TextField
                                                            
                                placeholder=' اكتب تفاصيل المنشور هنا '
                                fullWidth
                                variant="outlined" sx={{
                                    margin:'10px 0px !important',
                 '& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused': {
            minHeight: 'unset !important',
            width:'100% !important',
            padding: 'unset !important',

          }, '& .MuiOutlinedInput-root':{width:'100% !important'}
                                }}
                                                        />
                            <Typography variant='h4' textAlign='right' margin='0px 10px'>
                                الجملة الختامية
                            </Typography>

                             <TextField
                                                            
                                placeholder=' مثال: عافية وسلام - لان صحتك النفسية اساس تغذيتك'
                                fullWidth
                                variant="outlined" sx={{
                                    margin:'10px 0px !important',
                 '& .MuiOutlinedInput-root.MuiInputBase-root.Mui-focused': {
            minHeight: 'unset !important',
            width:'100% !important',
            padding: 'unset !important',
          },
                                '& .MuiOutlinedInput-root':{width:'100% !important'}}}
                            />
                                     
                                        <Button
                                          sx={{
                                            width: "100%",
                                          }}
                                          color={"secondary"}
                                          variant="contained"
                                        >انشاء المنشور</Button>
                </Stack>
                <Stack direction='column'>
                    <Typography>
                        المنشورات الحالية
                            </Typography>
 {  
        
              
        posts}
                    </Stack>
                    </Stack> 
                                    </Box>
    
                                </Box>

</>
    )
}