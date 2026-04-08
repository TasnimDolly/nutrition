import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import syriatelcash from "../imgs/Syriatelcash.png";
import Divider from "@mui/material/Divider";
import PayDialog from "./PayDialog";
import productimg1 from "../imgs/cartproduct1.png";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Alert, Stack } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import depofproducts from "../imgs/depofproducts.jpg";
import Bar from "./Bar";
import Foot from "./Foot";

import Snackbar from "@mui/material/Snackbar";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [payAlert, setPayAlert] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
    setPayAlert(true);
  };
  const [cartcontent, setCartContent] = useState([
    {
      id: 1,
      title: "اوزان",
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      title: "اوزان",
      price: 10,
      quantity: 1,
    },
    {
      id: 3,
      title: "اوزان",
      price: 10,
      quantity: 1,
    },
  ]);
  const partialprice = cartcontent.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 1;
  const total = partialprice + shipping;

  function handleIncrease(id) {
    setCartContent((p) => {
      return p.map((item) => {
        return item.id == id ? { ...item, quantity: item.quantity + 1 } : item;
      });
    });
  }
  function handleDecrease(id) {
    setCartContent((p) => {
      return p.map((item) => {
        return item.id == id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    });
  }
  return (
    <div className="cartpage">
      <Bar />
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ padding: "20px", margin: "20px" }}
        >
          <Typography variant="h4" sx={{ textAlign: "right" }}>
            سلتك
            <Typography variant="h2" sx={{ marginTop: 5, color: "#0D6F73" }}>
              لديك {cartcontent.length} منتجات في سلتك
            </Typography>
          </Typography>
          <Link to={"/products"}>
            <IconButton>
              <KeyboardReturnIcon sx={{ color: "primary.main" }} />
              <Typography>مواصلة التسوق</Typography>
            </IconButton>
          </Link>
        </Stack>
        <Grid
          container
          spacing={3}
          sx={{
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
          }}

        >
          <Grid className='cart-grid'
         item size={{ md: 4.5, xs: 11 }} >
            <img src={depofproducts} className="imgofproductsdep" />
          </Grid>
          <Grid item 
         className='cart-grid' size={{md:5.5 , xs:12}} >
            {cartcontent.map((product) => (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  margin: "20px 0px",
                  borderRadius: "20px",
                  padding: "20px 40px",
                  background: "#E0EDE9D4",

                  boxShadow: "4px 5px 5px 0px #00000040",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <img src={productimg1} />
                  <Box sx={{ textAlign: "right" }}>
                    <Typography
                      variant="h4"
                      sx={{ margin: "5px", fontSize: "20px", color: "#0D6F73" }}
                    >
                      {product.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", margin: "20px" }}
                    >
                      السعر {product.price}
                    </Typography>
                  </Box>
                </Box>
                <Stack direction="row">
                  <Stack
                    sx={{
                      background: "#0d969b5a",
                      borderRadius: 1,
                      minWidth: 120,
                      height: 40,
                      padding: "0px 5px",
                    }}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={1}
                  >
                    <Button
                      variant="contained"
                      onClick={() => handleIncrease(product.id)}
                      sx={{
                        minWidth: "40px",
                        width: 40,
                        height: 30,
                        fontSize: 25,
                      }}
                    >
                      +
                    </Button>
                    <Typography variant="h2">{product.quantity}</Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleDecrease(product.id)}
                      sx={{
                        minWidth: "40px",
                        width: 40,
                        height: 30,
                        fontSize: 25,
                      }}
                    >
                      -
                    </Button>
                  </Stack>
                  <IconButton
                    sx={{ color: "primary.main", alignSelf: "center", left: 0 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Stack>
            ))}
          </Grid>
          <Grid sx={{
            '@media (min-width:900px) and (max-width:1200px)': {
              flexBasis: '100%',
              // maxWidth: '100%'
            }
          }} item  className='cart-grid' size={{md:4 , xs:12}} 
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                borderRadius: "20px",
                padding: "20px 20px",
                background: "#E0EDE9D4",
                margin: 0,
                boxShadow: "4px 5px 5px 0px #00000040",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography variant="h2" sx={{ textAlign: "center" }}>
                  ملخص الطلب{" "}
                </Typography>
                {/* {orderdetails.map((order)=>{
              return (<> */}
                <Typography variant="h5">
                  {" "}
                  المجموع الفرعي
                  <Typography variant="price" sx={{ marginRight: 2 }}>
                    {partialprice}$
                  </Typography>
                </Typography>
                {/* <Typography>ا{ order.partial +  order.shipping }</Typography> */}
                <Typography variant="h5">
                  {" "}
                  اجور الشحن
                  <Typography variant="price" sx={{ marginRight: 2 }}>
                    {shipping} $
                  </Typography>
                </Typography>
                <Divider />
                <Typography variant="h2">
                  السعر الاجمالي
                  <Typography variant="price" sx={{ marginRight: 2 }}>
                    {total} $
                  </Typography>
                </Typography>

                <Button
                  sx={{
                    width: "100%",
                    marginTop: "20px",
                    boxShadow: "0px 4px 4px 0px #00000040",
                  }}
                  color={"primary"}
                  variant="contained"
                  onClick={() => setOpen(true)}
                >
                  اتمام عملية الشراء
                </Button>
                <PayDialog
                  open={open}
                  onClose={() => setOpen(false)}
                  onConfirm={handleConfirm}
                        title='ادخل رقم الدفع' 
                  content ='ادخل الرقم الذي استلمته للتو!'
                />
                <Snackbar
                  open={payAlert}
                  onClose={() => {
                    setPayAlert(false);
                  }}
                  autoHideDuration={6000}
            
                >
              
              {/* there is here an alert for error message too! */}
                  <Alert
                    sx={{ fontSize: "1.5rem" }}
                    severity="success"
                    variant="filled"
                  >
                    تم الدفع بنجاح
                  </Alert>
                </Snackbar>
                <Typography variant="h5">دفع آمن 100%</Typography>

                <img src={syriatelcash} />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Foot />
    </div>
  );
}
