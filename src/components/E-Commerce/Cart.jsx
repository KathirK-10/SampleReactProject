import React from "react";

import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Divider,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { addtocart } from "./Redux/cartAction";


const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state);
    return (
        <>
        {cartItems.map((item) => (

            <div key={item.id}>

                <h2>{item.title}</h2>

                <p>${item.price}</p>

            </div>

        ))
}
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(135deg, #0f172a, #1e293b)",
                p: 3,
            }}
        >
            
            <Card
                sx={{
                    width: 380,
                    borderRadius: "25px",
                    background:
                        "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                    color: "white",
                    boxShadow:
                        "0 15px 40px rgba(0,0,0,0.5)",
                    overflow: "hidden",
                    transition: "0.4s",

                    "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow:
                            "0 20px 50px rgba(99,102,241,0.6)",
                    },
                }}
            >

                {/* Product Image */}
                <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
                    alt="product"
                    style={{
                        width: "100%",
                        height: "240px",
                        objectFit: "cover",
                    }}
                />

                <CardContent sx={{ p: 4 }}>

                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            mb: 1,
                        }}
                    >
                        Shopping Cart
                    </Typography>

                    <Typography
                        sx={{
                            color: "#cbd5e1",
                            mb: 3,
                        }}
                    >
                        Premium Smart Watch
                    </Typography>

                    <Divider
                        sx={{
                            background: "rgba(255,255,255,0.2)",
                            mb: 3,
                        }}
                    />

                    {/* Price */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 2,
                        }}
                    >
                        <Typography>Price</Typography>

                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#8b5cf6",
                            }}
                        >
                            $299
                        </Typography>
                    </Box>

                    {/* Quantity */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 4,
                        }}
                    >
                        <Typography>Quantity</Typography>

                        <Typography
                            sx={{
                                fontWeight: "bold",
                            }}
                        >
                            1
                        </Typography>
                    </Box>

                    {/* Buttons */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                        }}
                    >

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                py: 1.5,
                                borderRadius: "14px",
                                fontWeight: "bold",
                                background:
                                    "linear-gradient(90deg,#6366f1,#8b5cf6)",

                                "&:hover": {
                                    background:
                                        "linear-gradient(90deg,#4f46e5,#7c3aed)",
                                },
                            }}
                        >
                            Buy Now
                        </Button>

                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                                py: 1.5,
                                borderRadius: "14px",
                                color: "white",
                                borderColor: "rgba(255,255,255,0.3)",

                                "&:hover": {
                                    borderColor: "white",
                                    background:
                                        "rgba(255,255,255,0.08)",
                                },
                            }}
                                onClick={() => dispatch(addtocart({
                                    id: 1,
                                    title: "Premium Watch",
                                    price: 299,
                            }))}
                        >
                            Add
                            
                        </Button>

                    </Box>

                </CardContent>
            </Card>
            </Box>
            </>
    );
};

export default Cart;