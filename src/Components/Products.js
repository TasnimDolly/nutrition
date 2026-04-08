import Bar from "./Bar";
import { useState } from "react";
import logoimg from '../imgs/productsLogo.png'
import Grid from "@mui/material/Grid";
import Foot from "./Foot";
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
// imgs
import img1 from '../imgs/product1.png'
import img2 from '../imgs/product2.png'
import img3 from '../imgs/product3.png'
import img4 from '../imgs/product4.png'
import img5 from '../imgs/product5.png'
import img6 from '../imgs/product6.png'
import img7 from '../imgs/product7.png'
import img8 from '../imgs/product8.png'
import img9 from '../imgs/product9.png'
import img10 from '../imgs/product10.png'
import img11 from '../imgs/product11.png'
import img12 from '../imgs/product12.png'
// imgs
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Component } from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { InputLabel } from "@mui/material";
export default function Products() {

 
  const [visible, setVisible] = useState(6);
   const [type,setType]=useState('')
   const [quantity,setQuantity]=useState('')
  const [price, setPrice] = useState('')
  const [anchorElType, setAnchorElType] = useState(null);
  const [anchorElQuantity, setAnchorElQuantity] = useState(null);
  const [anchorElPrice, setAnchorElPrice] = useState(null);
  const [activeFilter, setActiveFilter] = useState('');
    const productsarr = [
      {
        id: 1,
        img: img1,
        price: '15$'
      ,type:''

      ,
      name:'اسم المنتج'
      }, {
        id: 2,
        img: img2,
        price: '15$'
            ,type:''
,
      name:'اسم المنتج'
      
      }, {
        id: 3,
        img: img3,
        price: '15$'
            ,type:'',
 name:'اسم المنتج'
      
      }, {
        id: 4,
        img: img4,
        price: '15$'
            ,type:''
,
      name:'اسم المنتج'
      
      }, {
        id: 5,
        img: img5,
        price: '15$'
            ,type:''
,
      name:'اسم المنتج'
      
      }, {
        id: 6,
        img: img6,
        price: '15$'
      ,type:''
      ,
      name:'اسم المنتج'
      },
      {
        id: 7,
        img: img7,
        price: '15$'
            ,type:''

      ,
      name:'اسم المنتج'
      }
      , {
        id: 8,
        img: img8,
        price: '15$'
      ,
      name:'اسم المنتج'
      ,type:''
      }
      , {
        id: 9,
        img: img9,
        price: '15$'
      ,
      name:'اسم المنتج'
      
      }
      , {
        id: 10,
        img: img10,
        price: '15$'
        , type: '',
      name:'اسم المنتج'
      
      }, {
        id: 11,
        img: img11,
        price: '15$'
      ,type:'',
      name:'اسم المنتج'
      
      }, {
        id: 9,
        img: img12,
        price: '15$'
      ,type:''
      ,
      name:'اسم المنتج'
      }

    ]
    let products = productsarr.slice(0, visible).map((product) => {
      return (
      
        <Grid item size={{md:4 ,sm:6, xs:12}}  key={product.id}>
          <Card sx={{ maxWidth: 400, borderRadius: 5, backgroundColor: '#d6f4f9' ,boxShadow:'2px 3px 10px 0px #000000'}}>
            <CardMedia className="card"
              component="img"
              image={product.img}
              sx={{
                height: 300,
                objectFit: "cover",

              }}
            />
            <CardContent>
               <Typography variant="h2" gutterBottom sx={{ textAlign: 'center',marginBottom:'20px' }}>
               {product.name}
              </Typography>
              <Typography gutterBottom sx={{ textAlign: 'center' }}>
                السعر {product.price}
              </Typography>
    
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* <Stack direction='row' justifyContent='space-between' spacing={10}> */}
              <Button variant="contained" sx={{
                boxShadow: '0px 4px 4px 0px #00000040',
                backgroundColor: (theme) => theme.palette.text.skyblue,
              
              }} >اضافة للسلة</Button>

                        
            </CardActions>
          </Card>
        </Grid>
                 

      )
    
    })

  
    return (
      <div className='productspage' style={{ background: '#FFFFFF' }}>
            
        <Bar />
              
        <Stack direction={{ xs: 'column', sm: 'row' }}  justifyContent='space-between' alignItems='baseline' sx={{ paddingLeft: 5, margin: 10 }}>
          <TextField
                  
            className="textfield"
            label="بحث عن اسم المنتج"

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
            variant="standard" sx={{ '&': { marginTop: 0 }, backgroundColor: 'white', borderRadius: 10 }}
          />
          <Box display='flex' gap={1}  marginTop={{ xs: 10}}  >
        
       
            <Button variant={activeFilter=='type' ? 'contained' : 'outlined'} onClick={(e) => {
              setAnchorElType(e.currentTarget);
              setActiveFilter('type')
            }
            }>حسب النوع</Button>
          
          <Menu anchorEl={anchorElType}
            open={Boolean(anchorElType)}
            onClose={()=>{setAnchorElType(null)}
          }>
            <MenuItem  onClick={()=>{setType('snacks'); setAnchorElType(null)}}>سناكات صحية</MenuItem>
            <MenuItem onClick={()=>{setType('herpal'); setAnchorElType(null)}}>عشبية صحية</MenuItem>
            <MenuItem onClick={()=>{setType('tools'); setAnchorElType(null)}}>ادوات صحية</MenuItem>
            </Menu>
            <Button variant={activeFilter=='quantity' ? 'contained' : 'outlined'} onClick={(e) => {
              setAnchorElQuantity(e.currentTarget); 
              setActiveFilter('quantity')
            }}>حسب المخزون</Button>

               <Menu anchorEl={anchorElQuantity}
            open={Boolean(anchorElQuantity)}
            onClose={()=>{setAnchorElQuantity(null)}
          }>
            <MenuItem onClick={()=>{setQuantity(true); setAnchorElQuantity(null)}}>متوفر</MenuItem>
            <MenuItem onClick={()=>{setQuantity(false); setAnchorElQuantity(null)}}>غير متوفر</MenuItem>
            </Menu>
            <Button variant={activeFilter =='price'? 'contained' : 'outlined'} onClick={(e) => {
              setAnchorElPrice(e.currentTarget); 
              setActiveFilter('price')

            }}>حسب السعر</Button>

            <Menu anchorEl={anchorElPrice}
              open={Boolean(anchorElPrice)}
              onClose={() => {
                setAnchorElPrice(null);
             
              }}
            >
              <MenuItem onClick={()=>{setPrice('asc'); setAnchorElPrice(null)}}>من الاعلى للادنى</MenuItem>
              <MenuItem onClick={()=>{setPrice('desc'); setAnchorElPrice(null)}}>من الاقل للاعلى</MenuItem>
            </Menu>
            </Box>
        </Stack>
        <Container maxWidth='lg' >
          <Grid container spacing={4} sx={{ marginTop: 10 }} alignItems='center'>
            {products}
          </Grid>
          <Button
            variant="contained" color={"primary"} sx={{ margin: 5 }} disabled={visible >= productsarr.length} onClick={() => { setVisible(visible + 6); }}>
            عرض المزيد
          </Button>
          
        
          <Box sx={{
            margin: '20px 0px', background: '#DCECEF', padding: 2, borderRadius: 6, boxShadow: ' 4px 5px 5px 0px #00000040'
          }} display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant="h4" sx={{ textAlign: 'right' }}> احصل على خصومات عند طلب المنتجات !</Typography>
            <img src={logoimg}></img>
          </Box>
        </Container>




        <Foot />
      </div>
        
    )
  
  }
