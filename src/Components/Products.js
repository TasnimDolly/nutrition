import Bar from "./Bar";
import { useState } from "react";
import logoimg from '../imgs/productsLogo.png'
import Grid from "@mui/material/Grid";
import Foot from "./Foot";
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
export default function Products() {
    // const quantiy = 1;
  const [isactive, setisactive] = useState('')
  const [visible, setVisible] = useState(6);
  const productsarr = [
      {
      id: 1,
      img:  img1 ,
      price:'15$'
      
      
    },    {
      id: 2,
      img:  img2 ,
      price:'15$'
      
      
    },    {
      id: 3,
      img:  img3 ,
      price:'15$'
      
      
    },    {
      id: 4,
      img:  img4 ,
      price:'15$'
      
      
    },    {
      id: 5,
      img:  img5 ,
      price:'15$'
      
      
    },    {
      id: 6,
      img:  img6 ,
      price:'15$'
      
      
    },
        {
      id: 7,
      img:  img7 ,
      price:'15$'
      
      
    }
        ,    {
      id: 8,
      img:  img8 ,
      price:'15$'
      
      
    }
        ,    {
      id: 9,
      img:  img9 ,
      price:'15$'
      
      
    }
        ,    {
      id: 10,
      img:  img10 ,
      price:'15$'
      
      
    }       ,    {
      id: 11,
      img:  img11 ,
      price:'15$'
      
      
    }       ,    {
      id: 9,
      img:  img12 ,
      price:'15$'
      
      
    }

  ]
  let products = productsarr.slice(0,visible).map((product) => { 
      return (
      
        <Grid item size={4} key={product.id}>
          <Card sx={{ maxWidth: 345, borderRadius: 5, backgroundColor: '#d6f4f9' }}>
            <CardMedia className="card"
              component="img"
              image={product.img}
                sx={{
    height: 300,        
    objectFit: "cover", 

  }}
            />
            <CardContent>
              <Typography gutterBottom sx={{ textAlign: 'center' }}>
                السعر {product.price} 
              </Typography>
    
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* <Stack direction='row' justifyContent='space-between' spacing={10}> */}
              <Button variant="contained" sx={{
                boxShadow: '0px 4px 4px 0px #00000040',
                backgroundColor: (theme) => theme.palette.text.skyblue,
              }} >اضافة للسلة</Button>
              <Select className="select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
                label="Age"
                IconComponent={ExpandMoreIcon}
                variant="filled" 
              sx={{  width: 60,
    height: 45,
    backgroundColor: "#289EA9",
    color: "white",
                borderRadius: "10px",
             boxShadow:' 4px 5px 5px 0px #00000040'
  }}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
                        
            </CardActions>
          </Card>
        </Grid>
                 

      )
    
  })

  
    return (
        <div className='productspage'style={{ background:'#A0D7E2' }}>
            
            <Bar />
              
            <Stack direction='row' justifyContent='space-between' alignItems='baseline' sx={{paddingLeft:5,margin:10}}> 
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
            variant="standard" sx={{ '&': { marginTop: 0 } }}
                />
          <Box   display='flex' gap={1} >
        
        <Button className='filterbox' variant={isactive == 'snacks' ? 'contained' : 'outlined'} onClick={() => { setisactive('snacks'); }} >
               <Typography variant="h2" >
                سناكات صحية
            </Typography></Button>
            <Button className='filterbox' variant={isactive == 'healthy' ? 'contained' : 'outlined'} onClick={() => { setisactive('healthy'); }} >
               <Typography variant="h2" >
                عشبية صحية
            </Typography></Button>
            <Button  className='filterbox' variant={isactive == 'tools' ? 'contained' : 'outlined'} onClick={() => { setisactive('tools') }}>
               <Typography variant="h2" >
              ادوات صحية</Typography></Button>
            {/* <Button  className='filterbox' variant={isactive == 'quantity' ? 'contained' : 'outlined'} onClick={() => { setisactive('quantity') }}>
              
               <Typography variant="h2" >
              
              حسب المخزون</Typography></Button> */}
            <Button  className='filterbox' variant={isactive == 'price' ? 'contained' : 'outlined'} onClick={() => { setisactive('price') }}>
               <Typography variant="h2" >حسب السعر</Typography>
        </Button>
         <Button className='filterbox' variant ={isactive=='all' ? 'contained' : 'outlined'} onClick={()=>{setisactive('all')}}><Typography variant="h2">الكل</Typography></Button>
        
      </Box>
      
            </Stack>
          <Container maxWidth='lg' >
            <Grid  container spacing={4} sx={{marginTop:10}} alignItems='center'>
            { products}
          </Grid>
          <Button  
                     variant="contained"  color={"primary"} sx={{margin:5}} disabled={visible >= productsarr.length } onClick={() => { setVisible(visible + 6);}}>
  عرض المزيد
          </Button>
          
        
                <Box sx={{margin:'20px 0px',background:'#DCECEF',padding:2,borderRadius:6,boxShadow:' 4px 5px 5px 0px #00000040'
}} display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography variant="h4" sx={{textAlign:'right'}}> احصل على خصومات عند طلب المنتجات !</Typography>
               <img src={logoimg}></img>
                </Box>
               </Container>




                <Foot />
        </div>
        
    )

}