import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../client/auth/auth/login/Login";
import SignIn from "../client/auth/auth/signup/SignUp";
import Orders from "../client/orders/Orders";
import Product from "../client/product/Product";
import Home from "../home/Home";
import Cart from "../client/cart/Cart";
import Payment from "../client/payment/Payment";

export const routes=[
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/orders",
      element: <Orders/>,
    },
    {
      path: "/products",
      element: <Product />,
    },
    {
      path: "/payment",
      element: <Payment/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
]