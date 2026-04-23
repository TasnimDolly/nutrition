import Nav from "./Nav";
import DashBar from "./DashBar";
import DashPagesTitle from "./DashPagesTitle";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { TextField, Stack, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

// imgs
import img1 from "../imgs/product1.png";
import img2 from "../imgs/product2.png";
import img3 from "../imgs/product3.png";
import img4 from "../imgs/product4.png";
import img5 from "../imgs/product5.png";
import img6 from "../imgs/product6.png";
import img7 from "../imgs/product7.png";
import img8 from "../imgs/product8.png";
import img9 from "../imgs/product9.png";
import img10 from "../imgs/product10.png";
import img11 from "../imgs/product11.png";
import img12 from "../imgs/product12.png";
// imgs

const productsarr = [
  {
    id: 1,
    img: img1,
    price: "15$",
    type: "سناكات صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
  {
    id: 2,
    img: img2,
    price: "15$",
    type: "عشبية صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
  {
    id: 3,
    img: img3,
    price: "15$",
    type: "أدوات صحية",
    name: "اسم المنتج",
    quantity: 4,
  },
  {
    id: 4,
    img: img4,
    price: "15$",
    type: "عشبية صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
  {
    id: 5,
    img: img5,
    price: "15$",
    type: "أدوات صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
  {
    id: 6,
    img: img6,
    price: "15$",
    type: "أدوات صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
  {
    id: 7,
    img: img7,
    price: "15$",
    type: "سناكات صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
  {
    id: 8,
    img: img8,
    price: "15$",
    type: "سناكات صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
  {
    id: 9,
    img: img9,
    price: "15$",
    name: "اسم المنتج",
    type: "عشبية صحية",
    quantity: 1,
  },
  {
    id: 10,
    img: img10,
    price: "15$",
    type: "سناكات صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
  {
    id: 11,
    img: img11,
    price: "15$",
    type: "سناكات صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
  {
    id: 12,
    img: img12,
    price: "15$",
    type: "سناكات صحية",
    name: "اسم المنتج",
    quantity: 1,
  },
];

export default function DashProducts() {
  const [visible, setVisible] = useState(6);
  const [Itemsquantity, setItemsquantity] = useState([
    {
      id: { ...productsarr.map((product) => product.id) },
      quantity: { ...productsarr.map((product) => product.quantity) },
    },
  ]);
  // function handleIncrease(id) {
  //   setItemsquantity((p) => {
  //     console.log(p);
  //     return p.map((item) => {
  //       console.log(item);
  //       console.log(id);
  //       return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
  //     });
  //   });
  // }
  // function handleDecrease(id) {
  //   setItemsquantity((p) => {
  //     console.log(p);
  //     return p.map((item) => {
  //       console.log(item);
  //       console.log(id);
  //       return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
  //     });
  //   });
  // }

  let products = productsarr.slice(0, visible).map((product) => {
    return (
      <Grid item size={{ md: 4, sm: 6, xs: 12 }} key={product.id}>
        <Card
          sx={{
            textAlign: "right",
            maxWidth: 400,
            borderRadius: 5,
            backgroundColor: "#d6f4f9",
            boxShadow: "2px 3px 10px 0px #000000",
            border: "15px solid #d6f4f9",
            position: "relative",
          }}
        >
          <Button
            sx={{
              position: "absolute",
              top: "10px",
              right: "5px",
              borderRadius: 5,
              backgroundColor: "#d6f4f9",
            }}
          >
            {product.type}
          </Button>
          <CardMedia
            className="card"
            component="img"
            image={product.img}
            sx={{
              height: 300,
              objectFit: "cover",
            }}
          />
          <CardContent>
            <Typography variant="h2" gutterBottom sx={{ marginBottom: "10px" }}>
              {product.name}
            </Typography>
            <Typography gutterBottom>السعر {product.price}</Typography>
            <Typography gutterBottom sx={{ margin: "10px 0" }}>
              الكمية في المخزون:
            </Typography>
            <Stack
              sx={{
                background: "#0d969b5a",
                borderRadius: 1,
                Width: "20px !important",
                height: "40px",
                padding: "5px 5px",
              }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={1}
            >
              <Button
                variant="contained"
                // onClick={() => handleIncrease(product.id)}
                sx={{
                  minWidth: "40px",
                  width: 40,
                  height: 30,
                  fontSize: 25,
                }}
              >
                +
              </Button>
              <Typography variant="h2">
                {Itemsquantity.find((item) => item.id === product.id)
                  ?.quantity || product.quantity}
              </Typography>
              <Button
                variant="contained"
                // onClick={() => handleDecrease(product.id)}
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
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <>
      <Nav />

      <Box className="Dash-container">
        <DashBar></DashBar>
        <Box className="Dash-content">
          <DashPagesTitle
            title="
          لوحة تحكم المنتجات"
            description="
          قم بادارة المنتجات و المميزات و الأسعار من هنا"
            addButtonLebal="إضافة منتج جديد"
          ></DashPagesTitle>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            width="95%"
            margin="20px auto 0"
            mb="10px"
          >
            <TextField
              className="textfield"
              label="بحث عن اسم منتج"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ fontSize: 30 }} />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
              sx={{
                "& .Mui-focused fieldset": {
                  "& .MuiInputLabel-root.Mui-focused": { marginTop: "0px" },
                  "&.MuiOutlinedInput-notchedOutline legend": {
                    textAlign: "right",
                  },
                  width: "310px",
                },
              }}
            />
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button
              // variant={activeFilter == "type" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("type");
              // }}
              >
                سناكات صحية
              </Button>
              <Button
              // variant={activeFilter == "quantity" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("quantity");
              // }}
              >
                عشبية صحية
              </Button>
              <Button
              // variant={activeFilter == "price" ? "contained" : "outlined"}
              // onClick={(e) => {
              //   setActiveFilter("price");
              // }}
              >
                أدوات صحية
              </Button>
              <Button
                variant="contained"
                // variant={activeFilter == "price" ? "contained" : "outlined"}
                // onClick={(e) => {
                //   setActiveFilter("price");
                // }}
              >
                الكل
              </Button>
            </Box>
          </Stack>{" "}
          <Grid container spacing={4} sx={{ marginTop: 5 }} alignItems="center">
            {products}
          </Grid>
          <Button
            variant="contained"
            color={"primary"}
            sx={{ margin: 5 }}
            disabled={visible >= productsarr.length}
            onClick={() => {
              setVisible(visible + 6);
            }}
          >
            عرض المزيد
          </Button>
        </Box>
      </Box>
    </>
  );
}
